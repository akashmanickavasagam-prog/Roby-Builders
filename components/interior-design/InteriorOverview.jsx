const pillars = [
  { num: '01', title: 'Concept to Reality', desc: 'We translate your vision into mood boards, 3D renders, and material palettes before a single nail is driven.' },
  { num: '02', title: 'Material Integrity', desc: 'Only ISI-marked, warranty-backed materials — no hidden substitutions on site.' },
  { num: '03', title: 'Lifestyle-Fit Design', desc: 'Every layout respects how you actually live — workflow, light, storage, and social flow all considered.' },
  { num: '04', title: 'Zero Surprises Budget', desc: 'Itemised BOQ issued upfront. Final invoice stays within ±5% of approved estimate.' },
];

export default function InteriorOverview() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
              Our Design Philosophy
            </p>
            <h2 className="font-playfair text-4xl font-bold text-brown-deep mb-4 leading-tight">
              Design That Feels Like
              <span className="block text-brown-warm italic">It Was Always Yours</span>
            </h2>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-sandal" />
              <span className="w-2 h-2 rounded-full bg-sandal" />
            </div>
            <p className="font-jost text-text-muted leading-relaxed mb-4">
              Great interiors are not about trends — they are about people. At Roby Builders, our design team starts by understanding how you live, work, entertain, and rest before a single sketch is drawn.
            </p>
            <p className="font-jost text-text-muted leading-relaxed mb-8">
              We blend traditional craftsmanship with contemporary sensibility — delivering spaces that are beautiful on the day of handover and even better five years later.
            </p>

            <div className="grid grid-cols-3 gap-4 bg-brown-deep rounded-2xl px-6 py-5">
              {[
                { val: '120+', label: 'Projects Done' },
                { val: '45', label: 'Avg Days' },
                { val: '4.9★', label: 'Client Score' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-playfair text-2xl font-bold text-sandal">{s.val}</p>
                  <p className="font-jost text-[10px] text-white/60 uppercase tracking-widest mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {pillars.map((p) => (
              <div
                key={p.num}
                className="hover-bar bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-0.5 flex gap-5"
              >
                <span className="font-playfair text-3xl font-bold text-sandal/40 shrink-0 leading-none">{p.num}</span>
                <div>
                  <h3 className="font-playfair text-lg font-bold text-brown-deep mb-1">{p.title}</h3>
                  <p className="font-jost text-sm text-text-muted leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
