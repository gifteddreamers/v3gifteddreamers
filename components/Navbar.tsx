import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Volunteer', path: '/volunteer' },
    { label: 'GRUHP', path: '/gruhp' },
    { label: 'Matching Gifts', path: '/matching-gifts' },
    { label: 'Partners', path: '/corporate-partners' },
    { label: 'Common Cloud', path: '/common-cloud' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="Gifted Dreamers Logo"
                width="40"
                height="40"
                className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
              />
              <span className="text-xl font-bold tracking-tight"><span className="text-brand-red">Gifted</span> <span className="text-brand-blue">Dreamers</span></span>
            </Link>
          </div>

          {/* Desktop Menu - Horizontal Links */}
          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-semibold transition-all ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/5'
                    : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="ml-2 lg:ml-4">
              <Button variant="primary" size="sm" className="gap-2 font-bold">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Hamburger Menu Button - Visible on all screens, functional on both mobile and desktop */}
          <div className="flex items-center relative" ref={menuRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-primary hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>

            {/* Desktop Dropdown Menu */}
            {isOpen && (
              <div className="hidden md:block absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-sm font-semibold transition-colors ${
                        isActive(link.path)
                          ? 'text-primary bg-primary/5 border-l-4 border-primary'
                          : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-slate-200 mt-2 pt-2 px-4">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      <Button variant="primary" size="sm" className="w-full justify-center gap-2 font-bold">
                        Contact Us <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top-4 duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded-md text-base font-bold transition-colors ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/5'
                    : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 pb-2 px-3">
               <Link to="/contact" onClick={() => setIsOpen(false)}>
                 <Button fullWidth onClick={() => setIsOpen(false)} className="font-bold">
                   Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                 </Button>
               </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;