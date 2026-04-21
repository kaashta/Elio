// LearnPage — learning paths sidebar + module list + in-module viewer
// Route: /learn  and  /learn/module/:moduleId

import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProgressBar from '../components/ProgressBar';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

// ── Module viewer ────────────────────────────────────────────────────────────
function ModuleViewer({ module, onComplete, onBack }) {
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [completing, setCompleting] = useState(false);
  const [error, setError] = useState('');

  const quiz = module.quiz || [];
  const isCompleted = module.userProgress?.[0]?.completed;

  const handleQuizAnswer = (qIdx, optIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const submitQuiz = () => {
    let correct = 0;
    quiz.forEach((q, i) => {
      if (quizAnswers[i] === q.answer) correct++;
    });
    setScore(correct);
    setQuizSubmitted(true);
  };

  const markComplete = async () => {
    setCompleting(true);
    setError('');
    try {
      const res = await fetch(`/api/learn/modules/${module.id}/complete`, {
        method: 'POST',
        credentials: 'include',
      });
      if (!res.ok) throw new Error('Could not mark complete');
      onComplete(module.id);
    } catch (err) {
      setError(err.message);
    } finally {
      setCompleting(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Back link */}
      <button onClick={onBack} className="btn-ghost text-sm self-start">
        ← Back to path
      </button>

      {/* Module header */}
      <div>
        <p className="text-xs uppercase tracking-widest text-terracotta font-semibold mb-1">
          {module.path?.title}
        </p>
        <h2 className="font-heading text-2xl font-bold text-warm-brown mb-1">{module.title}</h2>
        <p className="text-muted-text text-sm">⏱ {module.duration}</p>
      </div>

      {/* Video embed (if available) */}
      {module.videoUrl && (
        <div className="aspect-video w-full rounded-card overflow-hidden shadow-card">
          <iframe
            src={module.videoUrl}
            className="w-full h-full"
            title={module.title}
            allowFullScreen
          />
        </div>
      )}

      {/* Content */}
      <div
        className="prose prose-warm max-w-none bg-off-white rounded-card p-6 shadow-card
                   [&>h2]:font-heading [&>h2]:text-warm-brown [&>h3]:text-warm-brown
                   [&>p]:text-warm-brown/90 [&>p]:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: module.content }}
      />

      {/* Quiz */}
      {quiz.length > 0 && (
        <div className="card">
          <h3 className="font-heading text-lg font-semibold text-warm-brown mb-4">
            Quick check — let's see what you've learned
          </h3>

          <div className="flex flex-col gap-6">
            {quiz.map((q, qIdx) => (
              <div key={qIdx}>
                <p className="font-medium text-warm-brown mb-3">
                  {qIdx + 1}. {q.question}
                </p>
                <div className="flex flex-col gap-2">
                  {q.options.map((opt, optIdx) => {
                    const selected = quizAnswers[qIdx] === optIdx;
                    const isCorrect = quizSubmitted && optIdx === q.answer;
                    const isWrong = quizSubmitted && selected && optIdx !== q.answer;

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleQuizAnswer(qIdx, optIdx)}
                        className={`text-left px-4 py-3 rounded-btn border transition-all duration-150
                          ${isCorrect ? 'border-sage bg-sage/10 text-sage font-medium' : ''}
                          ${isWrong ? 'border-rust bg-rust/10 text-rust' : ''}
                          ${!quizSubmitted && selected ? 'border-terracotta bg-terracotta/10 text-terracotta' : ''}
                          ${!quizSubmitted && !selected ? 'border-sand hover:border-terracotta/50' : ''}
                        `}
                      >
                        {opt}
                        {isCorrect && ' ✓'}
                        {isWrong && ' ✗'}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {!quizSubmitted ? (
            <button
              onClick={submitQuiz}
              className="btn-secondary mt-6"
              disabled={Object.keys(quizAnswers).length < quiz.length}
            >
              Submit answers
            </button>
          ) : (
            <div className="mt-4 p-4 bg-cream rounded-card">
              <p className="font-semibold text-warm-brown">
                You got {score} of {quiz.length} right
                {score === quiz.length ? ' — brilliant! 🎉' : ' — great effort! Review any you missed.'}
              </p>
            </div>
          )}
        </div>
      )}

      <ErrorMessage message={error} />

      {/* Mark complete */}
      <div className="flex justify-end">
        {isCompleted ? (
          <div className="flex items-center gap-2 text-sage font-medium">
            <span>✅</span> Module complete!
          </div>
        ) : (
          <button onClick={markComplete} className="btn-primary" disabled={completing}>
            {completing ? 'Saving…' : 'Mark as complete ✓'}
          </button>
        )}
      </div>
    </div>
  );
}

// ── Main LearnPage ────────────────────────────────────────────────────────────
export default function LearnPage() {
  const { moduleId } = useParams();
  const navigate = useNavigate();

  const [paths, setPaths] = useState([]);
  const [selectedPath, setSelectedPath] = useState(null);
  const [activeModule, setActiveModule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [moduleLoading, setModuleLoading] = useState(false);

  // Load all paths + progress on mount
  useEffect(() => {
    fetch('/api/learn/paths', { credentials: 'include' })
      .then((r) => r.json())
      .then((data) => {
        if (data.paths?.length) {
          setPaths(data.paths);
          setSelectedPath(data.paths[0]);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  // If a moduleId is in the URL, load that module
  useEffect(() => {
    if (!moduleId) {
      setActiveModule(null);
      return;
    }
    setModuleLoading(true);
    fetch(`/api/learn/modules/${moduleId}`, { credentials: 'include' })
      .then((r) => r.json())
      .then((data) => {
        if (data.module) setActiveModule(data.module);
      })
      .catch(console.error)
      .finally(() => setModuleLoading(false));
  }, [moduleId]);

  // When a module is marked complete, update local state so the tick appears
  const handleComplete = (completedModuleId) => {
    setPaths((prev) =>
      prev.map((path) => ({
        ...path,
        modules: path.modules.map((m) =>
          m.id === completedModuleId
            ? { ...m, userProgress: [{ completed: true, completedAt: new Date().toISOString() }] }
            : m
        ),
      }))
    );
    if (activeModule?.id === completedModuleId) {
      setActiveModule((prev) => ({
        ...prev,
        userProgress: [{ completed: true, completedAt: new Date().toISOString() }],
      }));
    }
  };

  // Progress % for a path
  const pathProgress = (path) => {
    const total = path.modules.length;
    const done = path.modules.filter((m) => m.userProgress?.[0]?.completed).length;
    return total > 0 ? Math.round((done / total) * 100) : 0;
  };

  if (loading) return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <LoadingSpinner />
    </div>
  );

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* ── Sidebar — learning paths ─────────────────── */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <h2 className="font-heading text-lg font-semibold text-warm-brown mb-4">
              Learning Paths
            </h2>
            <div className="flex flex-col gap-3">
              {paths.map((path) => (
                <button
                  key={path.id}
                  onClick={() => { setSelectedPath(path); navigate('/learn'); }}
                  className={`text-left p-4 rounded-card border transition-all duration-150
                    ${selectedPath?.id === path.id
                      ? 'border-terracotta bg-terracotta/5 shadow-card'
                      : 'border-sand bg-off-white hover:border-terracotta/50'
                    }`}
                >
                  <p className="font-medium text-warm-brown text-sm">{path.title}</p>
                  <div className="mt-2">
                    <ProgressBar percent={pathProgress(path)} />
                  </div>
                </button>
              ))}
            </div>
          </aside>

          {/* ── Main content area ─────────────────────────── */}
          <main className="flex-1 min-w-0">
            {moduleLoading ? (
              <LoadingSpinner />
            ) : moduleId && activeModule ? (
              /* Module detail view */
              <ModuleViewer
                module={activeModule}
                onComplete={handleComplete}
                onBack={() => navigate('/learn')}
              />
            ) : selectedPath ? (
              /* Module list for selected path */
              <div>
                <h2 className="font-heading text-2xl font-bold text-warm-brown mb-1">
                  {selectedPath.title}
                </h2>
                <p className="text-muted-text mb-6">{selectedPath.description}</p>

                <div className="flex flex-col gap-3">
                  {selectedPath.modules.map((mod, idx) => {
                    const completed = mod.userProgress?.[0]?.completed;
                    const locked = idx > 0 && !selectedPath.modules[idx - 1]?.userProgress?.[0]?.completed;

                    return (
                      <div
                        key={mod.id}
                        className={`card flex items-center gap-4 transition-all duration-150
                          ${locked ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-card-hover cursor-pointer'}`}
                        onClick={() => !locked && navigate(`/learn/module/${mod.id}`)}
                      >
                        {/* Status icon */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold
                          ${completed ? 'bg-sage text-off-white' : locked ? 'bg-sand text-muted-text' : 'bg-terracotta/10 text-terracotta'}`}>
                          {completed ? '✓' : locked ? '🔒' : idx + 1}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-warm-brown">{mod.title}</h3>
                          <p className="text-sm text-muted-text truncate">{mod.description}</p>
                        </div>

                        <span className="text-xs text-muted-text flex-shrink-0">⏱ {mod.duration}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <p className="text-muted-text">Select a learning path to get started.</p>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
