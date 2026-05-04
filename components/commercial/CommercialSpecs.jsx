const specs = [
  { label: 'Foundation', value: 'RCC Pile / Isolated / Raft — as per soil test report' },
  { label: 'Structure', value: 'RCC framed with Fe-500 TMT bars & M25 grade concrete' },
  { label: 'Brick Work', value: 'Solid concrete blocks / AAC blocks with cement mortar' },
  { label: 'Flooring', value: 'Vitrified tiles / Epoxy / Granite as per space requirement' },
  { label: 'Ceiling Height', value: 'Minimum 10 ft floor-to-floor for commercial compliance' },
  { label: 'Electrical', value: '3-phase supply, concealed wiring, DB boards, DG provision' },
  { label: 'Plumbing', value: 'CPVC / UPVC network with rooftop water tank & booster pump' },
  { label: 'Fire Safety', value: 'Sprinkler system, fire alarm, hose reel — NOC managed' },
  { label: 'Façade', value: 'ACP cladding / stone texture / glass curtain wall options' },
  { label: 'Lift Provision', value: 'Shaft provision with machine room — brand coordination' },
];

export default function CommercialSpecs() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="text-center mb-14">
          <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
            Built to Standard
          </p>
          <h2 className="font-playfair text-4xl font-bold text-brown-deep mb-4">
            Project Specifications
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-12 bg-sandal" />
            <span className="w-2 h-2 rounded-full bg-sandal" />
            <span className="h-px w-12 bg-sandal" />
          </div>
          <p className="font-jost text-text-muted max-w-lg mx-auto leading-relaxed">
            Every commercial project follows rigorous material and engineering standards — no shortcuts, no substitutions without client sign-off.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            {specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`grid grid-cols-5 gap-4 px-6 py-4 ${
                  i !== specs.length - 1 ? 'border-b border-sandal/10' : ''
                } ${i % 2 === 0 ? '' : 'bg-cream/60'}`}
              >
                <span className="col-span-2 font-jost text-xs text-brown-warm uppercase tracking-widest font-semibold flex items-center">
                  {spec.label}
                </span>
                <span className="col-span-3 font-jost text-sm text-text-dark leading-snug flex items-center">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-5">
            <div className="bg-brown-deep rounded-2xl p-8 text-white">
              <h3 className="font-playfair text-2xl font-bold text-sandal mb-4">Why Specifications Matter</h3>
              <p className="font-jost text-sm text-white/75 leading-relaxed mb-4">
                In commercial construction, every material choice carries regulatory, safety, and longevity implications. We issue a detailed Bill of Quantities before work begins — so you know exactly what goes into your building.
              </p>
              <p className="font-jost text-sm text-white/75 leading-relaxed">
                Any variation from the approved spec is flagged to you immediately, along with cost impact, before we proceed.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '0', label: 'Structural Defects', sub: 'In 15 years of delivery' },
                { val: '100%', label: 'Approved Materials', sub: 'ISI-marked, warranty-backed' },
              ].map((s) => (
                <div key={s.label} className="hover-bar bg-white rounded-2xl p-6 shadow-card text-center">
                  <p className="font-playfair text-3xl font-bold text-brown-warm mb-1">{s.val}</p>
                  <p className="font-playfair text-base font-semibold text-brown-deep mb-1">{s.label}</p>
                  <p className="font-jost text-xs text-text-muted">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
