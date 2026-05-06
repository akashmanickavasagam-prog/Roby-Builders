import Link from 'next/link';

export default function PageHeader({ badge, title, tagline, bgImage, breadcrumbs = [], stats = [] }) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: bgImage ? `url('${bgImage}')` : 'none',
          backgroundColor: '#3E1F0E',
          filter: bgImage ? 'brightness(0.55) saturate(0.7)' : undefined,
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(62,31,14,0.82) 0%, rgba(62,31,14,0.62) 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-12">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {i < breadcrumbs.length - 1 ? (
                  <>
                    <Link
                      href={crumb.href}
                      className="font-jost text-xs text-white/60 hover:text-sandal transition-colors uppercase tracking-widest"
                    >
                      {crumb.label}
                    </Link>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white/30">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </>
                ) : (
                  <span className="font-jost text-xs text-sandal uppercase tracking-widest">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 bg-sandal/20 border border-sandal/40 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-sandal" />
            <span className="font-jost text-xs text-sandal uppercase tracking-[0.15em] font-semibold">{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="font-playfair text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 max-w-3xl">
          {title}
        </h1>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-12 bg-sandal" />
          <span className="w-2 h-2 rounded-full bg-sandal" />
          <span className="h-px w-8 bg-sandal/50" />
        </div>

        {/* Tagline */}
        {tagline && (
          <p className="font-cormorant text-xl text-sandal-light italic max-w-2xl">{tagline}</p>
        )}

        {/* Stats */}
        {stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-10 border-t border-white/15">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-playfair text-3xl font-bold text-sandal">{s.value}</p>
                <p className="font-jost text-xs text-white/60 uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
