const highlights = [
  { icon: '🏗️', title: 'Structural Engineering', desc: 'RCC framed structures designed for seismic zone compliance.' },
  { icon: '🪟', title: 'Premium Fixtures', desc: 'uPVC windows, anti-skid tiles, and ISI-marked fittings throughout.' },
  { icon: '💡', title: 'Smart Wiring', desc: 'Concealed copper wiring with modular switches and earthing protection.' },
  { icon: '💧', title: 'Plumbing & Drainage', desc: 'CPVC pipe network with rainwater harvesting integration.' },
];

export default function ServiceOverview() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
            What We Deliver
          </p>
          <h2 className="font-playfair text-4xl font-bold text-brown-deep mb-4 leading-tight">
            Residential Construction
            <span className="block text-brown-warm italic">Done Right</span>
          </h2>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-sandal" />
            <span className="w-2 h-2 rounded-full bg-sandal" />
          </div>
          <p className="font-jost text-text-muted leading-relaxed mb-4">
            Building a home is one of the biggest decisions you will ever make. At Roby Builders, we treat each residential project with the care and precision it deserves — from the foundation poured to the last coat of paint applied.
          </p>
          <p className="font-jost text-text-muted leading-relaxed">
            Our residential division handles everything: architectural design, structural engineering, all civil work, electrical, plumbing, finishing, and landscaping. You deal with one team, one point of contact, zero coordination headaches.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {highlights.map((h) => (
            <div key={h.title} className="hover-bar bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1">
              <span className="text-3xl mb-3 block">{h.icon}</span>
              <h3 className="font-playfair text-lg font-bold text-brown-deep mb-1">{h.title}</h3>
              <p className="font-jost text-sm text-text-muted leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
