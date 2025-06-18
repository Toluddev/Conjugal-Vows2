
import Navigation from '@/components/Navigation';
import PhotojournalismFooter from '@/components/PhotojournalismFooter';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-white text-black">
          <div className="max-w-5xl mx-auto">
            <h2 data-aos="fade-right"  className="font-serif text-4xl md:text-5xl text-center mb-12">ABOUT</h2>
            
            <div className="prose prose-lg mx-auto">
              <p>
              We're visual storytellers who specialize in capturing the intersection of love, style, and culture. Our approach goes beyond traditional
              wedding documentation to create cinematic experiences that reflect not just your 
              special day, but the essence of your relationship itself.<br />
              <div className="w-20 h-0.5 bg-black mt-3 mb-5"></div>
              <em>At Conjugal Vows, we believe every couple has a narrative worth celebrating. </em>
              <br />
              </p>
              <div className="w-20 h-0.5 bg-black mt-3 mb-5"></div>
              <p>
              Every couple brings their own rhythm, their own aesthetic, their own way of moving through
              the world together. We take time to understand what makes your love story distinctive.
              </p>
              
              <p>
              From our first meeting to the moment you receive your completed films, we're dedicated to 
              being present, professional, and genuinely excited about bringing your vision to life.
              </p>
              <p>
              Because at the end of the day, we're not just
               capturing your wedding. We're preserving the beginning of your forever.
              </p>
            </div>
          </div>
        </section>
      {/* Meet the Founder Section */}
      <section className="py-20 md:py-32 bg-black text-white px-6 md:px-0">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right"  className="aspect-square">
          <img 
            src="/lovable-uploads/IMG_54F2AB6023F4-1.jpeg" 
            alt="Founder of Conjugal Vows" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="md:pl-8">
          <h2 data-aos="fade-right"  className="font-serif text-4xl md:text-5xl mb-4 tracking-wide">MEET THE <br />FOUNDER</h2>
          <div className="w-20 h-0.5 bg-white mb-8"></div>
          
          <h3 data-aos="fade-left"  className="text-xl md:text-2xl mb-6 tracking-wider">TOLUWANIMI OLUDIPE</h3>
          
          <p className="text-gray-300 mb-8 leading-relaxed">
          Toluwanimi established Conjugal Vows as a creative sanctuary where authentic love stories come to life. 
          What started as a personal passion blossomed into a dedicated practice of documenting the bold,
           beautiful,<br /> and adventurous journeys that couples embark on together.
          </p>
          
          <button className="elegant-button">
            ABOUT THE TEAM
          </button>
          
          {/* <div className="mt-12">
            <p className="uppercase text-sm tracking-widest text-gray-400 mb-4">Featured In</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
              <div className="grayscale hover:grayscale-0 transition-all">
                <img src="https://via.placeholder.com/120x40" alt="People Magazine" className="max-h-8" />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all">
                <img src="https://via.placeholder.com/120x40" alt="Wedvibes" className="max-h-8" />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all">
                <img src="https://via.placeholder.com/120x40" alt="Style Me Pretty" className="max-h-8" />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all">
                <img src="https://via.placeholder.com/120x40" alt="Brides" className="max-h-8" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
      <PhotojournalismFooter />
    </div>
  );
};

export default About;
