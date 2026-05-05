import Link from 'next/link';

export default function ConsultationHero() {
  return (
    <section
      className="relative min-h-[70vh] flex flex-col overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #2a1508 0%, #3E1F0E 40%, #6B3A20 80%, #9a6030 100%)',
      }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #C9A87C 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Body */}
      <div className="relative z-10 flex-1 flex items-center px-5 md:px-20 pt-28 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-7">
            <span className="w-10 h-px bg-sandal flex-shrink-0" />
            <span className="font-jost text-[10.5px] tracking-[0.24em] uppercase text-sandal font-medium">
              Expert Consultation Services · Karaikudi
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-playfair font-bold text-white leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(44px, 5.5vw, 72px)' }}>
            Plan Smarter.<br />
            <em className="not-italic text-sandal">Build</em> Better.
          </h1>

          {/* Tagline */}
          <p className="font-cormorant text-sandal-light tracking-[0.08em] font-light mb-6"
            style={{ fontSize: 'clamp(18px, 2.2vw, 26px)' }}>
            Expert Guidance Before the First Brick
          </p>

          {/* Description */}
          <p className="font-jost text-[15px] font-light leading-[1.9] text-[rgba(228,203,168,0.85)] max-w-[560px] mb-12">
            Make your construction or renovation project a success from day one. Our consultation
            service gives you access to Er. Roby Renesh J&apos;s engineering expertise — helping
            you plan, budget, and decide with complete confidence before any work begins.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/contact"
              className="btn-skew bg-sandal text-brown-deep hover:bg-sandal-light shadow-btn"
            >
              Book a Consultation
            </Link>
            <a
              href="tel:9791638957"
              className="btn-skew bg-transparent border border-[rgba(201,168,124,0.5)] text-white hover:bg-[rgba(201,168,124,0.1)] hover:border-sandal"
            >
              Call: +91 97916 38957
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
