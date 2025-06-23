
import { Button } from '@/components/ui/button';
import { Search, Instagram, Facebook, Twitter, Linkedin, Youtube, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArtHeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 bg-black p-2 rounded-full">
                <Link to="/" className="text-white">
                    <img src="/lovable-uploads/Conjugal Vows_2.jpg-1.PNG" alt="Logo" className="h-20 w-25" />
                </Link>
            </div>

            {/* Navigation Pills */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full p-1">
              <Link to="/" className="px-6 py-2 rounded-full bg-black text-white text-sm font-medium">
                Home
              </Link>
              <Link to="/photojournalism" className="px-6 py-2 rounded-full text-gray-600 hover:text-gray-900 text-sm font-medium">
                Photojournalism
              </Link>
              <Link to="/about" className="px-6 py-2 rounded-full text-gray-600 hover:text-gray-900 text-sm font-medium">
                About
              </Link>
              <Link to="/gallery" className="px-6 py-2 rounded-full text-gray-600 hover:text-gray-900 text-sm font-medium">
                Gallery
              </Link>
              <Link to="/contact" className="px-6 py-2 rounded-full text-gray-600 hover:text-gray-900 text-sm font-medium">
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-2 rounded-full font-medium">
              Explore
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-8rem)]">
          {/* Left Column - Content */}
          <div className="lg:w-1/2 lg:pr-12 text-left">
            {/* Headline */}
            <div className="mb-8">
              <h1 className="font-serif text-5xl text-shadow-custom lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                CONJUGAL  VOWS
              </h1>
              
           
              
              <h2 className="text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                The <span className="font-dancing-script italic text-[#00afef]">Stories</span> Behind the Vows
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Explore timeless love stories captured across cultures. Discover the beauty, emotion, and connection that transcend borders.
            </p>

            {/* CTA Button */}
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium mb-12">
              <Link to="/gallery" className="flex items-center space-x-2">
                Explore
              </Link>
            </Button>

            {/* Statistics */}
            <div className="space-y-6">
              {/* Reviews */}
              <div className="flex items-center space-x-3">
                <span className="text-lg font-semibold text-gray-900">500+ Reviews</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">100+</div>
                  <div className="text-gray-500">Weddings Documented</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">5+ Years</div>
                  <div className="text-gray-500">Capturing Memories</div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-12">
              <Facebook className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <Linkedin className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <Youtube className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
            </div>
          </div>

          {/* Right Column - Image Cluster */}
          <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
          <div className="relative max-w-lg mx-auto">
  {/* Center large image */}
  <div className="relative z-20 bg-white rounded-3xl shadow-2xl p-3 transform rotate-6">
    <div className="w-full h-[500px] rounded-2xl overflow-hidden">
      <img 
        src="/lovable-uploads/IMG_3248.webp"
        alt="Modern architecture"
        className="w-full h-auto object-cover"
      />
    </div>
  </div>

  {/* Top right image */}
  <div className="absolute -top-12 right-2 sm:-top-16 sm:right-4 lg:-top-20 lg:right-6 z-40 bg-white rounded-2xl shadow-xl p-2 sm:p-1 transform rotate-6">
    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl overflow-hidden">
      <img 
        src="/lovable-uploads/IMG_3254.jpg"
        alt="Mountain landscape"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Bottom right image */}
  <div className="absolute bottom-2 -right-12 sm:bottom-4 sm:-right-16 lg:bottom-6 lg:-right-20 z-40 bg-white rounded-2xl shadow-xl p-2 sm:p-1 transform rotate-12">
    <div className="w-40 h-36 sm:w-[200px] sm:h-[180px] md:w-[220px] md:h-[200px] rounded-xl overflow-hidden">
      <img 
        src="/lovable-uploads/IMG_3255.jpg"
        alt="Forest sunbeam"
        className="w-full h-full object-cover object-center"

      />
    </div>
  </div>

  {/* Bottom left image */}
  <div className="absolute bottom-6 -left-6 sm:bottom-10 sm:-left-8 lg:bottom-12 lg:-left-10 z-40 bg-white rounded-2xl shadow-xl p-2 sm:p-1 transform -rotate-6">
    <div className="w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 rounded-xl overflow-hidden">
      <img 
        src="/lovable-uploads/IMG_3249.webp"
        alt="White building"
        className="w-full h-full object-center object-cover"
      />
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtHeroSection;
