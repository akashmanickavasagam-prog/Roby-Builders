import PageHeader from '../../../components/shared/PageHeader';
import InteriorOverview from '../../../components/interior-design/InteriorOverview';
import InteriorServices from '../../../components/interior-design/InteriorServices';
import InteriorProcess from '../../../components/interior-design/InteriorProcess';
import InteriorWhyUs from '../../../components/interior-design/InteriorWhyUs';
import InteriorPackages from '../../../components/interior-design/InteriorPackages';
import InteriorCTA from '../../../components/interior-design/InteriorCTA';

export const metadata = {
  title: 'Interior Design — Roby Builders',
  description:
    'Elegant interior design services in Karaikudi — residential and commercial spaces crafted to perfection. From concept boards to final furnishing, every detail curated.',
};

export default function InteriorDesignPage() {
  return (
    <>
      <PageHeader
        badge="Interior Design"
        title="Where Spaces Tell Your Story"
        tagline="Thoughtful design, timeless aesthetics, flawless execution"
        bgImage="/images/interior-hero.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Interior Design', href: '/services/interior-design' },
        ]}
        stats={[
          { value: '120+', label: 'Interiors Completed' },
          { value: '15+', label: 'Design Styles' },
          { value: '45', label: 'Day Avg Turnaround' },
          { value: '4.9★', label: 'Client Rating' },
        ]}
      />
      <InteriorOverview />
      <InteriorServices />
      <InteriorProcess />
      <InteriorWhyUs />
      <InteriorPackages />
      <InteriorCTA />
    </>
  );
}
