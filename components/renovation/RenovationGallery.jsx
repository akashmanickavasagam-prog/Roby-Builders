export default function RenovationGallery() {
  return (
    <div className="ren-wrap">
      <div className="ren-section">
        <div className="ren-section-label" style={{ justifyContent: 'center' }}>
          <div className="ren-section-label-line" />
          <span className="ren-section-label-text">Our Work</span>
          <div className="ren-section-label-line" />
        </div>
        <h2 className="ren-section-title" style={{ textAlign: 'center' }}>Renovation <em>Gallery</em></h2>
        <p style={{ textAlign: 'center', fontSize: '14px', fontWeight: 300, color: 'var(--text-muted)', marginBottom: 0 }}>
          Completed renovation projects across Karaikudi and Sivaganga district.
        </p>
        <div className="ren-gallery">
          <div className="ren-gallery-item large">
            <img src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=900&q=80" alt="Kitchen renovation Karaikudi" loading="lazy" />
            <div className="ren-gallery-overlay" />
            <div className="ren-gallery-caption">Kitchen · Full Renovation</div>
          </div>
          <div className="ren-gallery-item">
            <img src="https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&q=80" alt="Bathroom renovation" loading="lazy" />
            <div className="ren-gallery-overlay" />
            <div className="ren-gallery-caption">Bathroom · Complete Overhaul</div>
          </div>
          <div className="ren-gallery-item">
            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80" alt="Living room interior" loading="lazy" />
            <div className="ren-gallery-overlay" />
            <div className="ren-gallery-caption">Living Room · Full Renovation</div>
          </div>
          <div className="ren-gallery-item">
            <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" alt="Kitchen interior" loading="lazy" />
            <div className="ren-gallery-overlay" />
            <div className="ren-gallery-caption">Kitchen · Modular Design</div>
          </div>
          <div className="ren-gallery-item large">
            <img src="https://images.unsplash.com/photo-1615873968403-89e068629265?w=900&q=80" alt="Full home renovation" loading="lazy" />
            <div className="ren-gallery-overlay" />
            <div className="ren-gallery-caption">Full Home · Karaikudi</div>
          </div>
          <div className="ren-gallery-item">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80" alt="Exterior elevation" loading="lazy" />
            <div className="ren-gallery-overlay" />
            <div className="ren-gallery-caption">Exterior · Elevation Upgrade</div>
          </div>
          <div className="ren-gallery-item">
            <img src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80" alt="Bedroom renovation" loading="lazy" />
            <div className="ren-gallery-overlay" />
            <div className="ren-gallery-caption">Bedroom · Wardrobe & Ceiling</div>
          </div>
          <div className="ren-gallery-item">
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80" alt="Terrace waterproofing" loading="lazy" />
            <div className="ren-gallery-overlay" />
            <div className="ren-gallery-caption">Terrace · Waterproofing</div>
          </div>
        </div>
      </div>
    </div>
  );
}
