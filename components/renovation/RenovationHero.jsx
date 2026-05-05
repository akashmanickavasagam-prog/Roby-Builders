import Link from 'next/link';

export default function RenovationHero() {
  return (
    <>
      <div className="ren-header">
        <div className="ren-header-bg" />
        <div className="ren-header-pattern" />
        <div className="ren-header-inner">
          <div className="ren-header-left">
            <div className="ren-header-badge">
              <div className="badge-line" />
              <span className="badge-text">Service · Karaikudi</span>
            </div>
            <h1 className="ren-header-h1">
              Renovation &amp;<br /><em>Remodeling Services</em>
            </h1>
            <p className="ren-header-sub">
              Breathe new life into your existing space — from kitchen facelifts and bathroom overhauls to full-floor remodeling and terrace waterproofing. Trusted by 150+ happy homeowners across Karaikudi.
            </p>
            <div className="ren-header-ctas">
              <Link href="/contact" className="ren-header-btn-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '14px', height: '14px' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.07 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 8 8l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Get Free Estimate
              </Link>
              <a
                href="https://wa.me/919791638957?text=Hi%20Roby%20Builders%2C%20I%27d%20like%20to%20enquire%20about%20renovation%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="ren-header-btn-outline"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="ren-header-right">
            <div className="ren-stat-box">
              <span className="ren-stat-num">150+</span>
              <span className="ren-stat-lbl">Renovations Done</span>
            </div>
            <div className="ren-stat-box">
              <span className="ren-stat-num">15+</span>
              <span className="ren-stat-lbl">Years Experience</span>
            </div>
            <div className="ren-stat-box">
              <span className="ren-stat-num">100%</span>
              <span className="ren-stat-lbl">Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ren-breadcrumb">
        <Link href="/">Home</Link>
        <span className="ren-breadcrumb-sep">›</span>
        <span>Services</span>
        <span className="ren-breadcrumb-sep">›</span>
        <span className="ren-breadcrumb-current">Renovation</span>
      </div>
    </>
  );
}
