const steps = [
  {
    num: '01',
    title: 'Discovery Meeting',
    desc: 'We meet at your space (or virtually) to understand your lifestyle, aesthetic preferences, functional needs, and budget comfort zone. No forms — just a real conversation.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Concept Board & 3D Render',
    desc: 'Our designers produce mood boards, material palettes, and photorealistic 3D renders — so you see the finished space before any work begins. Revisions included.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'BOQ & Sign-Off',
    desc: 'A detailed Bill of Quantities with brand names, specifications, and unit rates for every item. You approve the exact scope — nothing begins until you confirm.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Execution',
    desc: 'Our own carpentry team and trusted trade partners execute on-site — false ceilings, wall panelling, modular units, flooring, electrical fixtures, and paint — all coordinated by a dedicated project lead.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Styling & Handover',
    desc: 'Final furnishing placement, décor styling, and thorough punch-list walkthrough with you. We hand over a space you can move into the same day — with a 1-year workmanship warranty.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
];

export default function InteriorProcess() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <span className="section-wm top-8 left-1/2 -translate-x-1/2">Process</span>

      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
        <div className="text-center mb-14">
          <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
            How We Work
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-deep mb-4">
            Our Design Process
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-12 bg-sandal" />
            <span className="w-2 h-2 rounded-full bg-sandal" />
            <span className="h-px w-12 bg-sandal" />
          </div>
          <p className="font-jost text-text-muted max-w-lg mx-auto leading-relaxed">
            Five clear steps from your first call to your move-in day — no ambiguity, no surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative flex flex-col items-center text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-px bg-sandal/20 z-0" />
              )}
              <div className="w-20 h-20 rounded-full bg-brown-deep group-hover:bg-brown-warm transition-colors flex items-center justify-center shadow-card mb-5 relative z-10 text-sandal">
                {step.icon}
              </div>
              <span className="font-playfair text-xs font-bold text-sandal/60 uppercase tracking-widest mb-1">{step.num}</span>
              <h3 className="font-playfair text-base font-bold text-brown-deep mb-2">{step.title}</h3>
              <p className="font-jost text-xs text-text-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
