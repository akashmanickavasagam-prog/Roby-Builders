import Link from 'next/link';

export default function ConsultationCTA() {
  return (
    <section
      className="py-16 md:py-[64px] px-5 md:px-20 text-center"
      style={{
        background: 'linear-gradient(135deg, #3E1F0E 0%, #6B3A20 100%)',
      }}
    >
      <h2
        className="font-playfair font-bold text-white leading-[1.2] mb-4"
        style={{ fontSize: 'clamp(28px, 3.8vw, 46px)' }}
      >
        Not Sure Which Package{' '}
        <em className="not-italic text-sandal italic">Is Right?</em>
      </h2>
      <p className="font-jost text-[15px] font-light leading-[1.85] text-white/75 max-w-[620px] mx-auto mb-9">
        Call us and describe your project in 2 minutes — we&apos;ll tell you exactly which consultation makes sense and what you&apos;ll walk away with.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-[18px]">
        <a
          href="tel:9791638957"
          className="btn-skew bg-sandal text-brown-deep hover:bg-sandal-light shadow-btn"
        >
          Call: +91 97916 38957
        </a>
        <Link
          href="/contact"
          className="btn-skew bg-transparent border border-[rgba(255,255,255,0.4)] text-white hover:bg-[rgba(255,255,255,0.08)] hover:border-sandal"
        >
          Send Enquiry
        </Link>
      </div>
    </section>
  );
}
