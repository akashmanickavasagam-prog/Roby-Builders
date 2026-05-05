const trustBadges = [
  { num: '48h', lbl: 'Quote Turnaround' },
  { num: '1 Yr', lbl: 'Workmanship Warranty' },
  { num: '0', lbl: 'Hidden Charges' },
  { num: '150+', lbl: 'Renovations Completed' },
];

const steps = [
  {
    num: '01',
    title: 'Free Site Inspection',
    desc: 'Er. Roby Renesh J visits your home, assesses the current condition, identifies structural concerns, and understands your renovation goals and budget — completely free of charge.',
  },
  {
    num: '02',
    title: 'Itemised Cost Estimate',
    desc: 'We provide a detailed room-by-room breakdown of costs — materials, labour, and finishing — within 48 hours. No vague ballpark figures; every line item is explained clearly.',
  },
  {
    num: '03',
    title: 'Design Selection & Contract',
    desc: 'Choose your tiles, paint shades, fixtures, and finishes with guidance from our team. We finalise a fixed-price contract before any work begins — protecting you from cost overruns.',
  },
  {
    num: '04',
    title: 'Supervised Execution',
    desc: 'Our experienced team executes the renovation under daily supervision. You receive WhatsApp photo updates at every stage — demolition, waterproofing, tiling, painting, and finishing.',
  },
  {
    num: '05',
    title: 'Handover & Warranty',
    desc: 'A detailed walkthrough with you before we hand over. All punch-list items resolved before final payment. 1-year workmanship warranty on all renovation work — in writing.',
  },
];

export default function RenovationProcess() {
  return (
    <div className="ren-section-alt">
      <div className="ren-wrap" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="ren-two-col">
          <div>
            <div className="ren-section-label">
              <div className="ren-section-label-line" />
              <span className="ren-section-label-text">Our Renovation Process</span>
            </div>
            <h2 className="ren-section-title">How We <em>Get It Done</em></h2>
            <p className="ren-body-text" style={{ marginBottom: '32px' }}>
              A transparent, step-by-step process that keeps you informed and in control — from the first call to the final walkthrough.
            </p>
            <div className="ren-process">
              {steps.map((step) => (
                <div key={step.num} className="ren-process-item">
                  <div className="ren-process-left">
                    <div className="ren-process-num">{step.num}</div>
                    <div className="ren-process-line" />
                  </div>
                  <div className="ren-process-body">
                    <div className="ren-process-title">{step.title}</div>
                    <p className="ren-process-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="ren-img-card ren-img-card-2" style={{ marginBottom: '24px' }}>
              <div className="ren-img-card-bar" />
              <div className="ren-img-content" style={{ minHeight: '320px' }}>
                <span className="ren-img-label">Post-Renovation · Karaikudi Home</span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              {trustBadges.map((b) => (
                <div key={b.lbl} style={{ background: 'var(--white)', border: '1px solid rgba(201,168,124,0.3)', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 700, color: 'var(--brown-warm)' }}>{b.num}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>{b.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
