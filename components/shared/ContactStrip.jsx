import Link from 'next/link';

export default function ContactStrip() {
  return (
    <section className="bg-brown-deep py-12">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <p className="font-jost text-xs text-sandal uppercase tracking-[0.2em] font-semibold mb-2">
            Ready to Build?
          </p>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-white">
            Let&apos;s Start Your Project Today
          </h2>
          <p className="font-jost text-white/70 mt-2 text-sm">
            Free consultation · No obligation · Response within 24 hours
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-skew bg-sandal text-brown-deep hover:bg-sandal-light"
          >
            WhatsApp Us
          </a>
          <Link href="/contact" className="btn-skew bg-white/10 border border-white/30 text-white hover:bg-white/20">
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
