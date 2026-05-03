import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import WorkingSteps from '../components/home/WorkingSteps';
import FAQ from '../components/home/FAQ';
import ContactStrip from '../components/shared/ContactStrip';

export const metadata = {
  title: 'Roby Builders — Premium Construction in Karaikudi',
  description:
    'Expert residential and commercial construction services in Karaikudi, Tamil Nadu. 15+ years of experience, 200+ projects delivered.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WorkingSteps />
      <FAQ />
      <ContactStrip />
    </>
  );
}
