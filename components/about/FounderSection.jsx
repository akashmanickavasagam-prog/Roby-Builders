export default function FounderSection() {
  const credentials = [
    'B.E. Civil Engineering — Anna University',
    'Licensed Contractor — Tamil Nadu PWD',
    'Member, Institution of Engineers (India)',
    'ISO 9001:2015 Certified Project Manager',
    '15+ Years Field Experience',
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="bg-sandal-pale rounded-3xl overflow-hidden grid lg:grid-cols-2 gap-0">
          {/* Image placeholder */}
          <div className="bg-gradient-to-br from-brown-deep to-brown-warm min-h-[400px] flex flex-col items-center justify-center p-12 relative overflow-hidden">
            <span className="absolute text-[180px] font-playfair font-bold text-white/5 leading-none select-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              R
            </span>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full bg-sandal/30 flex items-center justify-center mb-4 border-4 border-sandal/40">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C9A87C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <p className="font-playfair text-2xl font-bold text-white mb-1">Er. Roby Renesh J</p>
              <p className="font-jost text-sm text-sandal-light">Founder & Managing Director</p>
              <p className="font-jost text-xs text-white/50 mt-1 uppercase tracking-widest">B.E. Civil Engineering</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-10 lg:p-12">
            <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
              Meet The Founder
            </p>
            <h2 className="font-playfair text-3xl font-bold text-brown-deep mb-4">
              The Vision Behind Every Build
            </h2>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-sandal" />
              <span className="w-1.5 h-1.5 rounded-full bg-sandal" />
            </div>
            <p className="font-jost text-text-muted leading-relaxed mb-5">
              &quot;I started Roby Builders because I believed the people of Tamil Nadu deserved better — construction that doesn&apos;t cut corners, timelines that are actually met, and a builder who treats your home as if it were his own.&quot;
            </p>
            <p className="font-jost text-text-muted leading-relaxed mb-6 text-sm">
              With 15 years of hands-on experience managing projects from Karaikudi to Chennai, Er. Roby brings a rare combination of technical precision and personal accountability to every project. He is present on-site every week and personally reviews quality at every major milestone.
            </p>
            <ul className="flex flex-col gap-2">
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full bg-sandal/25 flex items-center justify-center flex-shrink-0">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#8B4E27" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="font-jost text-sm text-text-dark">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
