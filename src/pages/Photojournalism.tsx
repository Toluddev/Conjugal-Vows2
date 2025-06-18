
import Navigation from '@/components/Navigation';
import ArtHeroSection from '@/components/ArtHeroSection';
import RedefiningStandardSection from '@/components/RedefiningStandardSection';
import TestimonialSection from '@/components/TestimonialSection';
import BentoPreviewSection from '@/components/BentoPreviewSection';
import TimelessLuxurySection from '@/components/TimelessLuxurySection';
import InstagramSection from '@/components/InstagramSection';
import PhotojournalismFooter from '@/components/PhotojournalismFooter';

const Photojournalism = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navigation />
      <ArtHeroSection />
      <RedefiningStandardSection />
      <TestimonialSection />
      <BentoPreviewSection />
      <TimelessLuxurySection />
      <InstagramSection />
      <PhotojournalismFooter />
    </div>
  );
};

export default Photojournalism;
