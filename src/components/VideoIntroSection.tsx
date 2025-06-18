
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

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
        <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-black"></div>
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-6">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-dancing-script text-center mb-12 animate-fade-up">
          Conjugal Vows
        </h1>

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
