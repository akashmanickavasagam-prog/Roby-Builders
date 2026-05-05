export default function RenovationCTA() {
  return (
    <>
      <div className="ren-cta-strip">
        <div className="ren-cta-inner">
          <div>
            <h3 className="ren-cta-title">Ready to <em>Transform Your Home?</em></h3>
            <p className="ren-cta-sub">Free site inspection · Detailed estimate in 48 hours · Fixed price contract · 1-year warranty</p>
          </div>
          <div className="ren-cta-actions">
            <a href="tel:9791638957" className="ren-cta-btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '15px', height: '15px' }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.07 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 8 8l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call: +91 97916 38957
            </a>
            <a
              href="https://wa.me/919791638957?text=Hi%20Roby%20Builders%2C%20I%27d%20like%20a%20renovation%20estimate."
              target="_blank"
              rel="noopener noreferrer"
              className="ren-cta-btn-outline"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>

      <div className="ren-contact-strip">
        <div className="ren-ci">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
          </svg>
          <span><strong>Er. Roby Renesh J</strong> — B.E. Civil Engineering</span>
        </div>
        <div className="ren-ci">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.07 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 8 8l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span><strong>+91 97916 38957</strong></span>
        </div>
        <div className="ren-ci">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
          </svg>
          <span><strong>robybuilders@gmail.com</strong></span>
        </div>
      </div>
    </>
  );
}
