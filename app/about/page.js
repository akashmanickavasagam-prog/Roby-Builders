import PageHeader from '../../components/shared/PageHeader';
import StorySection from '../../components/about/StorySection';
import FounderSection from '../../components/about/FounderSection';
import ValuesSection from '../../components/about/ValuesSection';
import TimelineSection from '../../components/about/TimelineSection';
import ContactStrip from '../../components/shared/ContactStrip';

export const metadata = {
  title: 'About Us — Roby Builders',
  description:
    'Learn about Roby Builders — our story, founder, values, and 15+ years of delivering quality construction in Karaikudi and Tamil Nadu.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="Our Story"
        title="Built on Trust, Crafted with Passion"
        tagline="15 years of turning visions into landmarks across Tamil Nadu"
        bgImage="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
        ]}
        stats={[
          { value: '3+', label: 'Years Experience' },
          { value: '200+', label: 'Projects Completed' },
          { value: '500+', label: 'Happy Families' },
          { value: '50+', label: 'Expert Team' },
        ]}
      />
      <StorySection />
      <FounderSection />
      <ValuesSection />
      <TimelineSection />
      <ContactStrip />
    </>
  );
}
