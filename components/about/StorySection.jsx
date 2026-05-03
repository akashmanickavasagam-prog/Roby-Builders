export default function StorySection() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="font-jost text-xs text-brown-warm uppercase tracking-[0.2em] font-semibold mb-3">
            Our Beginning
          </p>
          <h2 className="font-playfair text-4xl font-bold text-brown-deep mb-4 leading-tight">
            A Story Built on
            <span className="block text-brown-warm italic">Passion & Purpose</span>
          </h2>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-sandal" />
            <span className="w-2 h-2 rounded-full bg-sandal" />
          </div>
          <p className="font-jost text-text-muted leading-relaxed mb-4">
            Roby Builders was founded in 2009 by Er. Roby Renesh J with a single, clear mission: to deliver construction that families can truly trust. Starting with small residential projects in Karaikudi, the firm quickly earned a reputation for uncompromising quality and genuine care for clients.
          </p>
          <p className="font-jost text-text-muted leading-relaxed mb-4">
            Over 15 years, we have grown from a team of 5 to a 50-strong force of civil engineers, architects, skilled craftsmen, and project managers — each sharing the same commitment to excellence.
          </p>
          <p className="font-jost text-text-muted leading-relaxed">
            Today, Roby Builders stands as one of Tamil Nadu&apos;s most trusted construction companies — with 200+ completed projects spanning residential villas, commercial complexes, institutional buildings, and large-scale renovations.
          </p>
        </div>

        {/* Visual */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-sandal-pale rounded-2xl p-6 flex flex-col gap-2">
            <p className="font-playfair text-5xl font-bold text-brown-deep">2009</p>
            <p className="font-jost text-sm text-text-muted">Year Founded</p>
          </div>
          <div className="bg-brown-deep rounded-2xl p-6 flex flex-col gap-2">
            <p className="font-playfair text-5xl font-bold text-sandal">200+</p>
            <p className="font-jost text-sm text-white/70">Projects Done</p>
          </div>
          <div className="bg-brown-warm rounded-2xl p-6 flex flex-col gap-2">
            <p className="font-playfair text-5xl font-bold text-sandal-light">50+</p>
            <p className="font-jost text-sm text-white/80">Team Members</p>
          </div>
          <div className="bg-sandal rounded-2xl p-6 flex flex-col gap-2">
            <p className="font-playfair text-5xl font-bold text-brown-deep">15+</p>
            <p className="font-jost text-sm text-brown-deep/70">Years of Trust</p>
          </div>
        </div>
      </div>
    </section>
  );
}
