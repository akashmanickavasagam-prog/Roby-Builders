const steps = [
  {
    num: '01',
    title: 'Initial Call',
    desc: 'You call or fill out our consultation request form. We understand your project type, location, and key concerns — and confirm the consultation format and schedule.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-brown-warm">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.07 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 8 8l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Site Visit',
    desc: 'Er. Roby Renesh J visits your site or property in person. He examines the structure, takes measurements, photographs critical areas, and notes observations that inform his assessment.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-brown-warm">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Analysis & Report',
    desc: 'Within 48–72 hours, we prepare a written consultation report covering findings, recommendations, cost estimates, and a prioritised action plan tailored to your project.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-brown-warm">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Follow-Up Discussion',
    desc: 'We walk you through the report, answer all your questions, and advise on next steps. If you choose to proceed with construction or renovation, we\'re ready to quote and execute.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-brown-warm">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function ConsultationProcess() {
  return (
    <section className="py-24 md:py-[100px] px-5 md:px-20 bg-sandal-pale">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-[18px]">
          <span className="w-10 h-px bg-sandal flex-shrink-0" />
          <span className="font-jost text-[10.5px] tracking-[0.24em] uppercase text-sandal font-semibold">
            The Process
          </span>
          <span className="w-10 h-px bg-sandal flex-shrink-0" />
        </div>
        <h2
          className="font-playfair font-bold text-brown-deep leading-[1.15] mb-4 text-center"
          style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}
        >
          How Our{' '}
          <em className="not-italic text-brown-warm italic">Consultation Works</em>
        </h2>
        <p className="font-jost text-[16px] font-light leading-[1.85] text-text-muted max-w-[560px] mx-auto">
          From your first call to a full written report — a clear, structured process designed to give you maximum clarity in minimum time.
        </p>
      </div>

      {/* Steps grid */}
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {steps.map((s) => (
          <div
            key={s.num}
            className="bg-white border border-[rgba(201,168,124,0.25)] p-9 relative overflow-hidden transition-shadow hover:shadow-card-hover"
          >
            {/* Big number watermark */}
            <span className="absolute top-4 right-5 font-playfair text-[80px] font-bold text-[rgba(201,168,124,0.10)] leading-none select-none">
              {s.num}
            </span>

            {/* Icon */}
            <div className="w-[52px] h-[52px] bg-sandal-pale flex items-center justify-center mb-5">
              {s.icon}
            </div>

            <h4 className="font-playfair text-[20px] font-bold text-brown-deep mb-2.5">{s.title}</h4>
            <p className="font-jost text-sm font-light leading-[1.85] text-text-muted">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
