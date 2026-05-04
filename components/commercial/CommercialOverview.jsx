const highlights = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Structural Integrity',
    desc: 'RCC-framed multi-storey structures designed for seismic compliance and heavy commercial loads.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'MEP Integration',
    desc: 'Coordinated mechanical, electrical, and plumbing systems built to commercial-grade standards.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'On-Time Delivery',
    desc: 'Milestone-driven project management with dedicated site engineers ensuring zero schedule slippage.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Compliance & Safety',
    desc: 'TNRERA-compliant drawings, fire NOC, lift approvals, and all statutory clearances managed end-to-end.',
  },
];

export default function CommercialOverview() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
            What We Deliver
          </p>
          <h2 className="font-playfair text-4xl font-bold text-brown-deep mb-4 leading-tight">
            Commercial Construction
            <span className="block text-brown-warm italic">Built to Perform</span>
          </h2>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-sandal" />
            <span className="w-2 h-2 rounded-full bg-sandal" />
          </div>
          <p className="font-jost text-text-muted leading-relaxed mb-4">
            Commercial projects demand precision at a different scale. At Roby Builders, we bring the same craftsmanship that defines our residential work — amplified for the complexity of offices, retail spaces, industrial facilities, and hospitality properties.
          </p>
          <p className="font-jost text-text-muted leading-relaxed">
            From site feasibility and design coordination to structural execution, MEP integration, and final fit-out, our team manages every phase under one roof. You get a single point of accountability from groundbreaking to handover.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {['TNRERA Compliant', 'ISO Certified', 'Govt. Approved', 'Vastu-Friendly Plans'].map((tag) => (
              <span
                key={tag}
                className="font-jost text-xs text-brown-warm border border-sandal/40 bg-sandal/10 rounded-full px-3 py-1 uppercase tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="hover-bar bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
            >
              <span className="text-brown-warm mb-3 block">{h.icon}</span>
              <h3 className="font-playfair text-lg font-bold text-brown-deep mb-1">{h.title}</h3>
              <p className="font-jost text-sm text-text-muted leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
