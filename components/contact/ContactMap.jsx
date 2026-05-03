export default function ContactMap() {
  return (
    <section className="py-0">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 pb-20">
        <div className="bg-white rounded-3xl shadow-card overflow-hidden">
          <div className="p-6 border-b border-sandal/20 flex items-center gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B4E27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p className="font-jost font-semibold text-text-dark text-sm">
              12, Anna Salai, Karaikudi — Sivaganga District, Tamil Nadu 630 001
            </p>
          </div>
          <div className="relative h-80 lg:h-96 bg-sandal-pale flex items-center justify-center">
            <iframe
              title="Roby Builders Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62792.77894523486!2d78.7228!3d10.0758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfd9c1a3e05b%3A0x7a7f6a3f3c3c3c3c!2sKaraikudi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
