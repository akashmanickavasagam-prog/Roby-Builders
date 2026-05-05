import Link from 'next/link';

const packages = [
  {
    name: 'Basic',
    tagline: 'For simple queries and quick estimates',
    amount: '2,500',
    note: 'Approx. 1–2 hour site visit + basic report',
    featured: false,
    features: [
      'Site inspection by Er. Roby Renesh J',
      'Verbal findings and recommendations',
      'Rough cost estimate (email)',
      '3-day email support',
    ],
  },
  {
    name: 'Standard',
    tagline: 'For most new builds and renovations',
    amount: '5,000',
    note: 'Detailed site visit + comprehensive written report',
    featured: true,
    features: [
      'In-depth site inspection (2–3 hours)',
      'Written consultation report (6–8 pages)',
      'Itemised cost estimate with BOQ',
      'Annotated site photos',
      '7-day follow-up support',
      'Fee credited toward project if you proceed with us',
    ],
  },
  {
    name: 'Premium',
    tagline: 'For complex projects and audits',
    amount: '8,500',
    note: 'Extended analysis + advanced recommendations',
    featured: false,
    features: [
      'Extended site visit (3–4 hours)',
      'Detailed structural audit report',
      'Full BOQ review & contractor vetting',
      'Phased project plan with timelines',
      'Material selection guidance',
      '30-day follow-up support',
      'Fee credited toward project if you proceed with us',
    ],
  },
];

export default function ConsultationPricing() {
  return (
    <section className="py-24 md:py-[100px] px-5 md:px-20 bg-white">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-[18px]">
          <span className="w-10 h-px bg-sandal flex-shrink-0" />
          <span className="font-jost text-[10.5px] tracking-[0.24em] uppercase text-sandal font-semibold">
            Transparent Pricing
          </span>
          <span className="w-10 h-px bg-sandal flex-shrink-0" />
        </div>
        <h2
          className="font-playfair font-bold text-brown-deep leading-[1.15] mb-4"
          style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}
        >
          Choose Your{' '}
          <em className="not-italic text-brown-warm italic">Consultation Package</em>
        </h2>
        <p className="font-jost text-[16px] font-light leading-[1.85] text-text-muted max-w-[660px] mx-auto">
          Pay only for what you need — no hidden charges, no surprises. All packages include a site visit by Er. Roby Renesh J and a written report within 72 hours.
        </p>
      </div>

      {/* Packages */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 items-start">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`pkg-ribbon relative overflow-hidden border transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_20px_50px_rgba(62,31,14,0.12)] ${
              pkg.featured
                ? 'bg-sandal-pale border-sandal shadow-[0_12px_40px_rgba(201,168,124,0.15)] -translate-y-2'
                : 'bg-cream border-[rgba(201,168,124,0.2)]'
            }`}
            style={{ padding: '44px 36px' }}
          >
            {!pkg.featured && <div className="pkg-ribbon-hidden" />}

            <h3 className="font-playfair text-[26px] font-bold text-brown-deep mb-2.5">{pkg.name}</h3>
            <p className="font-jost text-[13px] font-light text-text-muted mb-6">{pkg.tagline}</p>

            {/* Price */}
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="font-jost text-[20px] font-semibold text-brown-mid">₹</span>
              <span className="font-playfair text-[48px] font-bold text-brown-deep leading-none">{pkg.amount}</span>
            </div>
            <p className="font-jost text-[11px] font-light text-text-muted mb-7">{pkg.note}</p>

            {/* Features */}
            <ul className="flex flex-col gap-[13px] mb-8">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 font-jost text-[13px] font-light text-text-dark leading-[1.65]">
                  <span className="w-1.5 h-1.5 flex-shrink-0 bg-sandal mt-[7px]" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Button */}
            <Link
              href="/contact"
              className="btn-skew btn-skew-sm bg-sandal text-brown-deep hover:bg-sandal-light block text-center justify-center"
            >
              Book This Package
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
