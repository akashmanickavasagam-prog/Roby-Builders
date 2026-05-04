const packages = [
  {
    name: 'Essential',
    price: '₹450',
    unit: 'per sq ft',
    tag: 'Best Value',
    tagColor: 'bg-sandal/20 text-brown-warm',
    accent: false,
    features: [
      'Modular kitchen (12 shutters)',
      'Wardrobes — 2 bedrooms',
      'False ceiling — living & master',
      'Modular switches & light points',
      'Plumbing fixtures — standard grade',
      '2-coat interior emulsion',
      'Basic décor consultation',
      '6-month workmanship warranty',
    ],
    cta: 'Get a Quote',
  },
  {
    name: 'Premium',
    price: '₹750',
    unit: 'per sq ft',
    tag: 'Most Popular',
    tagColor: 'bg-sandal text-brown-deep',
    accent: true,
    features: [
      'Modular kitchen — full suite',
      'Walk-in wardrobe with fittings',
      'False ceiling — all rooms',
      'Feature wall — living & master',
      'Lighting design with dimmers',
      'Premium plumbing fixtures',
      'Texture / wallpaper finishes',
      '3D render for all rooms',
      '12-month workmanship warranty',
    ],
    cta: 'Get a Quote',
  },
  {
    name: 'Bespoke',
    price: 'Custom',
    unit: 'fully tailored',
    tag: 'Luxury',
    tagColor: 'bg-brown-warm/20 text-brown-warm',
    accent: false,
    features: [
      'Fully custom design brief',
      'Italian / imported materials',
      'Smart home integration',
      'Landscape & outdoor design',
      'Curated art & décor sourcing',
      'Dedicated project architect',
      'White-glove move-in styling',
      '2-year comprehensive warranty',
    ],
    cta: 'Book Consultation',
  },
];

export default function InteriorPackages() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <span className="section-wm top-8 left-1/2 -translate-x-1/2">Packages</span>

      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
        <div className="text-center mb-14">
          <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
            Pricing & Packages
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-deep mb-4">
            Choose Your Package
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-12 bg-sandal" />
            <span className="w-2 h-2 rounded-full bg-sandal" />
            <span className="h-px w-12 bg-sandal" />
          </div>
          <p className="font-jost text-text-muted max-w-lg mx-auto leading-relaxed">
            Transparent pricing with no hidden extras. Every package includes design, supply, and installation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-7 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                pkg.accent
                  ? 'bg-brown-deep shadow-card-hover'
                  : 'bg-white shadow-card hover:shadow-card-hover'
              }`}
            >
              {/* Tag */}
              <div className="px-7 pt-7 pb-5">
                <span className={`inline-block font-jost text-xs uppercase tracking-widest px-3 py-1 rounded-full font-semibold mb-4 ${pkg.tagColor}`}>
                  {pkg.tag}
                </span>
                <h3 className={`font-playfair text-2xl font-bold mb-1 ${pkg.accent ? 'text-white' : 'text-brown-deep'}`}>
                  {pkg.name}
                </h3>
                <div className="flex items-end gap-1.5 mb-5">
                  <span className={`font-playfair text-4xl font-bold ${pkg.accent ? 'text-sandal' : 'text-brown-warm'}`}>
                    {pkg.price}
                  </span>
                  <span className={`font-jost text-xs mb-2 ${pkg.accent ? 'text-white/50' : 'text-text-muted'} uppercase tracking-widest`}>
                    {pkg.unit}
                  </span>
                </div>
                <div className={`h-px mb-5 ${pkg.accent ? 'bg-white/10' : 'bg-sandal/15'}`} />

                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg
                        className={`shrink-0 mt-0.5 ${pkg.accent ? 'text-sandal' : 'text-brown-warm'}`}
                        width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className={`font-jost text-sm leading-snug ${pkg.accent ? 'text-white/80' : 'text-text-muted'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto px-7 pb-7">
                <a
                  href="/contact"
                  className={`block w-full text-center font-jost text-sm font-semibold py-3.5 rounded-xl transition-all duration-200 ${
                    pkg.accent
                      ? 'bg-sandal text-brown-deep hover:bg-white'
                      : 'bg-brown-deep text-white hover:bg-brown-warm'
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-jost text-xs text-text-muted mt-8">
          All prices are indicative. Final quote based on exact scope, material selection, and site conditions.
        </p>
      </div>
    </section>
  );
}
