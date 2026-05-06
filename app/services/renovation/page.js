import PageHeader from '../../../components/shared/PageHeader';
import RenovationIntro from '../../../components/renovation/RenovationIntro';
import RenovationServices from '../../../components/renovation/RenovationServices';
import RenovationGallery from '../../../components/renovation/RenovationGallery';
import RenovationProcess from '../../../components/renovation/RenovationProcess';
import RenovationPackages from '../../../components/renovation/RenovationPackages';
import RenovationTestimonials from '../../../components/renovation/RenovationTestimonials';
import RenovationCTA from '../../../components/renovation/RenovationCTA';

export const metadata = {
  title: 'Renovation & Remodeling Services — Roby Builders',
  description:
    'Expert home renovation services in Karaikudi — kitchen, bathroom, flooring, exterior elevation, waterproofing and full-home renovation by Er. Roby Renesh J.',
};

export default function RenovationPage() {
  return (
    <div className="ren-page-bg">
      <PageHeader
        badge="Renovation Services"
        title="Renovation & Remodeling Services"
        tagline="Breathe new life into your existing space — trusted by 150+ happy homeowners across Karaikudi"
        bgImage="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1600&q=80"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Renovation', href: '/services/renovation' },
        ]}
        stats={[
          { value: '150+', label: 'Renovations Done' },
          { value: '15+', label: 'Years Experience' },
          { value: '100%', label: 'Satisfaction' },
          { value: '45 Days', label: 'Avg Delivery' },
        ]}
      />
      <RenovationIntro />
      <RenovationServices />
      <RenovationGallery />
      <RenovationProcess />
      <RenovationPackages />
      <RenovationTestimonials />
      <RenovationCTA />
    </div>
  );
}
