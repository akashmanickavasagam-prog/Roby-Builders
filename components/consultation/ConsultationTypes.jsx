const types = [
  {
    title: 'New Construction Consultation',
    tag: 'Ideal for: Plot owners, first-time builders',
    desc: "Planning to build a home, commercial building, or compound? Our engineers evaluate your plot, assess soil and drainage conditions, review setback regulations, estimate structural requirements, and prepare a realistic project cost and timeline — before you engage any contractor.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px] text-brown-warm">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'Renovation Planning Consultation',
    tag: 'Ideal for: Homeowners, property investors',
    desc: "Thinking about a renovation but unsure of scope, cost, or sequence? We assess your existing structure, identify what must be replaced versus what can be retained, define the optimal renovation sequence to avoid rework, and provide a phased plan that fits your budget.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px] text-brown-warm">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    title: 'Structural Audit & Assessment',
    tag: 'Ideal for: Older buildings, post-disaster check',
    desc: "Concerned about cracks, settlement, waterproofing failure, or an older building's structural integrity? Our engineers conduct a thorough visual and technical audit, identify the root causes of defects, and recommend the most cost-effective repair approach with a written report.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px] text-brown-warm">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Contractor Vetting Consultation',
    tag: 'Ideal for: Anyone comparing quotes',
    desc: "Received quotes from multiple contractors but unsure how to compare them? We review the BOQs line by line, identify gaps, flag underspecification, and give you an independent assessment of which contractor offers genuine value — so you don't get locked into a bad contract.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px] text-brown-warm">
        <path d="M2 20h20M4 20V10l8-6 8 6v10" />
        <rect x="9" y="14" width="6" height="6" />
      </svg>
    ),
  },
  {
    title: 'Budget & Cost Estimation',
    tag: 'Ideal for: Loan applicants, NRIs planning builds',
    desc: "Need a realistic construction or renovation budget before approaching a bank or family? We prepare a detailed, market-linked cost estimate for your project — broken down by civil, electrical, plumbing, and finishing work — based on current Karaikudi/Sivaganga district material rates.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px] text-brown-warm">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Interior Design Consultation',
    tag: 'Ideal for: New homeowners, office fit-outs',
    desc: "Not sure what style, material, or layout works best for your space? Our design consultation covers floor plan optimisation, material and finish selection, colour palette guidance, and spatial planning — giving you a clear design direction before committing to any purchase or contractor.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px] text-brown-warm">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
];

export default function ConsultationTypes() {
  return (
    <section className="py-24 md:py-[100px] px-5 md:px-20 bg-cream">
      {/* Label */}
      <div className="flex items-center gap-3 mb-[18px]">
        <span className="w-10 h-px bg-sandal flex-shrink-0" />
        <span className="font-jost text-[10.5px] tracking-[0.24em] uppercase text-sandal font-semibold">
          What We Offer
        </span>
      </div>

      <h2
        className="font-playfair font-bold text-brown-deep leading-[1.15] mb-4"
        style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}
      >
        Consultation{' '}
        <em className="not-italic text-brown-warm italic">Services</em>
      </h2>
      <p className="font-jost text-[16px] font-light leading-[1.85] text-text-muted max-w-[740px] mb-2">
        Whether you&apos;re planning a new build, considering a renovation, or dealing with a structural concern — we have a consultation designed for your specific need.
      </p>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">
        {types.map((t) => (
          <div
            key={t.title}
            className="hover-bar bg-white border border-[rgba(201,168,124,0.2)] p-10 relative overflow-hidden transition-all duration-300 hover:-translate-y-[6px] hover:shadow-card-hover"
            style={{ padding: '40px 32px' }}
          >
            {/* Icon */}
            <div className="w-[58px] h-[58px] bg-sandal-pale flex items-center justify-center mb-[22px]">
              {t.icon}
            </div>

            <h3 className="font-playfair text-[21px] font-bold text-brown-deep mb-3">{t.title}</h3>
            <p className="font-jost text-sm font-light leading-[1.85] text-text-muted mb-5">{t.desc}</p>
            <span className="inline-block px-3 py-[5px] bg-sandal-pale border border-[rgba(201,168,124,0.4)] font-jost text-[10.5px] font-semibold tracking-[0.12em] uppercase text-brown-mid">
              {t.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
