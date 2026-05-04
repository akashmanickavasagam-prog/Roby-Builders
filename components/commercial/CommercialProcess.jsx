const steps = [
  {
    num: '01',
    title: 'Site Analysis & Feasibility',
    desc: 'Soil testing, topographic survey, local bye-law review, and floor space index (FSI) calculation to establish what can be built.',
    duration: '1–2 Weeks',
  },
  {
    num: '02',
    title: 'Design & Approvals',
    desc: 'Architectural drawings, structural design, MEP coordination, and all statutory submissions including building plan approval and TNRERA registration.',
    duration: '4–6 Weeks',
  },
  {
    num: '03',
    title: 'Foundation & Structure',
    desc: 'Excavation, pile/raft foundation, column casting, beam and slab work executed with third-party quality testing at every stage.',
    duration: 'Per Plan',
  },
  {
    num: '04',
    title: 'MEP & Civil Finishing',
    desc: 'Concurrent electrical, plumbing, HVAC, and fire-fighting installation followed by brickwork, plastering, flooring, and façade work.',
    duration: 'Per Plan',
  },
  {
    num: '05',
    title: 'Handover & Warranties',
    desc: 'Final snag clearance, occupancy certificate application, utility connections, and structured 12-month defect liability period with 24h response.',
    duration: '2–4 Weeks',
  },
];

export default function CommercialProcess() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <span className="section-wm top-8 left-1/2 -translate-x-1/2">Process</span>

      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
        <div className="text-center mb-14">
          <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
            How We Build
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-deep mb-4">
            Our Build Process
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-12 bg-sandal" />
            <span className="w-2 h-2 rounded-full bg-sandal" />
            <span className="h-px w-12 bg-sandal" />
          </div>
          <p className="font-jost text-text-muted max-w-lg mx-auto leading-relaxed">
            A transparent, milestone-driven process — you always know where your project stands.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-[2.6rem] top-10 bottom-10 w-px bg-sandal/20" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-6 group">
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-brown-deep group-hover:bg-brown-warm transition-colors flex items-center justify-center shadow-card">
                    <span className="font-playfair text-lg font-bold text-sandal">{step.num}</span>
                  </div>
                </div>
                <div className="hover-bar bg-cream rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all flex-1 flex flex-col sm:flex-row sm:items-start gap-4 mb-0">
                  <div className="flex-1">
                    <h3 className="font-playfair text-xl font-bold text-brown-deep mb-2">{step.title}</h3>
                    <p className="font-jost text-sm text-text-muted leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="inline-block font-jost text-xs uppercase tracking-widest text-brown-warm border border-sandal/30 bg-sandal/10 rounded-full px-3 py-1">
                      {step.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
