import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArtHeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Main Content */}
      <div className="max-w-[1920px] mx-auto px-6 2xl:px-24 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-8rem)]">
          {/* Left Column */}
          <div className="lg:w-1/2 lg:pr-16 text-left space-y-8">
            <div>
              <h1 className="font-serif text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight mb-4 text-shadow-custom">
                CONJUGAL VOWS
              </h1>
              <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 leading-tight">
                The <span className="font-dancing-script italic text-[#00afef]">Stories</span> Behind the Vows
              </h2>
            </div>

            <p className="text-lg xl:text-xl 2xl:text-2xl text-gray-600 max-w-2xl leading-relaxed">
              Explore timeless love stories captured across cultures. Discover the beauty, emotion, and connection that transcend borders.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Link to="/gallery">
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium w-full sm:w-auto">
                  View Gallery
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3 rounded-full font-medium w-full sm:w-auto">
                  Get in Touch
                </Button>
              </Link>
            </div>

            {/* Statistics */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center space-x-3">
                <span className="text-lg xl:text-xl font-semibold text-gray-900">500+ Reviews</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 max-w-sm">
                <div>
                  <div className="text-3xl xl:text-4xl font-bold text-gray-900">100+</div>
                  <div className="text-gray-500">Weddings Documented</div>
                </div>
                <div>
                  <div className="text-3xl xl:text-4xl font-bold text-gray-900">5+ Years</div>
                  <div className="text-gray-500">Capturing Memories</div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-10">
              <Facebook className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <Linkedin className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <Youtube className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
            </div>
          </div>

          {/* Right Column - Image Cluster */}
          <div className="lg:w-1/2 mt-20 lg:mt-0 relative flex justify-center">
            <div className="relative max-w-xl">
              {/* Large Center Image */}
              <div className="relative z-20 bg-white rounded-3xl shadow-2xl p-3 transform rotate-6">
                <div className="w-full h-[500px] xl:h-[600px] rounded-2xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/IMG_3248.webp"
                    alt="Modern architecture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Top Right */}
              <div className="absolute -top-16 right-0 z-40 bg-white rounded-2xl shadow-xl p-2 transform rotate-6">
                <div className="w-28 h-28 xl:w-36 xl:h-36 rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/IMG_3254.jpg"
                    alt="Mountain landscape"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom Right */}
              <div className="absolute bottom-4 -right-16 z-40 bg-white rounded-2xl shadow-xl p-2 transform rotate-12">
                <div className="w-[200px] h-[180px] xl:w-[240px] xl:h-[210px] rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/IMG_3255.jpg"
                    alt="Forest sunbeam"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Bottom Left */}
              <div className="absolute bottom-8 -left-10 z-40 bg-white rounded-2xl shadow-xl p-2 transform -rotate-6">
                <div className="w-28 h-36 xl:w-32 xl:h-40 rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/IMG_3249.webp"
                    alt="White building"
                    className="w-full h-full object-cover object-center"
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