import Link from 'next/link';

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Residential',
    subtitle: 'Homes & Villas',
    desc: 'Custom homes, villas, and apartments crafted with meticulous attention to detail and premium materials.',
    href: '/services/residential',
    accent: '#C9A87C',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Commercial',
    subtitle: 'Offices & Retail',
    desc: 'State-of-the-art commercial spaces designed for productivity, brand presence, and lasting impressions.',
    href: '/services/commercial',
    accent: '#8B4E27',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Renovation',
    subtitle: 'Remodelling & Upgrade',
    desc: 'Breathe new life into existing structures with our expert renovation and remodelling solutions.',
    href: '/services/renovation',
    accent: '#6B3A20',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Consultation',
    subtitle: 'Planning & Estimation',
    desc: 'Professional site analysis, cost estimation, and project planning to set your build up for success.',
    href: '/services/consultation',
    accent: '#3E1F0E',
  },
];

const trustItems = [
  { val: '15+', label: 'Years of Trust' },
  { val: 'ISO', label: 'Certified Quality' },
  { val: '0', label: 'Structural Defects' },
  { val: '24h', label: 'Response Time' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-cream relative overflow-hidden">
      {/* Watermark */}
      <span className="section-wm top-8 left-1/2 -translate-x-1/2">Services</span>

      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
            What We Build
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-deep mb-4">
            Our Construction Services
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-12 bg-sandal" />
            <span className="w-2 h-2 rounded-full bg-sandal" />
            <span className="h-px w-12 bg-sandal" />
          </div>
          <p className="font-jost text-text-muted max-w-xl mx-auto leading-relaxed">
            End-to-end construction expertise — from your first sketch to the final handover key.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((svc) => (
            <Link
              key={svc.title}
              href={svc.href}
              className="hover-bar group bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors group-hover:opacity-90"
                style={{ backgroundColor: svc.accent + '18', color: svc.accent }}
              >
                {svc.icon}
              </div>
              <h3 className="font-playfair text-xl font-bold text-brown-deep mb-1">{svc.title}</h3>
              <p className="font-jost text-xs text-text-muted uppercase tracking-widest mb-3">{svc.subtitle}</p>
              <p className="font-jost text-sm text-text-muted leading-relaxed flex-1">{svc.desc}</p>
              <div className="flex items-center gap-2 mt-4 text-sm font-jost font-semibold text-brown-warm group-hover:gap-3 transition-all">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Trust bar */}
        <div className="bg-brown-deep rounded-2xl px-8 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((t) => (
            <div key={t.label} className="text-center">
              <p className="font-playfair text-3xl font-bold text-sandal">{t.val}</p>
              <p className="font-jost text-xs text-white/60 uppercase tracking-widest mt-1">{t.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
