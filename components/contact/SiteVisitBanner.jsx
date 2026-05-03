export default function SiteVisitBanner() {
  return (
    <section className="py-16 bg-sandal-pale">
      <div className="max-w-5xl mx-auto px-5 lg:px-12 text-center">
        <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
          See Before You Decide
        </p>
        <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-brown-deep mb-4">
          Schedule a Free Site Visit
        </h2>
        <p className="font-jost text-text-muted max-w-xl mx-auto leading-relaxed mb-8">
          We invite you to visit our ongoing construction sites and completed projects. See our
          quality first-hand before making any decision.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="tel:+919876543210"
            className="btn-skew bg-brown-deep text-white hover:bg-brown-warm inline-flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.07 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z" />
            </svg>
            Call to Book Visit
          </a>
          <a
            href="https://wa.me/919876543210?text=Hi%20Roby%20Builders%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-skew bg-sandal text-brown-deep hover:bg-brown-warm hover:text-white inline-flex items-center gap-2"
          >
            WhatsApp for Visit
          </a>
        </div>
      </div>
    </section>
  );
}
