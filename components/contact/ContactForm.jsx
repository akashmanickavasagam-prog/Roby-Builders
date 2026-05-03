'use client';

import { useState } from 'react';

const services = [
  'Residential Construction',
  'Commercial Construction',
  'Renovation & Remodelling',
  'Interior Design',
  'Consultation & Planning',
  'Other',
];

const budgetRanges = [
  'Below ₹25 Lakhs',
  '₹25 – ₹50 Lakhs',
  '₹50 Lakhs – ₹1 Crore',
  '₹1 Crore – ₹3 Crore',
  'Above ₹3 Crore',
  'Not Sure Yet',
];

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service: '',
  budget: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl shadow-card p-10 flex flex-col items-center justify-center text-center min-h-[500px]">
        <div className="w-16 h-16 rounded-full bg-sandal/20 flex items-center justify-center mb-5">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B4E27" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-playfair text-2xl font-bold text-brown-deep mb-2">Message Received!</h3>
        <p className="font-jost text-text-muted text-sm leading-relaxed mb-6">
          Thank you {form.name || 'for reaching out'}. We will contact you within 24 hours to discuss your project.
        </p>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-skew bg-sandal text-brown-deep hover:bg-brown-warm hover:text-white inline-flex"
        >
          Continue on WhatsApp
        </a>
        <button
          onClick={() => { setForm(initialForm); setSubmitted(false); }}
          className="mt-3 font-jost text-sm text-text-muted hover:text-brown-warm transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-card p-8 lg:p-10">
      <h2 className="font-playfair text-2xl font-bold text-brown-deep mb-1">Send Us a Message</h2>
      <p className="font-jost text-sm text-text-muted mb-7">We respond to every enquiry within 24 hours.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-jost text-xs text-text-dark font-semibold uppercase tracking-widest">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Er. Rajan Kumar"
              className="border border-sandal/40 rounded-xl px-4 py-3 font-jost text-sm text-text-dark placeholder-text-muted/50 focus:outline-none focus:border-brown-warm focus:ring-1 focus:ring-brown-warm/20 transition-colors bg-cream"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-jost text-xs text-text-dark font-semibold uppercase tracking-widest">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="+91 98765 43210"
              className="border border-sandal/40 rounded-xl px-4 py-3 font-jost text-sm text-text-dark placeholder-text-muted/50 focus:outline-none focus:border-brown-warm focus:ring-1 focus:ring-brown-warm/20 transition-colors bg-cream"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-jost text-xs text-text-dark font-semibold uppercase tracking-widest">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="border border-sandal/40 rounded-xl px-4 py-3 font-jost text-sm text-text-dark placeholder-text-muted/50 focus:outline-none focus:border-brown-warm focus:ring-1 focus:ring-brown-warm/20 transition-colors bg-cream"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-jost text-xs text-text-dark font-semibold uppercase tracking-widest">
              Service Required
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="border border-sandal/40 rounded-xl px-4 py-3 font-jost text-sm text-text-dark focus:outline-none focus:border-brown-warm focus:ring-1 focus:ring-brown-warm/20 transition-colors bg-cream appearance-none"
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-jost text-xs text-text-dark font-semibold uppercase tracking-widest">
              Budget Range
            </label>
            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="border border-sandal/40 rounded-xl px-4 py-3 font-jost text-sm text-text-dark focus:outline-none focus:border-brown-warm focus:ring-1 focus:ring-brown-warm/20 transition-colors bg-cream appearance-none"
            >
              <option value="">Select budget</option>
              {budgetRanges.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-jost text-xs text-text-dark font-semibold uppercase tracking-widest">
            Project Details
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Describe your project — location, size, requirements..."
            className="border border-sandal/40 rounded-xl px-4 py-3 font-jost text-sm text-text-dark placeholder-text-muted/50 focus:outline-none focus:border-brown-warm focus:ring-1 focus:ring-brown-warm/20 transition-colors bg-cream resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-skew bg-brown-deep text-white hover:bg-brown-warm disabled:opacity-70 disabled:cursor-not-allowed justify-center"
        >
          {loading ? (
            <>
              <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                <path d="M12 2a10 10 0 0 1 10 10" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
