import Link from 'next/link';

export default function ServiceCTA() {
  return (
    <section className="py-20 bg-brown-deep relative overflow-hidden">
      <span className="section-wm bottom-0 left-1/2 -translate-x-1/2">Build</span>

      <div className="relative z-10 max-w-3xl mx-auto px-5 lg:px-12 text-center">
        <div className="inline-flex items-center gap-2 bg-sandal/20 border border-sandal/40 rounded-full px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-sandal animate-pulse" />
          <span className="font-jost text-xs text-sandal uppercase tracking-[0.15em] font-semibold">
            Free Consultation Available
          </span>
        </div>
        <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to Build Your Dream Home?
        </h2>
        <p className="font-jost text-white/70 text-base leading-relaxed mb-8 max-w-xl mx-auto">
          Book a free consultation and get a detailed estimate within 3 working days. No obligation, no pressure — just honest advice.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/contact"
            className="btn-skew bg-sandal text-brown-deep hover:bg-white hover:text-brown-deep shadow-btn"
          >
            Get Free Estimate
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <a
            href="https://wa.me/919791638957"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-skew bg-white/10 border border-white/30 text-white hover:bg-white/20"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
