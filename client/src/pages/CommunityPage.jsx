// CommunityPage — two tabs: Circles and Mentoring
// Circles use real-time Socket.io updates

import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import Navbar from '../components/Navbar';
import Avatar from '../components/Avatar';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { useAuth } from '../context/AuthContext';

// ── Socket connection (singleton for this page) ───────────────────────────────
let socket;
function getSocket() {
  if (!socket) {
    socket = io('http://localhost:3001', { withCredentials: true });
  }
  return socket;
}

// ── Circle list ───────────────────────────────────────────────────────────────
function CircleList({ circles, onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {circles.map((circle) => (
        <button
          key={circle.id}
          onClick={() => onSelect(circle)}
          className="card text-left hover:shadow-card-hover transition-shadow duration-200 group"
        >
          <h3 className="font-heading text-lg font-semibold text-warm-brown group-hover:text-terracotta transition-colors mb-1">
            {circle.name}
          </h3>
          <p className="text-muted-text text-sm mb-3">{circle.description}</p>
          <span className="text-xs text-terracotta font-medium">
            {circle._count?.posts || 0} posts
          </span>
        </button>
      ))}
    </div>
  );
}

// ── Post card ─────────────────────────────────────────────────────────────────
function PostCard({ post, onLike, onReply, currentUserId }) {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [sendingReply, setSendingReply] = useState(false);

  const isLiked = post.likes?.some((l) => l.userId === currentUserId);

  const submitReply = async () => {
    if (!replyText.trim()) return;
    setSendingReply(true);
    await onReply(post.id, replyText.trim());
    setReplyText('');
    setShowReplyBox(false);
    setSendingReply(false);
  };

  return (
    <div className="card flex flex-col gap-3">
      {/* Author + time */}
      <div className="flex items-center gap-3">
        <Avatar photo={post.author?.photo} name={post.author?.name} size="sm" />
        <div>
          <p className="text-sm font-semibold text-warm-brown">{post.author?.name}</p>
          <p className="text-xs text-muted-text">
            {new Date(post.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>

      {/* Content */}
      <p className="text-warm-brown/90 leading-relaxed">{post.content}</p>

      {/* Actions */}
      <div className="flex gap-4 text-sm">
        <button
          onClick={() => onLike(post.id)}
          className={`flex items-center gap-1 transition-colors duration-150
            ${isLiked ? 'text-terracotta font-medium' : 'text-muted-text hover:text-terracotta'}`}
        >
          ♥ {post._count?.likes || post.likes?.length || 0}
        </button>
        <button
          onClick={() => setShowReplyBox((v) => !v)}
          className="text-muted-text hover:text-terracotta transition-colors duration-150"
        >
          💬 {post._count?.replies || post.replies?.length || 0} replies
        </button>
      </div>

      {/* Replies */}
      {post.replies?.length > 0 && (
        <div className="border-l-2 border-sand pl-4 flex flex-col gap-3 mt-1">
          {post.replies.map((reply) => (
            <div key={reply.id} className="flex gap-2">
              <Avatar photo={reply.author?.photo} name={reply.author?.name} size="sm" />
              <div className="bg-cream rounded-card p-3 flex-1">
                <p className="text-xs font-semibold text-warm-brown mb-1">{reply.author?.name}</p>
                <p className="text-sm text-warm-brown/90">{reply.content}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Reply box */}
      {showReplyBox && (
        <div className="flex gap-2 mt-1">
          <input
            className="input flex-1 text-sm py-2"
            placeholder="Write a reply…"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submitReply()}
          />
          <button onClick={submitReply} className="btn-primary text-sm px-4 py-2" disabled={sendingReply}>
            {sendingReply ? '…' : 'Reply'}
          </button>
        </div>
      )}
    </div>
  );
}

// ── Circle detail ─────────────────────────────────────────────────────────────
function CircleDetail({ circle, onBack, currentUser }) {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [posting, setPosting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const sock = useRef(getSocket());

  // Load posts and join the socket room for this circle
  useEffect(() => {
    fetch(`/api/community/circles/${circle.id}/posts`, { credentials: 'include' })
      .then((r) => r.json())
      .then((data) => setPosts(data.posts || []))
      .catch(console.error)
      .finally(() => setLoading(false));

    sock.current.emit('join-circle', circle.id);

    // Real-time: new post from another user
    sock.current.on('post-created', (post) => {
      if (post.authorId !== currentUser.id) {
        setPosts((prev) => [post, ...prev]);
      }
    });

    // Real-time: new reply
    sock.current.on('reply-created', (reply) => {
      setPosts((prev) =>
        prev.map((p) =>
          p.id === reply.postId ? { ...p, replies: [...(p.replies || []), reply] } : p
        )
      );
    });

    return () => {
      sock.current.emit('leave-circle', circle.id);
      sock.current.off('post-created');
      sock.current.off('reply-created');
    };
  }, [circle.id, currentUser.id]);

  const submitPost = async () => {
    if (!newPost.trim()) return;
    setPosting(true);
    setError('');
    try {
      const res = await fetch(`/api/community/circles/${circle.id}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ content: newPost.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setPosts((prev) => [data.post, ...prev]);
      setNewPost('');
    } catch (err) {
      setError(err.message);
    } finally {
      setPosting(false);
    }
  };

  const handleLike = async (postId) => {
    try {
      const res = await fetch(`/api/community/posts/${postId}/like`, {
        method: 'POST',
        credentials: 'include',
      });
      const data = await res.json();
      setPosts((prev) =>
        prev.map((p) => {
          if (p.id !== postId) return p;
          const filtered = (p.likes || []).filter((l) => l.userId !== currentUser.id);
          return {
            ...p,
            likes: data.liked ? [...filtered, { userId: currentUser.id }] : filtered,
          };
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleReply = async (postId, content) => {
    try {
      const res = await fetch(`/api/community/posts/${postId}/replies`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ content }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setPosts((prev) =>
        prev.map((p) =>
          p.id === postId
            ? { ...p, replies: [...(p.replies || []), data.reply] }
            : p
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={onBack} className="btn-ghost text-sm mb-4">← All circles</button>

      <h2 className="font-heading text-2xl font-bold text-warm-brown mb-1">{circle.name}</h2>
      <p className="text-muted-text mb-6">{circle.description}</p>

      {/* New post box */}
      <div className="card mb-6">
        <textarea
          className="input resize-none mb-3"
          rows={3}
          placeholder="Share something with the circle…"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <ErrorMessage message={error} />
        <div className="flex justify-end mt-2">
          <button onClick={submitPost} className="btn-primary text-sm" disabled={posting || !newPost.trim()}>
            {posting ? 'Posting…' : 'Post'}
          </button>
        </div>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : posts.length === 0 ? (
        <p className="text-muted-text text-center py-8">No posts yet — be the first to share something! 🌱</p>
      ) : (
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onLike={handleLike}
              onReply={handleReply}
              currentUserId={currentUser.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Mentor card ───────────────────────────────────────────────────────────────
function MentorCard({ mentor, onRequest }) {
  return (
    <div className="card flex flex-col sm:flex-row gap-4">
      <Avatar photo={mentor.user?.photo} name={mentor.user?.name} size="lg" />
      <div className="flex-1">
        <h3 className="font-heading text-lg font-semibold text-warm-brown mb-1">{mentor.user?.name}</h3>
        <p className="text-muted-text text-sm mb-3">{mentor.bio}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {mentor.expertise?.map((tag) => (
            <span key={tag} className="pill cursor-default text-xs">{tag}</span>
          ))}
        </div>
        <button onClick={() => onRequest(mentor)} className="btn-secondary text-sm">
          Request a session
        </button>
      </div>
    </div>
  );
}

// ── CommunityPage ─────────────────────────────────────────────────────────────
export default function CommunityPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('circles');
  const [circles, setCircles] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [mySessions, setMySessions] = useState([]);
  const [selectedCircle, setSelectedCircle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [requestModal, setRequestModal] = useState(null);
  const [requestNote, setRequestNote] = useState('');
  const [requestSent, setRequestSent] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch('/api/community/circles', { credentials: 'include' }).then((r) => r.json()),
      fetch('/api/mentors', { credentials: 'include' }).then((r) => r.json()),
      fetch('/api/mentors/my-sessions', { credentials: 'include' }).then((r) => r.json()),
    ])
      .then(([circleData, mentorData, sessionData]) => {
        setCircles(circleData.circles || []);
        setMentors(mentorData.mentors || []);
        setMySessions(sessionData.sessions || []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleRequestSession = async () => {
    if (!requestModal) return;
    try {
      const res = await fetch(`/api/mentors/${requestModal.id}/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ notes: requestNote }),
      });
      if (res.ok) {
        const data = await res.json();
        setMySessions((prev) => [...prev, data.session]);
        setRequestSent(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main className="page-container">
        <h1 className="font-heading text-3xl font-bold text-warm-brown mb-6">Community</h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <button
            className={`tab ${activeTab === 'circles' ? 'tab-active' : ''}`}
            onClick={() => { setActiveTab('circles'); setSelectedCircle(null); }}
          >
            Circles
          </button>
          <button
            className={`tab ${activeTab === 'mentoring' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('mentoring')}
          >
            Mentoring
          </button>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : activeTab === 'circles' ? (
          selectedCircle ? (
            <CircleDetail
              circle={selectedCircle}
              onBack={() => setSelectedCircle(null)}
              currentUser={user}
            />
          ) : (
            <CircleList circles={circles} onSelect={setSelectedCircle} />
          )
        ) : (
          /* ── Mentoring tab ─────────────────────────────── */
          <div className="flex flex-col gap-8">
            {/* Mentor list */}
            <div>
              <h2 className="font-heading text-xl font-semibold text-warm-brown mb-4">
                Our mentors
              </h2>
              {mentors.length === 0 ? (
                <p className="text-muted-text">No mentors available right now. Check back soon!</p>
              ) : (
                <div className="flex flex-col gap-4">
                  {mentors.map((mentor) => (
                    <MentorCard
                      key={mentor.id}
                      mentor={mentor}
                      onRequest={(m) => { setRequestModal(m); setRequestSent(false); setRequestNote(''); }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* My sessions */}
            <div>
              <h2 className="font-heading text-xl font-semibold text-warm-brown mb-4">
                My mentoring sessions
              </h2>
              {mySessions.length === 0 ? (
                <p className="text-muted-text text-sm">
                  You haven't requested any sessions yet. Pick a mentor above to get started.
                </p>
              ) : (
                <div className="flex flex-col gap-3">
                  {mySessions.map((session) => (
                    <div key={session.id} className="card flex items-center gap-4">
                      <Avatar photo={session.mentor?.user?.photo} name={session.mentor?.user?.name} size="md" />
                      <div className="flex-1">
                        <p className="font-medium text-warm-brown">{session.mentor?.user?.name}</p>
                        <p className="text-sm text-muted-text">
                          Requested {new Date(session.requestedAt).toLocaleDateString('en-GB')}
                        </p>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium
                        ${session.status === 'confirmed' ? 'bg-sage/20 text-sage' : ''}
                        ${session.status === 'pending' ? 'bg-sand text-muted-text' : ''}
                        ${session.status === 'completed' ? 'bg-terracotta/10 text-terracotta' : ''}
                      `}>
                        {session.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* ── Request session modal ───────────────────────── */}
      {requestModal && (
        <div
          className="fixed inset-0 bg-warm-brown/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setRequestModal(null)}
        >
          <div
            className="card w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            {requestSent ? (
              <div className="text-center py-6">
                <p className="text-4xl mb-4">🌱</p>
                <h3 className="font-heading text-xl font-semibold text-warm-brown mb-2">
                  Request sent!
                </h3>
                <p className="text-muted-text mb-6">
                  {requestModal.user?.name} will be in touch soon.
                </p>
                <button onClick={() => setRequestModal(null)} className="btn-primary">
                  Done
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-heading text-xl font-semibold text-warm-brown mb-2">
                  Request a session with {requestModal.user?.name}
                </h3>
                <p className="text-muted-text text-sm mb-4">
                  Let them know what you'd like to talk about (optional).
                </p>
                <textarea
                  className="input resize-none mb-4"
                  rows={3}
                  placeholder="e.g. I'd love help with my CV and preparing for interviews…"
                  value={requestNote}
                  onChange={(e) => setRequestNote(e.target.value)}
                />
                <div className="flex justify-end gap-3">
                  <button className="btn-ghost" onClick={() => setRequestModal(null)}>Cancel</button>
                  <button className="btn-primary" onClick={handleRequestSession}>
                    Send request
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
