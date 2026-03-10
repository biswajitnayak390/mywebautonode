'use client';

import { FormEvent, useEffect, useState } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
};

const initialForm = {
  name: '',
  email: '',
  company: '',
  service: 'Website redesign',
  budget: '',
  message: ''
};

export default function DiscoveryModal({ open, onClose }: Props) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!open) {
      setStatus('idle');
      setMessage('');
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/discovery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || 'Unable to send your request right now.');

      setStatus('success');
      setMessage('Thanks. Your discovery request has been sent successfully.');
      setForm(initialForm);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  };

  return (
    <div className="modal-shell" role="dialog" aria-modal="true" aria-labelledby="discovery-title">
      <div className="modal-backdrop-custom" onClick={onClose} />
      <div className="modal-panel card border-0 shadow-lg">
        <div className="d-flex align-items-start justify-content-between gap-3 mb-4">
          <div>
            <span className="eyebrow">Discovery call</span>
            <h2 id="discovery-title" className="modal-title-custom mt-2 mb-2">Tell us about your project</h2>
            <p className="text-secondary mb-0">Share your goals and we’ll respond at contact@autonodeai.com.</p>
          </div>
          <button className="btn-close shadow-none" type="button" aria-label="Close" onClick={onClose} />
        </div>

        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Full name</label>
            <input className="form-control form-control-lg" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Work email</label>
            <input className="form-control form-control-lg" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Company</label>
            <input className="form-control form-control-lg" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Service needed</label>
            <select className="form-select form-select-lg" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
              <option>Website redesign</option>
              <option>New company website</option>
              <option>Sitecore CMS implementation</option>
              <option>Headless CMS migration</option>
              <option>AI chatbot or automation</option>
              <option>SEO and performance optimization</option>
            </select>
          </div>
          <div className="col-12">
            <label className="form-label">Estimated budget</label>
            <input className="form-control form-control-lg" placeholder="Example: $2,000 - $5,000 or custom" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} />
          </div>
          <div className="col-12">
            <label className="form-label">Project details</label>
            <textarea className="form-control" rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What do you want to build, improve, or migrate?" />
          </div>
          {message ? (
            <div className="col-12">
              <div className={`alert ${status === 'success' ? 'alert-success' : 'alert-danger'} mb-0`}>
                {message}
              </div>
            </div>
          ) : null}
          <div className="col-12 d-flex flex-column flex-sm-row gap-3 pt-2">
            <button className="btn btn-brand-primary" disabled={status === 'loading'} type="submit">
              {status === 'loading' ? 'Sending...' : 'Send request'}
            </button>
            <button className="btn btn-brand-outline" type="button" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}
