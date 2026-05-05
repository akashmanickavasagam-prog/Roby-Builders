import Link from 'next/link';

const CheckSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function RenovationPackages() {
  return (
    <div className="ren-wrap">
      <div className="ren-section">
        <div className="ren-section-label" style={{ justifyContent: 'center' }}>
          <div className="ren-section-label-line" />
          <span className="ren-section-label-text">Pricing Packages</span>
          <div className="ren-section-label-line" />
        </div>
        <h2 className="ren-section-title" style={{ textAlign: 'center' }}>Renovation <em>Packages</em></h2>
        <p style={{ textAlign: 'center', fontSize: '14px', fontWeight: 300, color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto 0' }}>
          Starting prices for common renovation scopes. Final pricing depends on room size, materials selected, and extent of work. Free site visit and exact estimate provided before any commitment.
        </p>
        <div className="ren-packages">

          <div className="ren-pkg">
            <div className="ren-pkg-top-bar" />
            <div className="ren-pkg-name">Essential</div>
            <div className="ren-pkg-price"><strong>₹450</strong> / sq.ft onwards</div>
            <ul className="ren-pkg-list">
              <li><CheckSVG />Interior wall replastering & paint</li>
              <li><CheckSVG />Floor tile replacement (standard grade)</li>
              <li><CheckSVG />Basic electrical point upgrades</li>
              <li><CheckSVG />Door & window repainting</li>
              <li><CheckSVG />Site cleaning & handover</li>
            </ul>
            <Link href="/contact" className="ren-pkg-cta">Get Estimate</Link>
          </div>

          <div className="ren-pkg featured">
            <div className="ren-pkg-badge">Most Popular</div>
            <div className="ren-pkg-top-bar" />
            <div className="ren-pkg-name">Comfort</div>
            <div className="ren-pkg-price"><strong>₹750</strong> / sq.ft onwards</div>
            <ul className="ren-pkg-list">
              <li><CheckSVG />Everything in Essential</li>
              <li><CheckSVG />Premium tile (vitrified / granite)</li>
              <li><CheckSVG />Full bathroom renovation</li>
              <li><CheckSVG />Kitchen tile work & counter upgrade</li>
              <li><CheckSVG />False ceiling in 1–2 rooms</li>
              <li><CheckSVG />Waterproofing where required</li>
            </ul>
            <Link href="/contact" className="ren-pkg-cta">Get Estimate</Link>
          </div>

          <div className="ren-pkg">
            <div className="ren-pkg-top-bar" />
            <div className="ren-pkg-name">Premium</div>
            <div className="ren-pkg-price"><strong>₹1,100</strong> / sq.ft onwards</div>
            <ul className="ren-pkg-list">
              <li><CheckSVG />Everything in Comfort</li>
              <li><CheckSVG />Full room-by-room renovation</li>
              <li><CheckSVG />Built-in wardrobes & TV units</li>
              <li><CheckSVG />Modular kitchen</li>
              <li><CheckSVG />Exterior elevation upgrade</li>
              <li><CheckSVG />Premium sanitary ware & fixtures</li>
            </ul>
            <Link href="/contact" className="ren-pkg-cta">Get Estimate</Link>
          </div>

        </div>
        <p style={{ textAlign: 'center', fontSize: '12.5px', color: 'var(--text-muted)', marginTop: '22px', fontStyle: 'italic' }}>
          * All prices are indicative. Final cost provided after free site inspection. GST applicable as per norms.
        </p>
      </div>
    </div>
  );
}
