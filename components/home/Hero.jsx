'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const contactItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    value: 'Er. Roby Renesh J — B.E. Civil Engineering',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.07 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z" />
      </svg>
    ),
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    value: 'Karaikudi, Tamil Nadu',
  },
];

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Built' },
  { value: '500+', label: 'Happy Families' },
  { value: '100%', label: 'Quality Promise' },
];

export default function Hero() {
  const bgRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-center bg-cover will-change-transform"
        style={{ backgroundImage: "url('/images/hero-bg.jp.png')" }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, rgba(62,31,14,0.92) 0%, rgba(62,31,14,0.75) 45%, rgba(62,31,14,0.40) 100%)',
        }}
      />

      {/* Edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 70% 50%, transparent 40%, rgba(20,8,2,0.6) 100%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-[52px] max-lg:px-5 pt-28 pb-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-sandal/20 border border-sandal/40 rounded-full px-4 py-1.5 mb-6 ${
              mounted ? 'anim-slide-in d-0' : 'opacity-0'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-sandal animate-pulse" />
            <span className="font-jost text-xs text-sandal uppercase tracking-[0.15em] font-semibold">
              Premium Construction · Karaikudi
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`font-playfair text-5xl max-lg:text-4xl max-sm:text-3xl font-bold text-white leading-[1.15] mb-4 ${
              mounted ? 'anim-slide-in d-200' : 'opacity-0'
            }`}
          >
            We Build Your
            <span className="block text-sandal italic">Dream Spaces</span>
            With Precision
          </h1>

          {/* Tagline */}
          <p
            className={`font-cormorant text-xl text-sandal-light italic mb-4 ${
              mounted ? 'anim-slide-in d-400' : 'opacity-0'
            }`}
          >
            &quot;Excellence in every brick, integrity in every promise&quot;
          </p>

          {/* Description */}
          <p
            className={`font-jost text-white/75 text-base leading-relaxed mb-8 max-w-lg ${
              mounted ? 'anim-slide-in d-500' : 'opacity-0'
            }`}
          >
            From foundations to finishing, Roby Builders delivers world-class
            residential and commercial construction across Tamil Nadu — on time,
            within budget, beyond expectations.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-3 ${
              mounted ? 'anim-slide-in d-600' : 'opacity-0'
            }`}
          >
            <Link
              href="/contact"
              className="btn-skew bg-sandal text-brown-deep hover:bg-white hover:text-brown-deep shadow-btn"
            >
              Get Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="btn-skew bg-white/10 border border-white/30 text-white hover:bg-white/20"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Floating credentials card */}
        <div
          className={`hidden lg:block absolute right-[52px] top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 w-64 ${
            mounted ? 'anim-float-in d-800' : 'opacity-0'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-sandal/30 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A87C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <p className="font-playfair font-bold text-white text-sm">Licensed Contractor</p>
              <p className="font-jost text-xs text-sandal-light">Govt. Approved · ISO Certified</p>
            </div>
          </div>
          {[
            { label: 'Quality Materials', val: '100%' },
            { label: 'On-Time Delivery', val: '98%' },
            { label: 'Client Satisfaction', val: '4.9★' },
          ].map((item) => (
            <div key={item.label} className="flex justify-between items-center py-1.5 border-b border-white/10 last:border-0">
              <span className="font-jost text-xs text-white/70">{item.label}</span>
              <span className="font-jost text-xs font-semibold text-sandal">{item.val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex flex-col items-center gap-2">
          <span className="font-jost text-[10px] text-white/40 uppercase tracking-[0.2em]">Scroll</span>
          <div className="scroll-pulse flex gap-1">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 bg-white/8 backdrop-blur-sm border-t border-white/15 px-[52px] max-lg:px-5 py-5 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`text-center ${mounted ? `anim-fade-up d-${700 + i * 100}` : 'opacity-0'}`}
          >
            <p className="font-playfair text-3xl font-bold text-sandal">{s.value}</p>
            <p className="font-jost text-xs text-white/60 uppercase tracking-widest mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Contact strip */}
      <div className="relative z-10 bg-sandal-pale border-t border-sandal/50 px-[52px] max-lg:px-5 py-4 flex items-center justify-between flex-wrap gap-[10px]">
        {contactItems.map((item) => (
          <div key={item.value} className="flex items-center gap-2">
            <span className="text-brown-warm">{item.icon}</span>
            {item.href ? (
              <a href={item.href} className="font-jost text-sm text-text-dark hover:text-brown-warm transition-colors font-medium">
                {item.value}
              </a>
            ) : (
              <span className="font-jost text-sm text-text-dark font-medium">{item.value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
