const contactDetails = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.07 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 97916 38957',
    sub: 'Mon–Sat · 9 AM – 7 PM',
    href: 'tel:+919791638957',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '+91 97916 38957',
    sub: 'Quick response guaranteed',
    href: 'https://wa.me/919791638957',
    external: true,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'robybuilders@gmail.com',
    sub: 'Replies within 24 hours',
    href: 'mailto:robybuilders@gmail.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Office Address',
    value: '12, Anna Salai, Karaikudi',
    sub: 'Sivaganga District — 630 001',
    href: 'https://maps.google.com/?q=Karaikudi',
    external: true,
  },
];

const hours = [
  { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 5:00 PM' },
  { day: 'Sunday', time: 'By Appointment' },
];

export default function ContactInfoCard() {
  return (
    <div className="flex flex-col gap-6">
      {/* Contact details */}
      <div className="bg-brown-deep rounded-3xl p-8">
        <h2 className="font-playfair text-2xl font-bold text-white mb-6">Contact Information</h2>
        <div className="flex flex-col gap-5">
          {contactDetails.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-sandal flex-shrink-0 group-hover:bg-sandal group-hover:text-brown-deep transition-all">
                {item.icon}
              </div>
              <div>
                <p className="font-jost text-xs text-white/50 uppercase tracking-widest mb-0.5">{item.label}</p>
                <p className="font-jost font-semibold text-white group-hover:text-sandal transition-colors">{item.value}</p>
                <p className="font-jost text-xs text-white/50">{item.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Business hours */}
      <div className="bg-white rounded-3xl shadow-card p-8">
        <h3 className="font-playfair text-xl font-bold text-brown-deep mb-4">Business Hours</h3>
        <div className="flex flex-col gap-3">
          {hours.map((h) => (
            <div key={h.day} className="flex justify-between items-center py-2 border-b border-sandal/20 last:border-0">
              <span className="font-jost text-sm text-text-dark">{h.day}</span>
              <span className="font-jost text-sm font-semibold text-brown-warm">{h.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
