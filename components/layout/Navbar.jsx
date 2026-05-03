'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function LogoSVG() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="4" fill="#3E1F0E" />
      <path d="M8 28V10h8a5 5 0 0 1 0 10H8" stroke="#C9A87C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 20l8 8" stroke="#C9A87C" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M22 10h6v18" stroke="#E4CBA8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const serviceItems = [
  { label: 'Residential', href: '/services/residential', icon: '🏠' },
  { label: 'Commercial', href: '/services/commercial', icon: '🏢' },
  { label: 'Renovation', href: '/services/renovation', icon: '🔨' },
  { label: 'Interior Design', href: '/services/interior', icon: '🎨' },
  { label: 'Consultation', href: '/services/consultation', icon: '📋' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-nav py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <LogoSVG />
          <div className="flex flex-col leading-tight">
            <span
              className={`font-playfair font-bold text-lg tracking-wide transition-colors ${
                scrolled ? 'text-brown-deep' : 'text-white'
              }`}
            >
              Roby Builders
            </span>
            <span
              className={`font-jost text-[10px] uppercase tracking-[0.2em] transition-colors ${
                scrolled ? 'text-text-muted' : 'text-sandal-light'
              }`}
            >
              Est. 2009 · Karaikudi
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 font-jost text-sm font-medium tracking-wide rounded transition-colors ${
                pathname === link.href
                  ? scrolled
                    ? 'text-brown-warm'
                    : 'text-sandal'
                  : scrolled
                  ? 'text-text-dark hover:text-brown-warm'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Services dropdown */}
          <div
            ref={dropdownRef}
            className={`relative ${dropdownOpen ? 'dropdown-open' : ''}`}
          >
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className={`px-4 py-2 font-jost text-sm font-medium tracking-wide rounded transition-colors flex items-center gap-1 ${
                scrolled
                  ? 'text-text-dark hover:text-brown-warm'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Services
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="dropdown-panel absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-card-hover border border-sandal/20 py-2 z-50">
              {serviceItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-dark hover:bg-sandal-pale hover:text-brown-warm transition-colors"
                >
                  <span>{item.icon}</span>
                  <span className="font-jost font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919876543210"
            className={`font-jost text-sm font-medium transition-colors ${
              scrolled ? 'text-text-muted hover:text-brown-warm' : 'text-white/80 hover:text-white'
            }`}
          >
            +91 98765 43210
          </a>
          <Link
            href="/contact"
            className="btn-skew btn-skew-sm bg-sandal text-brown-deep hover:bg-brown-warm hover:text-white"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? 'bg-brown-deep' : 'bg-white'
            } ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? 'bg-brown-deep' : 'bg-white'
            } ${mobileOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? 'bg-brown-deep' : 'bg-white'
            } ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-sandal/20 ${
          mobileOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2.5 px-3 font-jost font-medium text-text-dark hover:text-brown-warm hover:bg-sandal-pale rounded transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-1 pb-1 border-t border-sandal/20 mt-1">
            <p className="px-3 py-1 text-xs text-text-muted font-jost uppercase tracking-widest">Services</p>
            {serviceItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 py-2.5 px-3 font-jost font-medium text-text-dark hover:text-brown-warm hover:bg-sandal-pale rounded transition-colors"
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-2 btn-skew bg-sandal text-brown-deep text-center justify-center"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
