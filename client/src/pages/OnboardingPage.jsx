// OnboardingPage — 3-step profile setup after signup
// Step 1: Photo + display name + bio
// Step 2: Goals (checkboxes)
// Step 3: Interests (pills/tags)

import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ProgressBar from '../components/ProgressBar';
import ErrorMessage from '../components/ErrorMessage';

const GOALS = [
  'Find work',
  'Build confidence',
  'Learn new skills',
  'Connect with others',
  'Find a mentor',
];

const INTERESTS = [
  'Business basics',
  'Digital skills',
  'Finance',
  'Communication',
  'Leadership',
  'Wellbeing',
  'Creative skills',
  'Customer service',
];

const TOTAL_STEPS = 3;

export default function OnboardingPage() {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [name, setName] = useState(user?.name || '');
  const [bio, setBio] = useState('');
  const [goals, setGoals] = useState([]);
  const [interests, setInterests] = useState([]);
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const fileRef = useRef(null);

  // Progress percentage based on current step
  const progressPercent = ((step - 1) / TOTAL_STEPS) * 100;

  // Handle photo file selection
  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  // Toggle a checkbox-style goal
  const toggleGoal = (goal) =>
    setGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );

  // Toggle a pill-style interest
  const toggleInterest = (interest) =>
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );

  const handleNext = () => {
    setError('');
    if (step < TOTAL_STEPS) setStep((s) => s + 1);
  };

  const handleBack = () => {
    setError('');
    if (step > 1) setStep((s) => s - 1);
  };

  // Final submission — upload photo first (if any) then save profile
  const handleFinish = async () => {
    setSaving(true);
    setError('');

    try {
      // Upload photo if one was selected
      if (photoFile) {
        const fd = new FormData();
        fd.append('photo', photoFile);
        const photoRes = await fetch('/api/users/photo', {
          method: 'POST',
          credentials: 'include',
          body: fd,
        });
        if (!photoRes.ok) throw new Error('Photo upload failed');
      }

      // Save profile data
      const res = await fetch('/api/users/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name, bio, goals, interests }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Could not save profile');

      updateUser(data.user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="font-heading text-2xl font-bold text-terracotta">Elio</span>
          <h1 className="font-heading text-xl text-warm-brown mt-2">
            Let's set up your profile
          </h1>
          <p className="text-sm text-muted-text mt-1">Step {step} of {TOTAL_STEPS}</p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <ProgressBar percent={progressPercent} />
        </div>

        <div className="card">
          {/* ── Step 1: Name, Photo, Bio ─────────────────── */}
          {step === 1 && (
            <div className="flex flex-col gap-5">
              <h2 className="font-heading text-xl font-semibold text-warm-brown">
                Tell us a little about you
              </h2>

              {/* Photo upload */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="w-24 h-24 rounded-full border-4 border-sand overflow-hidden cursor-pointer bg-sand flex items-center justify-center text-3xl text-warm-brown"
                  onClick={() => fileRef.current?.click()}
                >
                  {photoPreview ? (
                    <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <span>{user?.name?.[0] || '+'}</span>
                  )}
                </div>
                <button
                  type="button"
                  className="btn-ghost text-sm"
                  onClick={() => fileRef.current?.click()}
                >
                  Upload a photo (optional)
                </button>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoChange}
                />
              </div>

              {/* Display name */}
              <div>
                <label className="label" htmlFor="display-name">Your name</label>
                <input
                  id="display-name"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="How should we address you?"
                />
              </div>

              {/* Bio */}
              <div>
                <label className="label" htmlFor="bio">Short bio (optional)</label>
                <textarea
                  id="bio"
                  className="input resize-none"
                  rows={3}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="A sentence or two about who you are or what you're working towards…"
                />
              </div>
            </div>
          )}

          {/* ── Step 2: Goals ─────────────────────────────── */}
          {step === 2 && (
            <div className="flex flex-col gap-5">
              <h2 className="font-heading text-xl font-semibold text-warm-brown">
                What are you hoping to do with Elio?
              </h2>
              <p className="text-muted-text text-sm">Select all that feel right — you can change this later.</p>

              <div className="flex flex-col gap-3">
                {GOALS.map((goal) => (
                  <label
                    key={goal}
                    className={`flex items-center gap-3 p-4 rounded-card border cursor-pointer transition-all duration-150
                      ${goals.includes(goal)
                        ? 'border-terracotta bg-terracotta/5'
                        : 'border-sand hover:border-terracotta/50'
                      }`}
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-terracotta"
                      checked={goals.includes(goal)}
                      onChange={() => toggleGoal(goal)}
                    />
                    <span className="text-warm-brown font-medium">{goal}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* ── Step 3: Interests ─────────────────────────── */}
          {step === 3 && (
            <div className="flex flex-col gap-5">
              <h2 className="font-heading text-xl font-semibold text-warm-brown">
                What topics interest you?
              </h2>
              <p className="text-muted-text text-sm">
                We'll use this to personalise your experience. Pick as many as you like.
              </p>

              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`pill ${interests.includes(interest) ? 'pill-active' : ''}`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
          )}

          <ErrorMessage message={error} />

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={handleBack}
              className={`btn-ghost ${step === 1 ? 'invisible' : ''}`}
            >
              ← Back
            </button>

            {step < TOTAL_STEPS ? (
              <button type="button" onClick={handleNext} className="btn-primary">
                Next →
              </button>
            ) : (
              <button type="button" onClick={handleFinish} className="btn-primary" disabled={saving}>
                {saving ? 'Saving…' : 'Finish & go to my dashboard'}
              </button>
            )}
          </div>
        </div>

        {/* Skip link */}
        <p className="text-center text-sm text-muted-text mt-4">
          <button
            className="hover:underline hover:text-warm-brown"
            onClick={() => navigate('/dashboard')}
          >
            Skip for now — I'll fill this in later
          </button>
        </p>
      </div>
    </div>
  );
}
