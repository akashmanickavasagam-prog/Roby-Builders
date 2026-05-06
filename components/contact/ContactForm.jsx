'use client';

import { useRef } from 'react';

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

export default function ContactForm() {
  const nextRef = useRef(null);

  const handleSubmit = (e) => {
    if (nextRef.current) {
      nextRef.current.value = `${window.location.origin}/thank-you`;
    }
    const fd = new FormData(e.target);
    sessionStorage.setItem('roby_enquiry', JSON.stringify({
      name: fd.get('name') || '',
      phone: fd.get('phone') || '',
      email: fd.get('email') || '',
      service: fd.get('service') || '',
      budget: fd.get('budget') || '',
      message: fd.get('message') || '',
    }));
  };

  return (
    <div className="bg-white rounded-3xl shadow-card p-8 lg:p-10">
      <h2 className="font-playfair text-2xl font-bold text-brown-deep mb-1">Send Us a Message</h2>
      <p className="font-jost text-sm text-text-muted mb-7">We respond to every enquiry within 24 hours.</p>

      <form
        action="https://formsubmit.co/askmachi001@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
      >
        {/* FormSubmit configuration */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value="New Contact Form Message" />
        <input type="hidden" name="_next" ref={nextRef} />

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-jost text-xs text-text-dark font-semibold uppercase tracking-widest">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
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
              required
              placeholder="+91 97916 38957"
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
            rows={4}
            placeholder="Describe your project — location, size, requirements..."
            className="border border-sandal/40 rounded-xl px-4 py-3 font-jost text-sm text-text-dark placeholder-text-muted/50 focus:outline-none focus:border-brown-warm focus:ring-1 focus:ring-brown-warm/20 transition-colors bg-cream resize-none"
          />
        </div>

        <button
          type="submit"
          className="btn-skew bg-brown-deep text-white hover:bg-brown-warm justify-center"
        >
          Send Message
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </form>
    </div>
  );
}
