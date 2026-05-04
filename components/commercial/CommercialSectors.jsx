const sectors = [
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Office Spaces',
    desc: 'Corporate headquarters, IT parks, and co-working hubs engineered for productivity and brand presence.',
    tags: ['Open Plan', 'Raised Flooring', 'Data Cabling'],
    accent: '#C9A87C',
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Retail Outlets',
    desc: 'Showrooms, boutiques, and restaurants designed to attract footfall and elevate the customer experience.',
    tags: ['High-Gloss Finish', 'Façade Design', 'Display Lighting'],
    accent: '#8B4E27',
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: 'Shopping Complexes',
    desc: 'Multi-level retail plazas and malls built with robust structural systems, wide atriums, and efficient circulation.',
    tags: ['Multi-Storey', 'Fire NOC', 'Lift & Escalator'],
    accent: '#6B3A20',
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Factory & Warehouse',
    desc: 'Heavy-load industrial sheds, cold storage facilities, and logistics warehouses built to industry specifications.',
    tags: ['Pre-Engineered', 'Epoxy Flooring', 'Dock Levellers'],
    accent: '#A0522D',
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <line x1="12" y1="22" x2="12" y2="17" />
        <path d="M9 22V17h6v5" />
        <path d="M9 12h6" />
      </svg>
    ),
    title: 'Hotels & Hospitality',
    desc: 'Hotels, resorts, and service apartments crafted for guest comfort with premium finishes and seamless services.',
    tags: ['Star-Rated Specs', 'HVAC Systems', 'Pool & Spa'],
    accent: '#3E1F0E',
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: 'Institutional',
    desc: 'Schools, colleges, hospitals, and community centres built to government norms with safety-first planning.',
    tags: ['NBC Compliant', 'Ramp Access', 'Green Building'],
    accent: '#5C2E0E',
  },
];

export default function CommercialSectors() {
  return (
    <section className="py-24 bg-white">
      <span className="section-wm top-8 left-1/2 -translate-x-1/2">Sectors</span>

      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
        <div className="text-center mb-14">
          <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
            Industries We Serve
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-deep mb-4">
            Our Commercial Sectors
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-12 bg-sandal" />
            <span className="w-2 h-2 rounded-full bg-sandal" />
            <span className="h-px w-12 bg-sandal" />
          </div>
          <p className="font-jost text-text-muted max-w-xl mx-auto leading-relaxed">
            From corporate towers to industrial facilities — we build for every commercial need with equal expertise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((s) => (
            <div
              key={s.title}
              className="hover-bar group bg-cream rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors"
                style={{ backgroundColor: s.accent + '18', color: s.accent }}
              >
                {s.icon}
              </div>
              <h3 className="font-playfair text-xl font-bold text-brown-deep mb-2">{s.title}</h3>
              <p className="font-jost text-sm text-text-muted leading-relaxed flex-1 mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-jost text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-sandal/30 text-brown-warm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
