'use client';

import { useState } from 'react';
import Link from 'next/link';

function LogoSVG() {
  return (
    <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="4" fill="#3E1F0E" />
      <path d="M8 28V10h8a5 5 0 0 1 0 10H8" stroke="#C9A87C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 20l8 8" stroke="#C9A87C" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M22 10h6v18" stroke="#E4CBA8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Residential', href: '/services/residential' },
  { label: 'Commercial', href: '/services/commercial' },
  { label: 'Renovation', href: '/services/renovation' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const socials = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919876543210',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-brown-deep text-white footer-map-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 pt-16 pb-8">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Brand + Contact */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <LogoSVG />
              <div className="flex flex-col leading-tight">
                <span className="font-playfair font-bold text-xl text-white">Roby Builders</span>
                <span className="font-jost text-[10px] uppercase tracking-[0.2em] text-sandal-light">
                  Est. 2009 · Karaikudi
                </span>
              </div>
            </Link>
            <p className="font-jost text-sm text-white/70 leading-relaxed mb-6">
              Building dreams with precision and passion. Tamil Nadu&apos;s trusted construction partner for over 15 years.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { icon: '📞', text: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: '✉️', text: 'info@robybuilders.in', href: 'mailto:info@robybuilders.in' },
                { icon: '📍', text: '12, Anna Salai, Karaikudi — 630 001', href: '#' },
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-sandal-light transition-colors"
                >
                  <span>{item.icon}</span>
                  <span className="font-jost">{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-playfair text-lg font-bold text-sandal mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link font-jost text-sm text-white/70">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Socials */}
          <div>
            <h3 className="font-playfair text-lg font-bold text-sandal mb-5">Stay Connected</h3>
            <p className="font-jost text-sm text-white/70 mb-4 leading-relaxed">
              Subscribe for project updates and construction tips.
            </p>
            {subscribed ? (
              <p className="font-jost text-sm text-sandal">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 mb-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 bg-white/10 border border-white/20 rounded px-3 py-2 text-sm font-jost text-white placeholder-white/40 focus:outline-none focus:border-sandal transition-colors"
                />
                <button
                  type="submit"
                  className="btn-skew btn-skew-sm bg-sandal text-brown-deep hover:bg-sandal-light"
                >
                  Join
                </button>
              </form>
            )}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-sandal hover:text-brown-deep flex items-center justify-center text-white transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-jost text-xs text-white/50">
            © {new Date().getFullYear()} Roby Builders. All rights reserved.
          </p>
          <p className="font-jost text-xs text-white/40">
            Er. Roby Renesh J — B.E. Civil Engineering · Licensed Contractor
          </p>
        </div>
      </div>
    </footer>
  );
}
