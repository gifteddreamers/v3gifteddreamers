import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Volunteer', path: '/volunteer' },
    { label: 'GRUHP', path: '/gruhp' },
    { label: 'Matching Gifts', path: '/matching-gifts' },
    { label: 'Partners', path: '/corporate-partners' },
    { label: 'Common Cloud', path: '/common-cloud' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              <img
                src={`${import.meta.env.BASE_URL}logo-new.png`}
                alt="Gifted Dreamers Logo"
                width="40"
                height="40"
                className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
              />
              <span className="text-xl font-bold tracking-tight"><span className="text-primary">Gifted</span> <span className="text-accent">Dreamers</span></span>
            </Link>
          </div>

          {/* Desktop Menu */}
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
          </div>

          <div className="hidden md:flex md:items-center">
             <a href="https://calendly.com/kristinesocall" target="_blank" rel="noopener noreferrer">
               <Button variant="primary" size="sm" className="gap-2 font-bold">
                 Book a Call
               </Button>
             </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-3">
             <a href="https://calendly.com/kristinesocall" target="_blank" rel="noopener noreferrer">
               <Button variant="primary" size="sm" className="text-xs px-2 h-8 font-bold">
                 Book Call
               </Button>
             </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-primary hover:bg-slate-100 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
               <a href="https://calendly.com/kristinesocall" target="_blank" rel="noopener noreferrer">
                 <Button fullWidth onClick={() => setIsOpen(false)} className="font-bold">
                   Book a Free Call <ArrowRight className="ml-2 h-4 w-4" />
                 </Button>
               </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;