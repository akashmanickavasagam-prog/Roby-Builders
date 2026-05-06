'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'How long does it take to build a house?',
    a: 'Construction timelines depend on the size and type of project. A standard 1,200 sq ft ground floor home typically takes 8–10 months. Larger villas or multi-storey buildings may take 14–18 months. We provide a detailed schedule at the start of your project and share weekly progress updates.',
  },
  {
    q: 'What is included in your construction quote?',
    a: 'Our quotes include a complete Bill of Quantities (BOQ) covering materials, labour, equipment, and project management. We also outline payment milestones so there are zero surprises. Items like interior design, landscaping, and compound wall can be included as add-ons.',
  },
  {
    q: 'Do you handle government approvals and permits?',
    a: 'Yes, we manage the complete approval process — building plan sanction, structural engineer certificates, TNEB connections, and occupancy certificates. Our team is well-versed with local regulations in Karaikudi and across Tamil Nadu.',
  },
  {
    q: 'What warranty do you provide?',
    a: 'We offer a 2-year structural warranty on all our constructions. This covers any structural defects, water seepage through roof or walls, and plumbing issues. We also provide a 1-year warranty on electrical and other installations.',
  },
  {
    q: 'Can I see ongoing projects before deciding?',
    a: 'Absolutely. We welcome site visits to our ongoing and completed projects. This gives you a first-hand look at our construction quality, material standards, and workmanship. Contact us to schedule a supervised visit.',
  },
  {
    q: 'Do you work outside Karaikudi?',
    a: 'Yes, Roby Builders operates across Tamil Nadu with active projects in Sivaganga, Madurai, Trichy, and Chennai. Outstation projects include a small mobilisation charge depending on distance.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-24 bg-sandal-pale relative overflow-hidden">
      <span className="section-wm bottom-8 left-0">FAQ</span>

      <div className="max-w-4xl mx-auto px-5 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
            Have Questions?
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-deep mb-4">
            Frequently Asked
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-sandal" />
            <span className="w-2 h-2 rounded-full bg-sandal" />
            <span className="h-px w-12 bg-sandal" />
          </div>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item bg-white rounded-xl shadow-card overflow-hidden ${
                openIndex === i ? 'faq-open' : ''
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-jost font-semibold text-text-dark text-base leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`faq-icon-wrap flex-shrink-0 transition-colors ${
                    openIndex === i ? 'text-brown-warm' : 'text-text-muted'
                  }`}
                />
              </button>
              <div className="faq-answer">
                <p className="font-jost text-text-muted text-sm leading-relaxed px-6 pb-5">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="font-jost text-text-muted mb-4">Still have questions?</p>
          <a
            href="https://wa.me/919791638957"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-skew bg-brown-deep text-white hover:bg-brown-warm inline-flex"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
