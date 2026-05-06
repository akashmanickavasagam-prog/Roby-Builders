import PageHeader from '../../../components/shared/PageHeader';
import ServiceOverview from '../../../components/residential/ServiceOverview';
import ServiceTypes from '../../../components/residential/ServiceTypes';
import ServiceProcess from '../../../components/residential/ServiceProcess';
import ServiceWhyUs from '../../../components/residential/ServiceWhyUs';
import ServiceCTA from '../../../components/residential/ServiceCTA';

export const metadata = {
  title: 'Residential Construction — Roby Builders',
  description:
    'Premium residential construction services in Karaikudi — villas, independent houses, apartments and more. Custom designs with quality craftsmanship.',
};

export default function ResidentialPage() {
  return (
    <>
      <PageHeader
        badge="Residential Services"
        title="Building Homes, Creating Memories"
        tagline="From foundation to finishing — every detail crafted with care"
        bgImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Residential', href: '/services/residential' },
        ]}
      />
      <ServiceOverview />
      <ServiceTypes />
      <ServiceProcess />
      <ServiceWhyUs />
      <ServiceCTA />
    </>
  );
}
