
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import bgvideo from '/lovable-uploads/bgvideo.mp4'

const VideoIntroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
         <source src={bgvideo} type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-black"></div>
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-6">
        {/* Title */}
        <p data-aos="fade-down" className="italic-script mb-2">ESTD 2025</p>
        <h1 
            data-aos="fade-right" 
            className="font-serif text-white font-light tracking-wider mb-6 text-5xl sm:text-6xl md:text-8xl lg:text-8xl' "
          >
            CONJUGAL <br /> VOWS
        </h1>
        <h2 data-aos="fade-up"  className="elegant-heading text-xl md:text-2xl mb-4">Luxury, Intimate Destination Wedding Films</h2>
        
        <p data-aos="fade-up"  className=" font-serif text-gray-200 text-sm md:text-base tracking-wider uppercase mb-8 max-w-2xl mx-auto">
          DOCUMENTING LOVE STORIES <br />WITHOUT BORDERS
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          <Link to="/photojournalism">
            <Button 
              size="lg" 
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              Photo Journalism
            </Button>
          </Link>
          <Button 
            size="lg" 
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-8 py-3 rounded-full font-medium transition-all duration-300 opacity-50 cursor-not-allowed"
            disabled
          >
            Editorial
          </Button>
        </div>

        {/* Social Icons - Bottom aligned */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-6">
            <Instagram className="w-6 h-6 text-white/80 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-6 h-6 text-white/80 hover:text-white cursor-pointer transition-colors" />
            <Facebook className="w-6 h-6 text-white/80 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="w-6 h-6 text-white/80 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoIntroSection;
