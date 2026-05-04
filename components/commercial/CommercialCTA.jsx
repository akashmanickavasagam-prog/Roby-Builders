import Link from 'next/link';

export default function CommercialCTA() {
  return (
    <section className="py-20 bg-brown-deep relative overflow-hidden">
      {/* Decorative ring */}
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full border border-sandal/10 pointer-events-none" />
      <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full border border-sandal/10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 lg:px-12 text-center relative z-10">
        <p className="font-jost text-xs text-sandal uppercase tracking-[0.2em] font-semibold mb-4">
          Start Your Commercial Project
        </p>
        <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to Break Ground?
        </h2>
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-px w-12 bg-sandal/40" />
          <span className="w-2 h-2 rounded-full bg-sandal" />
          <span className="h-px w-12 bg-sandal/40" />
        </div>
        <p className="font-jost text-white/70 max-w-xl mx-auto leading-relaxed mb-10">
          Share your site details and requirements — we'll come back with a feasibility assessment, indicative cost estimate, and proposed timeline, all within 48 hours.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-skew bg-sandal text-brown-deep hover:bg-white hover:text-brown-deep shadow-btn"
          >
            Request Free Assessment
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <a
            href="tel:+919876543210"
            className="btn-skew bg-white/10 border border-white/25 text-white hover:bg-white/20"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.07 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z" />
            </svg>
            Call Now
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
          {['Free Site Visit', 'No-Obligation Quote', '48h Response', 'TNRERA Registered'].map((item) => (
            <span key={item} className="flex items-center gap-2 font-jost text-xs text-white/50 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-sandal/60" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
