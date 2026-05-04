const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Living & Dining',
    desc: 'Open-plan social spaces with curated furniture layouts, feature walls, accent lighting, and statement ceilings that flow effortlessly.',
    tags: ['False Ceiling', 'Feature Wall', 'Ambient Lighting'],
    accent: '#C9A87C',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
      </svg>
    ),
    title: 'Modular Kitchens',
    desc: 'Ergonomic kitchen layouts with premium shutters, quartz countertops, soft-close fittings, and concealed storage systems.',
    tags: ['L-Shape', 'Island Style', 'Quartz Counter'],
    accent: '#8B4E27',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Bedroom Design',
    desc: 'Serene master suites, space-smart kids rooms, and guest bedrooms with wardrobe systems, mood lighting, and plush finishes.',
    tags: ['Walk-in Wardrobe', 'Plush Upholstery', 'Task Lighting'],
    accent: '#6B3A20',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Home Office',
    desc: 'Productive work-from-home setups with built-in desks, cable management, bookcase walls, and glare-free task lighting.',
    tags: ['Built-in Desk', 'Acoustic Panels', 'Cable Trunking'],
    accent: '#A0522D',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Commercial Interiors',
    desc: 'Brand-aligned office fit-outs, retail interiors, restaurants, and hotel lobbies that create lasting impressions.',
    tags: ['Brand Identity', 'Ergonomic Fit-out', 'Retail VM'],
    accent: '#3E1F0E',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: 'Turnkey Projects',
    desc: 'Fully furnished and move-in ready handovers — every piece of furniture, appliance, and fitting selected and installed by our team.',
    tags: ['Fully Furnished', 'White Glove', 'Single Invoice'],
    accent: '#5C2E0E',
  },
];

export default function InteriorServices() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <span className="section-wm top-8 left-1/2 -translate-x-1/2">Interiors</span>

      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
        <div className="text-center mb-14">
          <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
            What We Design
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-deep mb-4">
            Interior Design Services
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-12 bg-sandal" />
            <span className="w-2 h-2 rounded-full bg-sandal" />
            <span className="h-px w-12 bg-sandal" />
          </div>
          <p className="font-jost text-text-muted max-w-xl mx-auto leading-relaxed">
            Every room, every corner — designed with intent and finished with care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="hover-bar group bg-cream rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div
                className="w-13 h-13 w-14 h-14 rounded-xl flex items-center justify-center mb-5"
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
