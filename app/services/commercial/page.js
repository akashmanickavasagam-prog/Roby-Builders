import PageHeader from '../../../components/shared/PageHeader';
import CommercialOverview from '../../../components/commercial/CommercialOverview';
import CommercialSectors from '../../../components/commercial/CommercialSectors';
import CommercialSpecs from '../../../components/commercial/CommercialSpecs';
import CommercialProcess from '../../../components/commercial/CommercialProcess';
import CommercialWhyUs from '../../../components/commercial/CommercialWhyUs';
import CommercialCTA from '../../../components/commercial/CommercialCTA';

export const metadata = {
  title: 'Commercial Construction — Roby Builders',
  description:
    'State-of-the-art commercial construction services in Karaikudi — offices, retail spaces, factories, hotels and more. Built for productivity and lasting impressions.',
};

export default function CommercialPage() {
  return (
    <>
      <PageHeader
        badge="Commercial Services"
        title="Spaces That Drive Business Forward"
        tagline="From ground-breaking to grand opening — built for performance"
        bgImage="/images/commercial-hero.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Commercial', href: '/services/commercial' },
        ]}
        stats={[
          { value: 'G+5', label: 'Max Floors Built' },
          { value: '50,000+', label: 'Sq Ft Delivered' },
          { value: '6', label: 'Commercial Sectors' },
          { value: '100%', label: 'On-Time Record' },
        ]}
      />
      <CommercialOverview />
      <CommercialSectors />
      <CommercialSpecs />
      <CommercialProcess />
      <CommercialWhyUs />
      <CommercialCTA />
    </>
  );
}
