'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ThankYouPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('roby_enquiry');
      if (stored) setData(JSON.parse(stored));
    } catch {}
  }, []);

  const get = (key) => data?.[key] || '';

  return (
    <div className="ty-wrap">

      {/* HERO */}
      <section className="ty-hero">
        <div className="ty-hero-deco" />
        <div className="ty-check-ring">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div className="ty-hero-badge">
          <div className="ty-badge-line" />
          <span>Enquiry Received</span>
          <div className="ty-badge-line" />
        </div>
        <h1 className="ty-hero-h1">
          Thank You for<br /><em>Reaching Out!</em>
        </h1>
        <p className="ty-hero-sub">
          Your enquiry has been received and a copy has been sent to our team. We will contact you within 24 hours to schedule your free consultation.
        </p>
      </section>

      {/* BREADCRUMB */}
      <nav className="ty-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="ty-breadcrumb-sep">›</span>
        <Link href="/contact">Contact Us</Link>
        <span className="ty-breadcrumb-sep">›</span>
        <span className="ty-breadcrumb-current">Thank You</span>
      </nav>

      {/* SUBMISSION SUMMARY */}
      <div className="ty-summary">
        <div className="ty-card">
          <div className="ty-card-header">
            <div className="ty-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <div className="ty-card-header-text">
              <h3>Your Submission Summary</h3>
              <p>Details you submitted — our team will review this before contacting you</p>
            </div>
          </div>

          <div className="ty-details-grid">
            <div className="ty-detail-row">
              <span className="ty-detail-label">Name</span>
              <span className={`ty-detail-val${!get('name') ? ' empty' : ''}`}>
                {get('name') || 'Not provided'}
              </span>
            </div>
            <div className="ty-detail-row">
              <span className="ty-detail-label">Phone</span>
              <span className={`ty-detail-val${!get('phone') ? ' empty' : ''}`}>
                {get('phone') || 'Not provided'}
              </span>
            </div>
            {get('email') && (
              <div className="ty-detail-row">
                <span className="ty-detail-label">Email</span>
                <span className="ty-detail-val">{get('email')}</span>
              </div>
            )}
            {get('service') && (
              <div className="ty-detail-row">
                <span className="ty-detail-label">Project Type</span>
                <span className="ty-detail-val">{get('service')}</span>
              </div>
            )}
            {get('budget') && (
              <div className="ty-detail-row">
                <span className="ty-detail-label">Budget Range</span>
                <span className="ty-detail-val">{get('budget')}</span>
              </div>
            )}
            {get('message') && (
              <div className="ty-detail-row full">
                <span className="ty-detail-label">Project Details</span>
                <span className="ty-detail-val">{get('message')}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* NEXT STEPS */}
      <div className="ty-next-steps">
        <div className="ty-section-label">
          <div className="lline" />
          <span>What Happens Next</span>
          <div className="lline" />
        </div>
        <div className="ty-steps-grid">
          <div className="ty-step">
            <div className="ty-step-num">1</div>
            <div className="ty-step-title">Team Review</div>
            <div className="ty-step-desc">Er. Roby Renesh J personally reviews your project details and requirements.</div>
          </div>
          <div className="ty-step">
            <div className="ty-step-num">2</div>
            <div className="ty-step-title">We Call You</div>
            <div className="ty-step-desc">Our team will call you within 24 hours at your preferred contact time.</div>
          </div>
          <div className="ty-step">
            <div className="ty-step-num">3</div>
            <div className="ty-step-title">Free Site Visit</div>
            <div className="ty-step-desc">We schedule a free site visit and provide a detailed cost estimate — no charge.</div>
          </div>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="ty-actions">
        <Link href="/" className="ty-btn primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Back to Home
        </Link>
        <a
          href="https://wa.me/919791638957?text=Hi%20Roby%20Builders%2C%20I%20just%20submitted%20an%20enquiry%20and%20wanted%20to%20follow%20up."
          target="_blank"
          rel="noopener noreferrer"
          className="ty-btn wa"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
          WhatsApp Us
        </a>
        <a href="tel:9791638957" className="ty-btn outline">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.07 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 8 8l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call: +91 97916 38957
        </a>
      </div>

    </div>
  );
}
