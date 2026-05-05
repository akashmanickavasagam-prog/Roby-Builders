import ConsultationHero from '../../../components/consultation/ConsultationHero';
import ConsultationTypes from '../../../components/consultation/ConsultationTypes';
import ConsultationProcess from '../../../components/consultation/ConsultationProcess';
import ConsultationDeliverables from '../../../components/consultation/ConsultationDeliverables';
import ConsultationPricing from '../../../components/consultation/ConsultationPricing';
import ConsultationCTA from '../../../components/consultation/ConsultationCTA';

export const metadata = {
  title: 'Consultation Services — Roby Builders',
  description:
    'Expert construction consultation in Karaikudi — new build planning, structural audits, renovation advice, cost estimation, and contractor vetting by Er. Roby Renesh J.',
};

export default function ConsultationPage() {
  return (
    <>
      <ConsultationHero />
      <ConsultationTypes />
      <ConsultationProcess />
      <ConsultationDeliverables />
      <ConsultationPricing />
      <ConsultationCTA />
    </>
  );
}
