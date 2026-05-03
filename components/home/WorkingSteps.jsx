'use client';

import { useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    short: 'Consultation',
    desc: 'We begin with a detailed discussion to understand your vision, requirements, budget, and timeline. Our expert team listens carefully to ensure every detail is captured.',
    points: [
      'Free 1-hour site or office meeting',
      'Requirements assessment & vision mapping',
      'Preliminary budget discussion',
      'Project feasibility analysis',
    ],
    icon: '💬',
  },
  {
    number: '02',
    title: 'Design & Planning',
    short: 'Design',
    desc: 'Our architects and civil engineers translate your vision into detailed blueprints, 3D renders, and project plans that meet all regulatory requirements.',
    points: [
      'Architectural drawings & 3D visualisation',
      'Structural engineering plans',
      'Government approvals & permits',
      'Material specifications list',
    ],
    icon: '📐',
  },
  {
    number: '03',
    title: 'Cost Estimation',
    short: 'Estimation',
    desc: 'Transparent, itemised cost estimates with no hidden charges. We provide detailed BOQ (Bill of Quantities) so you know exactly what every rupee buys.',
    points: [
      'Detailed Bill of Quantities (BOQ)',
      'Material & labour cost breakdown',
      'Payment milestone schedule',
      'Contingency planning',
    ],
    icon: '📊',
  },
  {
    number: '04',
    title: 'Construction',
    short: 'Build',
    desc: 'Our skilled workforce and quality-first approach ensure every phase of construction meets the highest standards — from foundation to roofing.',
    points: [
      'Weekly progress reports & photos',
      'Quality checks at every stage',
      'Premium materials from trusted suppliers',
      'Dedicated site supervisor assigned',
    ],
    icon: '🏗️',
  },
  {
    number: '05',
    title: 'Quality Inspection',
    short: 'Inspection',
    desc: 'Before handover, every inch of the structure undergoes rigorous quality inspection by our senior engineers and an independent third-party QC team.',
    points: [
      '50-point quality checklist',
      'Structural integrity testing',
      'Finishing & fitment audit',
      'Snag list resolution',
    ],
    icon: '🔍',
  },
  {
    number: '06',
    title: 'Handover & Support',
    short: 'Handover',
    desc: 'We hand over a move-in-ready space with complete documentation and provide 2-year post-construction support for complete peace of mind.',
    points: [
      'Full documentation package',
      'As-built drawings provided',
      '2-year structural warranty',
      '24/7 post-handover helpline',
    ],
    icon: '🔑',
  },
];

export default function WorkingSteps() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <span className="section-wm top-8 right-0">Process</span>

      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
            How We Work
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-deep mb-4">
            Our Working Process
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-12 bg-sandal" />
            <span className="w-2 h-2 rounded-full bg-sandal" />
            <span className="h-px w-12 bg-sandal" />
          </div>
          <p className="font-jost text-text-muted max-w-xl mx-auto leading-relaxed">
            A transparent, proven 6-step process that takes your project from idea to keys-in-hand.
          </p>
        </div>

        {/* Tab strip */}
        <div className="flex flex-wrap justify-center gap-1 mb-12 bg-cream rounded-2xl p-2">
          {steps.map((s, i) => (
            <button
              key={s.number}
              onClick={() => setActive(i)}
              className={`step-indicator flex items-center gap-2 px-4 py-2.5 rounded-xl font-jost text-sm font-medium transition-all ${
                i === active
                  ? 'active bg-brown-deep text-white shadow-card'
                  : 'text-text-muted hover:text-brown-warm hover:bg-white'
              }`}
            >
              <span className={`font-playfair font-bold text-xs ${i === active ? 'text-sandal' : ''}`}>
                {s.number}
              </span>
              <span className="max-sm:hidden">{s.short}</span>
            </button>
          ))}
        </div>

        {/* Active step content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-sandal-pale flex items-center justify-center text-3xl">
                {step.icon}
              </div>
              <div>
                <p className="font-jost text-xs text-brown-warm uppercase tracking-widest font-semibold">
                  Step {step.number}
                </p>
                <h3 className="font-playfair text-2xl font-bold text-brown-deep">{step.title}</h3>
              </div>
            </div>
            <p className="font-jost text-text-muted leading-relaxed mb-6">{step.desc}</p>
            <ul className="flex flex-col gap-3">
              {step.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-sandal/20 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#8B4E27" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="font-jost text-sm text-text-dark">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual side */}
          <div className="relative">
            <div className="bg-sandal-pale rounded-3xl p-8 relative overflow-hidden">
              <span className="absolute top-4 right-4 font-playfair text-8xl font-bold text-sandal/15 leading-none select-none">
                {step.number}
              </span>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {steps.map((s, i) => (
                  <button
                    key={s.number}
                    onClick={() => setActive(i)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all text-center ${
                      i === active
                        ? 'bg-brown-deep text-white shadow-card'
                        : 'bg-white hover:bg-sandal-light/50 text-text-muted'
                    }`}
                  >
                    <span className="text-2xl">{s.icon}</span>
                    <span className={`font-jost text-xs font-semibold ${i === active ? 'text-sandal' : ''}`}>
                      {s.short}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
