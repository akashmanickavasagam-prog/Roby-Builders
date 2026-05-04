const reasons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Single-Contract Delivery',
    desc: 'One agreement covers design, civil, MEP, and finishing. No coordination gaps, no blame shifting between contractors.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: '98% On-Time Record',
    desc: 'Milestone-locked schedules with weekly site reports and escalation protocols that keep every phase on track.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: 'Third-Party Quality Checks',
    desc: 'Independent structural audits at foundation, plinth, and slab stages — not just our word, documented proof.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: '12-Month DLP',
    desc: 'Defect Liability Period with 24-hour response guarantee — any snag after handover is our responsibility to fix.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: 'Transparent Pricing',
    desc: 'Line-item BOQ approved before work starts. Progress billing tied to verified milestones — no surprise invoices.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Approval Management',
    desc: 'We liaise with DTCP, TNRERA, fire department, and local panchayat / municipality — so you stay focused on your business.',
  },
];

export default function CommercialWhyUs() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
              Why Choose Us
            </p>
            <h2 className="font-playfair text-4xl font-bold text-brown-deep mb-4 leading-tight">
              The Roby Builders
              <span className="block text-brown-warm italic">Commercial Advantage</span>
            </h2>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-sandal" />
              <span className="w-2 h-2 rounded-full bg-sandal" />
            </div>
            <p className="font-jost text-text-muted leading-relaxed mb-8">
              Delivering a commercial building means managing dozens of contractors, approvals, and timelines simultaneously. We've built the systems and the team to handle that complexity — so you don't have to.
            </p>

            {/* Testimonial callout */}
            <div className="bg-brown-deep rounded-2xl p-7">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#C9A87C" className="mb-4">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="font-cormorant text-lg text-white/90 italic leading-relaxed mb-4">
                "Roby Builders delivered our 12,000 sq ft office complex two weeks ahead of schedule and under budget. Their site management and transparency throughout the build was exceptional."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sandal/30 flex items-center justify-center">
                  <span className="font-playfair text-sandal font-bold text-sm">RK</span>
                </div>
                <div>
                  <p className="font-jost text-sm font-semibold text-white">Rajan Kumar</p>
                  <p className="font-jost text-xs text-white/50">MD, RK Textile Group — Karaikudi</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="hover-bar bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-0.5"
              >
                <span className="text-brown-warm block mb-3">{r.icon}</span>
                <h3 className="font-playfair text-base font-bold text-brown-deep mb-1">{r.title}</h3>
                <p className="font-jost text-sm text-text-muted leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
