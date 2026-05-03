const reasons = [
  {
    icon: '⚡',
    title: '24-Hour Response',
    desc: 'Every enquiry gets a personal call-back within 24 hours — guaranteed.',
  },
  {
    icon: '🎯',
    title: 'Free Consultation',
    desc: 'No charges for the initial consultation. We assess your project and give honest advice.',
  },
  {
    icon: '📊',
    title: 'Detailed Estimation',
    desc: 'Receive a full itemised estimate — not a vague ballpark — within 3 working days.',
  },
  {
    icon: '🔒',
    title: 'No Obligation',
    desc: 'Getting a quote costs nothing. Decide only when you are fully comfortable.',
  },
];

export default function WhyContact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="text-center mb-12">
          <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
            Why Reach Out?
          </p>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-brown-deep">
            What Happens When You Contact Us
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="hover-bar bg-cream rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1">
              <span className="text-4xl mb-4 block">{r.icon}</span>
              <h3 className="font-playfair text-lg font-bold text-brown-deep mb-2">{r.title}</h3>
              <p className="font-jost text-sm text-text-muted leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
