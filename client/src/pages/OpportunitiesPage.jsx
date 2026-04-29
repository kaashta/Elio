// OpportunitiesPage — two tabs: Jobs and Employers

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import LoadingSpinner from '../components/LoadingSpinner';

const JOB_TYPES = ['all', 'full-time', 'part-time', 'remote'];
const SKILL_AREAS = ['all', 'Business basics', 'Digital skills', 'Finance', 'Communication', 'Leadership', 'Customer service'];

// ── Job application modal ─────────────────────────────────────────────────────
function JobApplicationModal({ job, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', coverLetter: '' });
  const [cvFile, setCvFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 bg-warm-brown/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="card w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div className="text-center py-8">
            <p className="text-4xl mb-4">🎉</p>
            <h3 className="font-heading text-xl font-semibold text-warm-brown mb-2">
              Application sent!
            </h3>
            <p className="text-muted-text mb-2">
              You've applied for <strong>{job.title}</strong> at {job.company}.
            </p>
            <p className="text-muted-text text-sm mb-6">
              They'll be in touch if you're shortlisted. In the meantime, keep going — you've got this.
            </p>
            <button onClick={onClose} className="btn-primary">Done</button>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <h3 className="font-heading text-xl font-semibold text-warm-brown mb-1">
                Apply for: {job.title}
              </h3>
              <p className="text-sm text-terracotta font-medium">{job.company} — {job.location}</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="label">Full name *</label>
                <input
                  required
                  className="input"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={update('name')}
                />
              </div>
              <div>
                <label className="label">Email address *</label>
                <input
                  required
                  type="email"
                  className="input"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={update('email')}
                />
              </div>
              <div>
                <label className="label">Phone number</label>
                <input
                  type="tel"
                  className="input"
                  placeholder="07700 900000"
                  value={form.phone}
                  onChange={update('phone')}
                />
              </div>
              <div>
                <label className="label">Cover letter</label>
                <textarea
                  className="input resize-none"
                  rows={4}
                  placeholder="Tell them a bit about yourself and why you're interested in this role…"
                  value={form.coverLetter}
                  onChange={update('coverLetter')}
                />
              </div>
              <div>
                <label className="label">Upload your CV (optional)</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="text-sm text-muted-text file:mr-3 file:btn-secondary file:border-0 file:text-sm file:py-1 file:px-3 file:rounded-btn file:cursor-pointer"
                  onChange={(e) => setCvFile(e.target.files[0] || null)}
                />
                {cvFile && (
                  <p className="text-xs text-sage mt-1">✓ {cvFile.name}</p>
                )}
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button type="button" className="btn-ghost" onClick={onClose}>Cancel</button>
                <button type="submit" className="btn-primary">Submit application</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// ── Job card ──────────────────────────────────────────────────────────────────
function JobCard({ job, onApply }) {
  const typeColors = {
    'full-time': 'bg-sage/20 text-sage',
    'part-time': 'bg-terracotta/10 text-terracotta',
    'remote': 'bg-sand text-muted-text',
  };

  return (
    <div className="card hover:shadow-card-hover transition-shadow duration-200">
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="font-heading text-lg font-semibold text-warm-brown">{job.title}</h3>
            {job.isPartner && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-terracotta/10 text-terracotta font-medium border border-terracotta/20">
                ★ Elio Partner
              </span>
            )}
          </div>
          <p className="text-terracotta font-medium text-sm">{job.company}</p>
        </div>
        <span className={`text-xs px-3 py-1 rounded-full font-medium flex-shrink-0 ${typeColors[job.type] || 'bg-sand text-muted-text'}`}>
          {job.type}
        </span>
      </div>

      <p className="text-sm text-muted-text mb-1">📍 {job.location}</p>
      <p className="text-sm text-warm-brown/80 leading-relaxed mb-4">{job.description}</p>

      <button
        onClick={() => onApply(job)}
        className="btn-primary text-sm"
      >
        Apply now
      </button>
    </div>
  );
}

// ── Employer card ─────────────────────────────────────────────────────────────
function EmployerCard({ employer }) {
  return (
    <div className="card flex flex-col gap-3">
      {/* Logo placeholder */}
      <div className="w-16 h-16 rounded-card bg-sand flex items-center justify-center text-warm-brown font-heading font-bold text-xl">
        {employer.company[0]}
      </div>
      <div>
        <h3 className="font-heading text-lg font-semibold text-warm-brown mb-1">{employer.company}</h3>
        <p className="text-sm text-muted-text mb-3">
          An Elio partner employer — committed to second chances and inclusive hiring.
        </p>
        <p className="text-sm text-sage font-medium">
          🤝 {employer.jobCount} role{employer.jobCount !== 1 ? 's' : ''} currently on Elio
        </p>
      </div>
      <div className="flex flex-wrap gap-1 mt-1">
        {employer.roles.map((role) => (
          <span key={role} className="text-xs px-2 py-1 bg-cream rounded-full text-muted-text border border-sand">
            {role}
          </span>
        ))}
      </div>
      <button className="btn-secondary text-sm self-start mt-1">Learn more</button>
    </div>
  );
}

// ── OpportunitiesPage ─────────────────────────────────────────────────────────
export default function OpportunitiesPage() {
  const [activeTab, setActiveTab] = useState('jobs');
  const [jobs, setJobs] = useState([]);
  const [employers, setEmployers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [applyingJob, setApplyingJob] = useState(null);

  // Filter state
  const [typeFilter, setTypeFilter] = useState('all');
  const [skillFilter, setSkillFilter] = useState('all');
  const [locationSearch, setLocationSearch] = useState('');

  useEffect(() => {
    Promise.all([
      fetch('/api/opportunities/jobs', { credentials: 'include' }).then((r) => r.json()),
      fetch('/api/opportunities/employers', { credentials: 'include' }).then((r) => r.json()),
    ])
      .then(([jobData, empData]) => {
        setJobs(jobData.jobs || []);
        setEmployers(empData.employers || []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  // Apply filters client-side for snappy UX
  const filteredJobs = jobs.filter((job) => {
    if (typeFilter !== 'all' && job.type !== typeFilter) return false;
    if (skillFilter !== 'all' && job.skillArea !== skillFilter) return false;
    if (locationSearch && !job.location.toLowerCase().includes(locationSearch.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main className="page-container">
        <h1 className="font-heading text-3xl font-bold text-warm-brown mb-2">Opportunities</h1>
        <p className="text-muted-text mb-6">
          Roles with employers who value what you bring to the table.
        </p>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <button
            className={`tab ${activeTab === 'jobs' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('jobs')}
          >
            Jobs
          </button>
          <button
            className={`tab ${activeTab === 'employers' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('employers')}
          >
            Employers
          </button>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : activeTab === 'jobs' ? (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters sidebar */}
            <aside className="w-full lg:w-56 flex-shrink-0 flex flex-col gap-4">
              <div>
                <label className="label">Search location</label>
                <input
                  className="input text-sm"
                  placeholder="e.g. Manchester"
                  value={locationSearch}
                  onChange={(e) => setLocationSearch(e.target.value)}
                />
              </div>

              <div>
                <p className="label mb-2">Job type</p>
                <div className="flex flex-col gap-1">
                  {JOB_TYPES.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTypeFilter(t)}
                      className={`text-left text-sm px-3 py-2 rounded-btn transition-colors duration-150
                        ${typeFilter === t ? 'bg-terracotta/10 text-terracotta font-medium' : 'text-muted-text hover:text-warm-brown'}`}
                    >
                      {t === 'all' ? 'All types' : t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="label mb-2">Skill area</p>
                <div className="flex flex-col gap-1">
                  {SKILL_AREAS.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSkillFilter(s)}
                      className={`text-left text-sm px-3 py-2 rounded-btn transition-colors duration-150
                        ${skillFilter === s ? 'bg-terracotta/10 text-terracotta font-medium' : 'text-muted-text hover:text-warm-brown'}`}
                    >
                      {s === 'all' ? 'All areas' : s}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Job listings */}
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-sm text-muted-text">
                {filteredJobs.length} role{filteredJobs.length !== 1 ? 's' : ''} found
              </p>
              {filteredJobs.length === 0 ? (
                <div className="card text-center py-10">
                  <p className="text-muted-text">No jobs match your filters. Try broadening your search.</p>
                </div>
              ) : (
                filteredJobs.map((job) => <JobCard key={job.id} job={job} onApply={setApplyingJob} />)
              )}
            </div>
          </div>
        ) : (
          /* Employers tab */
          <div>
            <p className="text-muted-text mb-6">
              These companies have partnered with Elio because they believe in giving people a real chance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {employers.map((emp) => (
                <EmployerCard key={emp.company} employer={emp} />
              ))}
            </div>
          </div>
        )}
      </main>

      {applyingJob && (
        <JobApplicationModal job={applyingJob} onClose={() => setApplyingJob(null)} />
      )}
    </div>
  );
}
