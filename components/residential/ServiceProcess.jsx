const phases = [
  { phase: 'Phase 1', title: 'Planning & Approval', duration: '4–6 weeks', desc: 'Site survey, soil testing, architectural drawings, structural design, and government plan approval.' },
  { phase: 'Phase 2', title: 'Foundation & Structure', duration: '8–12 weeks', desc: 'Excavation, footing, plinth beam, column casting, and slab work for all floors.' },
  { phase: 'Phase 3', title: 'Masonry & Roofing', duration: '6–8 weeks', desc: 'Block/brick work, lintel casting, staircase, terrace slab, and waterproofing treatment.' },
  { phase: 'Phase 4', title: 'MEP & Finishing', duration: '8–10 weeks', desc: 'Electrical conduit, plumbing, plastering, tiles, doors, windows, and painting.' },
  { phase: 'Phase 5', title: 'Handover', duration: '1–2 weeks', desc: 'Final quality inspection, snag resolution, documentation, and key handover ceremony.' },
];

export default function ServiceProcess() {
  return (
    <section className="py-24 bg-sandal-pale">
      <div className="max-w-5xl mx-auto px-5 lg:px-12">
        <div className="text-center mb-14">
          <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
            Construction Phases
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-deep mb-4">
            How We Build Your Home
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-sandal" />
            <span className="w-2 h-2 rounded-full bg-sandal" />
            <span className="h-px w-12 bg-sandal" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {phases.map((p, i) => (
            <div key={p.phase} className="bg-white rounded-2xl shadow-card p-6 flex gap-5 items-start hover-bar">
              <div className="flex-shrink-0 flex flex-col items-center gap-1">
                <div className="w-12 h-12 rounded-xl bg-brown-deep flex items-center justify-center">
                  <span className="font-playfair font-bold text-sandal text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="font-jost text-xs text-brown-warm uppercase tracking-widest font-semibold mb-0.5">{p.phase}</p>
                    <h3 className="font-playfair text-xl font-bold text-brown-deep">{p.title}</h3>
                  </div>
                  <span className="bg-sandal-pale border border-sandal/40 text-brown-warm font-jost text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0">
                    {p.duration}
                  </span>
                </div>
                <p className="font-jost text-sm text-text-muted leading-relaxed mt-2">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
