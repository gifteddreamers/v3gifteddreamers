import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Volunteer', path: '/volunteer' },
    { label: 'GRUHP', path: '/gruhp' },
    { label: 'Matching Gifts', path: '/matching-gifts' },
    { label: 'Partners', path: '/corporate-partners' },
    { label: 'Common Cloud', path: '/common-cloud' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Close menu when clicking outside the entire nav (so mobile menu links receive the click and navigate)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
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
    <nav ref={navRef} className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center min-w-0">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 sm:gap-3 group">
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

          {/* Hamburger Menu Button - Visible on md and below; on lg+ shows dropdown when desktop nav is hidden */}
          <div className="flex items-center relative md:flex-none">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2 rounded-md text-slate-500 hover:text-primary hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors touch-manipulation"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-nav-menu"
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

      {/* Mobile Full-Screen Menu - min touch target 44px, inside nav so click-outside doesn't steal link clicks */}
      {isOpen && (
        <div id="mobile-nav-menu" className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top-4 duration-200" role="menu" aria-label="Mobile navigation">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 min-h-[44px] rounded-md text-base font-bold transition-colors touch-manipulation ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/5'
                    : 'text-slate-600 hover:text-primary hover:bg-slate-50 active:bg-slate-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 pb-2 px-3">
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block">
                <Button fullWidth className="font-bold min-h-[44px] touch-manipulation">
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