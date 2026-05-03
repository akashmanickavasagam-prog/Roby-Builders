import PageHeader from '../../components/shared/PageHeader';
import ContactForm from '../../components/contact/ContactForm';
import ContactInfoCard from '../../components/contact/ContactInfoCard';
import ContactMap from '../../components/contact/ContactMap';
import WhyContact from '../../components/contact/WhyContact';
import SiteVisitBanner from '../../components/contact/SiteVisitBanner';

export const metadata = {
  title: 'Contact Us — Roby Builders',
  description:
    'Get in touch with Roby Builders for your construction project in Karaikudi. Call, WhatsApp, or fill the form for a free consultation.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Get In Touch"
        title="Let's Build Your Dream Together"
        tagline="Reach out for a free consultation — we respond within 24 hours"
        bgImage="/images/contact-hero.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-5 lg:px-12 grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfoCard />
        </div>
      </section>
      <WhyContact />
      <ContactMap />
      <SiteVisitBanner />
    </>
  );
}
