const points = [
  { title: 'In-house structural engineers', desc: 'Our own licensed civil engineers handle all structural design — no outsourcing.' },
  { title: 'Fixed-price contracts', desc: 'Lock in your budget at the start. Price changes only if you change the scope.' },
  { title: 'Quality material sourcing', desc: 'Direct relationships with top manufacturers for the best materials at best prices.' },
  { title: '2-year structural warranty', desc: 'Comprehensive post-handover warranty covering all structural and water-seepage issues.' },
  { title: 'Weekly photo updates', desc: 'See your home take shape with weekly site photos sent directly to your phone.' },
  { title: 'Vastu & design expertise', desc: 'Optional Vastu compliance integrated at the planning stage at no extra charge.' },
];

export default function ServiceWhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="text-center mb-14">
          <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
            The Roby Difference
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-deep mb-4">
            Why Choose Roby Builders?
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-sandal" />
            <span className="w-2 h-2 rounded-full bg-sandal" />
            <span className="h-px w-12 bg-sandal" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <div key={p.title} className="flex gap-4 items-start p-6 bg-cream rounded-2xl shadow-card hover-bar hover:shadow-card-hover transition-all hover:-translate-y-1">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brown-deep flex items-center justify-center">
                <span className="font-playfair font-bold text-sandal text-sm">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div>
                <h3 className="font-jost font-semibold text-text-dark mb-1">{p.title}</h3>
                <p className="font-jost text-sm text-text-muted leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
