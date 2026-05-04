const reasons = [
  {
    title: 'In-House Carpentry Team',
    desc: 'Our own craftsmen — not outsourced labour — execute all joinery work. Quality control stays entirely in our hands.',
  },
  {
    title: 'No Hidden Costs',
    desc: 'Itemised BOQ agreed upfront. Final invoice stays within ±5% of approved estimate, or we absorb the difference.',
  },
  {
    title: '3D Preview Before Commitment',
    desc: 'You approve photorealistic renders of every room before a single panel is cut or a coat of paint is applied.',
  },
  {
    title: 'Lifestyle-First Design',
    desc: 'We design around how you actually live — storage habits, traffic flow, natural light, and daily routines.',
  },
  {
    title: 'On-Time Delivery',
    desc: 'Average project turnaround of 45 days for a 3BHK, backed by a penalty clause if we exceed the agreed timeline.',
  },
  {
    title: '1-Year Workmanship Warranty',
    desc: 'Any defect in execution — paint peeling, hinge failure, panel warp — fixed at no cost within the warranty period.',
  },
];

export default function InteriorWhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
              Why Choose Roby Builders
            </p>
            <h2 className="font-playfair text-4xl font-bold text-brown-deep mb-4 leading-tight">
              Design You Can
              <span className="block text-brown-warm italic">Trust Completely</span>
            </h2>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-sandal" />
              <span className="w-2 h-2 rounded-full bg-sandal" />
            </div>
            <p className="font-jost text-text-muted leading-relaxed mb-6">
              Interior design is an industry with a reputation for scope creep, delayed deliveries, and unexpected bills. We've built our practice around eliminating every one of those pain points.
            </p>

            {/* Testimonial */}
            <div className="bg-cream rounded-2xl p-6 border-l-4 border-sandal">
              <p className="font-cormorant text-lg text-brown-deep italic leading-relaxed mb-4">
                "The 3D renders matched our actual home so perfectly that we were stunned. Delivered exactly on Day 42 and the quality of carpentry is outstanding."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brown-deep flex items-center justify-center">
                  <span className="font-playfair text-sandal font-bold text-xs">PM</span>
                </div>
                <div>
                  <p className="font-jost text-sm font-semibold text-brown-deep">Priya Murugan</p>
                  <p className="font-jost text-xs text-text-muted">3BHK Villa Interior — Karaikudi</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="hover-bar bg-cream rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-0.5"
              >
                <div className="w-8 h-8 rounded-full bg-brown-deep flex items-center justify-center mb-3">
                  <span className="font-jost text-xs font-bold text-sandal">{String(i + 1).padStart(2, '0')}</span>
                </div>
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
