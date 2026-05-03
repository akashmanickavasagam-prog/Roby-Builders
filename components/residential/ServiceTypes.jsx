const types = [
  {
    title: 'Individual Villas',
    desc: 'Fully customised luxury villas designed around your lifestyle. Premium finishes, large plot utilisation, and landscaped gardens.',
    features: ['G+1 to G+3 structures', 'Custom floor plans', 'Premium tiles & fixtures', 'Landscaping included'],
    icon: '🏡',
  },
  {
    title: 'Independent Houses',
    desc: 'Well-designed independent homes for families seeking quality at competitive budgets. Practical, durable, and beautiful.',
    features: ['900 – 2,400 sq ft range', 'Standard & premium finishes', 'Vastu-compliant designs', 'Solar power ready'],
    icon: '🏠',
  },
  {
    title: 'Apartment Buildings',
    desc: 'Multi-unit residential buildings for developers and housing societies. End-to-end construction and common area management.',
    features: ['G+4 to G+8 structures', 'RERA-compliant planning', 'Common area design', 'Lift provision'],
    icon: '🏢',
  },
  {
    title: 'Farm Houses',
    desc: 'Spacious, rustic-modern farm homes with borewell provision, open sit-outs, and agricultural storage structures.',
    features: ['Large plot designs', 'Borewell & water provision', 'Agri storage structures', 'Open terrace design'],
    icon: '🌾',
  },
];

export default function ServiceTypes() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <span className="section-wm top-8 right-0">Homes</span>

      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
        <div className="text-center mb-14">
          <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
            Types We Build
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-deep mb-4">
            Residential Project Types
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-sandal" />
            <span className="w-2 h-2 rounded-full bg-sandal" />
            <span className="h-px w-12 bg-sandal" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((t) => (
            <div key={t.title} className="hover-bar bg-cream rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 flex flex-col">
              <span className="text-4xl mb-4 block">{t.icon}</span>
              <h3 className="font-playfair text-xl font-bold text-brown-deep mb-2">{t.title}</h3>
              <p className="font-jost text-sm text-text-muted leading-relaxed mb-4 flex-1">{t.desc}</p>
              <ul className="flex flex-col gap-1.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs font-jost text-text-dark">
                    <span className="w-3.5 h-3.5 rounded-full bg-sandal/20 flex items-center justify-center flex-shrink-0">
                      <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#8B4E27" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
