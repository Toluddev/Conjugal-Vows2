
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Search className="w-5 h-5 text-gray-700" />
            <span className="text-lg font-semibold text-gray-900">Qlick</span>
          </div>

          {/* Navigation Pills */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full p-1">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.href}
                className="px-6 py-2 rounded-full text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Button className="bg-black hover:bg-gray-800 text-white px-8 py-2 rounded-full font-medium">
            Explore
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="h-0.5 bg-gray-700 w-6"></div>
              <div className="h-0.5 bg-gray-700 w-6"></div>
              <div className="h-0.5 bg-gray-700 w-6"></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-gray-900 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
