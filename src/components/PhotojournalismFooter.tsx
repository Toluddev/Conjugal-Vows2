
import { Instagram, Mail } from 'lucide-react';

const PhotojournalismFooter = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        {/* Images Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="aspect-square overflow-hidden">
            <img 
              src="/lovable-uploads/8b538cf9-466c-4aa6-8836-ebe5b83c7d88.png"
              alt="Wedding couple"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <img 
              src="/lovable-uploads/2d09c29f-9afb-4102-bcd6-1deac3f03601.png"
              alt="Wedding celebration"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <img 
              src="/lovable-uploads/f9568b0f-0057-412c-80cb-8b45c78b859f.png"
              alt="Wedding moment"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <img 
              src="/lovable-uploads/0387de82-8f1e-4f9c-8ca5-4fbf126adfe4.png"
              alt="Wedding toast"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Logo and Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-dancing-script mb-6">
            CV
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            CONJUGAL VOWS
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            An international film house for luxury weddings and fostering a community of learning 
            and inspiration for filmmakers.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          <Mail className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © 2025 Conjugal Vows Film House. All rights reserved.
        </div>

        {/* Small images in corner */}
        <div className="fixed bottom-4 right-4 hidden lg:block">
          <div className="grid grid-cols-2 gap-1 w-20 h-20">
            <img 
              src="/lovable-uploads/8b11c4f3-7ec2-4800-a061-e6310cbbd364.png"
              alt="Mini gallery"
              className="w-full h-full object-cover"
            />
            <img 
              src="/lovable-uploads/8d300c27-9744-477b-8922-0db4515bc7d1.png"
              alt="Mini gallery"
              className="w-full h-full object-cover"
            />
            <img 
              src="/lovable-uploads/2d09c29f-9afb-4102-bcd6-1deac3f03601.png"
              alt="Mini gallery"
              className="w-full h-full object-cover"
            />
            <img 
              src="/lovable-uploads/f9568b0f-0057-412c-80cb-8b45c78b859f.png"
              alt="Mini gallery"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PhotojournalismFooter;
