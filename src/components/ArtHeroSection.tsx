
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
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                The Art of Human Expression, Uncover
              </h1>
              
              {/* Orange pill with tree icon */}
              <div className="flex items-center mb-4">
                <div className="bg-orange-400 text-white px-6 py-3 rounded-full flex items-center space-x-2">
                  <TreePine className="w-5 h-5" />
                </div>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The <span className="font-dancing-script italic text-orange-400">Stories</span> Behind the Art
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Discover new favorites among our diverse exhibitions. Uncover the stories and inspiration behind the art.
            </p>

            {/* CTA Button */}
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium mb-12">
              Explore
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
                  <div className="text-3xl font-bold text-gray-900">30K+</div>
                  <div className="text-gray-500">Copies Sold</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">150K</div>
                  <div className="text-gray-500">Monthly Visitors</div>
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
              <div className="relative z-20 bg-white rounded-3xl shadow-2xl p-4 transform rotate-2">
                <div className="w-80 h-80 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=400&fit=crop"
                    alt="Modern architecture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Top right image */}
              <div className="absolute -top-8 right-8 z-10 bg-white rounded-2xl shadow-xl p-3 transform -rotate-12">
                <div className="w-32 h-32 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=200&h=200&fit=crop"
                    alt="Mountain landscape"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom right image */}
              <div className="absolute bottom-4 -right-4 z-10 bg-white rounded-2xl shadow-xl p-3 transform rotate-12">
                <div className="w-28 h-36 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=200&h=250&fit=crop"
                    alt="Forest sunbeam"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom left image */}
              <div className="absolute bottom-12 -left-8 z-10 bg-white rounded-2xl shadow-xl p-3 transform -rotate-6">
                <div className="w-24 h-32 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=150&h=200&fit=crop"
                    alt="White building"
                    className="w-full h-full object-cover"
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
