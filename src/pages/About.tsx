
import Navigation from '@/components/Navigation';
import PhotojournalismFooter from '@/components/PhotojournalismFooter';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-16">
              ABOUT
            </h1>
            
            <div className="text-left space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                We're visual storytellers who specialize in capturing the intersection of love, style, and culture. Our approach goes beyond traditional 
                wedding documentation to create cinematic experiences that reflect not just your special day, but the essence of your relationship 
                itself.
              </p>
              
              <div className="w-16 h-0.5 bg-gray-900"></div>
              
              <p className="text-lg text-gray-700 leading-relaxed italic">
                At Conjugal Vows, we believe every couple has a narrative worth celebrating.
              </p>
              
              <div className="w-16 h-0.5 bg-gray-900"></div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Every couple brings their own rhythm, their own aesthetic, their own way of moving through the world together. We take time to 
                understand what makes your love story distinctive.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                From our first meeting to the moment you receive your completed films, we're dedicated to being present, professional, and genuinely 
                excited about bringing your vision to life.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Because at the end of the day, we're not just capturing your wedding. We're preserving the beginning of your forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="/lovable-uploads/0387de82-8f1e-4f9c-8ca5-4fbf126adfe4.png"
                  alt="Founder Toluwanimi Oludipe"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                MEET THE
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold mb-8">
                FOUNDER
              </h3>
              
              <div className="w-16 h-0.5 bg-white mb-8"></div>
              
              <h4 className="text-2xl font-bold mb-8">
                TOLUWANIMI OLUDIPE
              </h4>
              
              <p className="text-lg leading-relaxed mb-8">
                Toluwanimi established Conjugal Vows as a creative sanctuary where 
                authentic love stories come to life. What started as a personal passion 
                blossomed into a dedicated practice of documenting the bold, beautiful, 
                and adventurous journeys that couples embark on together.
              </p>
              
              <Button 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-none font-medium transition-all duration-300"
              >
                ABOUT THE TEAM
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PhotojournalismFooter />
    </div>
  );
};

export default About;
