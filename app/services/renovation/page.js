import RenovationHero from '../../../components/renovation/RenovationHero';
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
      <RenovationHero />
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
