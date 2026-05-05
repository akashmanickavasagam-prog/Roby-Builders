const deliverables = [
  {
    title: 'Detailed Written Report',
    desc: '5–10 page technical document covering all findings, recommendations, and action items — tailored to your project.',
  },
  {
    title: 'Itemised Cost Estimate',
    desc: 'Line-by-line cost breakdown based on current Karaikudi material and labour rates — gives you a realistic budget.',
  },
  {
    title: 'Site Assessment Photos',
    desc: 'Annotated photographs highlighting key observations, defects, or opportunities — visual proof for lenders or family.',
  },
  {
    title: 'Phased Action Plan',
    desc: 'Step-by-step roadmap with priorities ranked by impact and urgency — tells you exactly what to do first, second, third.',
  },
  {
    title: 'Follow-Up Support (7 Days)',
    desc: 'One week of email/phone support to answer clarifications or discuss the report — included in every package.',
  },
];

function CheckIcon() {
  return (
    <div
      className="w-8 h-8 flex-shrink-0 flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #C9A87C, #8B4E27)',
        boxShadow: '0 6px 18px rgba(201,168,124,0.3)',
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );
}

export default function ConsultationDeliverables() {
  return (
    <section className="py-24 md:py-[100px] px-5 md:px-20 bg-cream">
      {/* Label */}
      <div className="flex items-center gap-3 mb-[18px]">
        <span className="w-10 h-px bg-sandal flex-shrink-0" />
        <span className="font-jost text-[10.5px] tracking-[0.24em] uppercase text-sandal font-semibold">
          Deliverables
        </span>
      </div>

      <h2
        className="font-playfair font-bold text-brown-deep leading-[1.15] mb-4"
        style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}
      >
        What You <em className="not-italic text-brown-warm italic">Get</em>
      </h2>
      <p className="font-jost text-[16px] font-light leading-[1.85] text-text-muted max-w-[740px] mb-2">
        Every consultation includes a comprehensive written report — no guesswork, no vague advice, just actionable recommendations you can implement immediately.
      </p>

      {/* Two-col grid */}
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-[72px] items-center mt-16">
        {/* Checklist */}
        <div className="flex flex-col gap-[18px]">
          {deliverables.map((d) => (
            <div key={d.title} className="flex items-start gap-[18px]">
              <CheckIcon />
              <div>
                <h4 className="font-jost text-[16px] font-semibold text-brown-deep mb-1">{d.title}</h4>
                <p className="font-jost text-[13px] font-light leading-[1.75] text-text-muted">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image placeholder */}
        <div className="bg-sandal-pale border-2 border-dashed border-[rgba(201,168,124,0.4)] p-16 flex flex-col items-center justify-center gap-3 text-center min-h-[340px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[rgba(201,168,124,0.35)]">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <p className="font-playfair text-[18px] font-semibold text-brown-mid">Sample Consultation Report</p>
          <p className="font-jost text-[13px] font-light text-text-muted">Add sample report image here</p>
        </div>
      </div>
    </section>
  );
}
