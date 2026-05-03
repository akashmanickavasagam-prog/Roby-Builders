const milestones = [
  {
    year: '2009',
    title: 'Founded',
    desc: 'Roby Builders established in Karaikudi by Er. Roby Renesh J with a team of 5.',
    side: 'left',
  },
  {
    year: '2012',
    title: 'First Commercial Project',
    desc: 'Delivered a 10,000 sq ft commercial complex in Sivaganga — a turning point for the firm.',
    side: 'right',
  },
  {
    year: '2015',
    title: 'ISO Certification',
    desc: 'Achieved ISO 9001:2015 certification, formalising our quality management systems.',
    side: 'left',
  },
  {
    year: '2018',
    title: '100 Projects Milestone',
    desc: 'Celebrated completing 100 projects — a milestone marked by zero structural complaints.',
    side: 'right',
  },
  {
    year: '2021',
    title: 'Expansion to Chennai & Madurai',
    desc: 'Opened operations in Chennai and Madurai with dedicated project management teams.',
    side: 'left',
  },
  {
    year: '2024',
    title: '200+ Projects, 500+ Families',
    desc: 'Crossed 200 completed projects and 500 happy families across Tamil Nadu.',
    side: 'right',
  },
];

export default function TimelineSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-5 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
            Our Journey
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-deep mb-4">
            15 Years of Milestones
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-sandal" />
            <span className="w-2 h-2 rounded-full bg-sandal" />
            <span className="h-px w-12 bg-sandal" />
          </div>
        </div>

        <div className="timeline-container">
          {milestones.map((m, i) => (
            <div
              key={m.year}
              className={`flex gap-8 mb-10 items-start max-md:flex-col ${
                m.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Card */}
              <div className="flex-1 bg-cream rounded-2xl p-6 shadow-card hover-bar">
                <span className="font-jost text-xs text-brown-warm uppercase tracking-widest font-semibold">{m.year}</span>
                <h3 className="font-playfair text-xl font-bold text-brown-deep mt-1 mb-2">{m.title}</h3>
                <p className="font-jost text-sm text-text-muted leading-relaxed">{m.desc}</p>
              </div>

              {/* Center dot (hidden on mobile) */}
              <div className="hidden md:flex flex-col items-center flex-shrink-0 pt-6">
                <div className="w-4 h-4 rounded-full bg-sandal border-4 border-cream shadow-card" />
              </div>

              {/* Spacer */}
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
