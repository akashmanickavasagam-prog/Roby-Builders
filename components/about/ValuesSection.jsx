const values = [
  {
    icon: '🏆',
    title: 'Quality First',
    desc: 'We use only ISI-marked materials from certified suppliers. Every batch is tested before use — no shortcuts, ever.',
  },
  {
    icon: '🤝',
    title: 'Transparent Pricing',
    desc: 'Detailed BOQ upfront with no hidden charges. Any scope change is discussed and agreed in writing before work begins.',
  },
  {
    icon: '⏱️',
    title: 'On-Time Delivery',
    desc: 'We have an industry-leading 98% on-time delivery record. Delays cost you money — we take that seriously.',
  },
  {
    icon: '💬',
    title: 'Client Communication',
    desc: 'Weekly progress reports, photo updates, and a dedicated project manager who picks up your calls — always.',
  },
  {
    icon: '🌱',
    title: 'Sustainable Building',
    desc: 'We integrate eco-friendly practices: low-carbon materials, rainwater harvesting-ready designs, and waste minimisation.',
  },
  {
    icon: '🔐',
    title: 'Post-Build Support',
    desc: '2-year structural warranty backed by a real after-sales team. We don\'t disappear after handover.',
  },
];

export default function ValuesSection() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <span className="section-wm top-8 right-0">Values</span>

      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
        <div className="text-center mb-14">
          <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
            What We Stand For
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-deep mb-4">
            Our Core Values
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-sandal" />
            <span className="w-2 h-2 rounded-full bg-sandal" />
            <span className="h-px w-12 bg-sandal" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="hover-bar bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-3xl mb-4 block">{v.icon}</span>
              <h3 className="font-playfair text-xl font-bold text-brown-deep mb-2">{v.title}</h3>
              <p className="font-jost text-sm text-text-muted leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
