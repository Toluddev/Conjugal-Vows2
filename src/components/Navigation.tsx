import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Photojournalism', href: '/photojournalism' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Hidden on mobile, visible on desktop */}
            <div className="flex items-center space-x-2 p-2">
                <Link to="/" className="text-white">
                    <img src="/lovable-uploads/Conjugal Vows_2.jpg.png" alt="Logo" className="h-20 w-25" />

                </Link>
            </div>
            {/* Navigation Pills - Hidden on mobile */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full p-1">
              
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.href}
                  className="px-4 lg:px-6 py-2 rounded-full text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button - Hidden on mobile */}
            <Button className="hidden md:flex bg-black hover:bg-gray-800 text-white px-6 lg:px-8 py-2 rounded-full font-medium">
              Explore
            </Button>

            {/* Mobile Hamburger Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay Menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-white"
            onClick={closeMenu}
            aria-hidden="true"
          />
          
          {/* Menu Content */}
          <div className="relative h-full flex flex-col">
            {/* Header with Logo and Close Button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              {/* Logo - Visible in mobile menu */}
              <div className="flex items-center space-x-2 bg-black p-2 rounded-full">
                <Link to="/" className="text-white">
                    <img src="/lovable-uploads/Conjugal Vows_2.jpg-1.PNG" alt="Logo" className="h-20 w-25" />
                </Link>
            </div>
              
              {/* Close Button */}
              <button 
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center px-6">
              <nav className="space-y-8" id="mobile-menu-title">
                {navItems.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.href}
                    className="block text-2xl font-medium text-gray-900 hover:text-gray-600 transition-colors"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              
              {/* CTA Button in Mobile Menu */}
              <div className="mt-12">
                <Button 
                  className="w-full bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium"
                  onClick={closeMenu}
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;