import React from 'react';
import { Link } from 'react-router-dom';
// Social media icons are now using custom SVG files in /public/images/

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300" style={{ minHeight: '450px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: SERVICES */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-b border-primary pb-2 inline-block">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="hover:text-primary transition-colors">Tech Perks Audit</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Accounting Cleanup</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Book a Session</Link></li>
            </ul>
          </div>

          {/* Column 2: VOLUNTEER */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-b border-accent pb-2 inline-block">Volunteer</h3>
            <ul className="space-y-3">
              <li><Link to="/volunteer" className="hover:text-accent transition-colors">Volunteer Opportunities</Link></li>
              <li><Link to="/corporate-partners" className="hover:text-accent transition-colors">Corporate Partners</Link></li>
            </ul>
          </div>

          {/* Column 3: GIVE BACK */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-b border-primary pb-2 inline-block">Give Back</h3>
            <ul className="space-y-3">
              <li><Link to="/gruhp" className="hover:text-primary transition-colors">GRUHP Fund</Link></li>
              <li><Link to="/matching-gifts" className="hover:text-primary transition-colors">Matching Gifts</Link></li>
            </ul>
          </div>

          {/* Column 4: LEARN */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-b border-accent pb-2 inline-block">Learn</h3>
            <ul className="space-y-3">
              <li><Link to="/common-cloud" className="hover:text-accent transition-colors">Common Cloud</Link></li>
              <li><a href="https://gifteddreamers.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Substack</a></li>
              <li><Link to="/common-cloud" className="hover:text-accent transition-colors">Resources</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Organization Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={`${import.meta.env.BASE_URL}logo-200.png`}
                  alt="Gifted Dreamers Logo"
                  width="32"
                  height="32"
                  className="w-8 h-8 object-contain"
                />
                <span className="font-bold tracking-tight text-lg"><span style={{ color: '#E8505B' }}>Gifted</span> <span style={{ color: '#38BDF8' }}>Dreamers</span></span>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-4">
                <Link to="/about" className="hover:text-white transition-colors">About</Link>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
                <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Gifted Dreamers, Inc. is a 501(c)(3) nonprofit organization.<br/>
                EIN: 39-3863796 | All donations are tax-deductible.<br/>
                © 2025 Gifted Dreamers, Inc. All rights reserved.
              </p>
            </div>

            {/* Social Icons - min 44x44px touch targets for accessibility */}
            {/* Fixed height to prevent layout shift - 9 icons × 44px = 396px min */}
            <div className="flex md:justify-end gap-2 min-h-[44px] flex-wrap">
               <a href="https://gifteddreamers.substack.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Substack" className="flex items-center justify-center w-11 h-11 hover:opacity-80 transition-opacity transform hover:scale-110">
                 <img src={`${import.meta.env.BASE_URL}images/substack.png`} alt="Substack" width="24" height="24" className="h-6 w-6 object-contain" loading="lazy" />
               </a>
               <a href="https://linkedin.com/company/gifteddreamers" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn" className="flex items-center justify-center w-11 h-11 hover:opacity-80 transition-opacity transform hover:scale-110">
                 <img src={`${import.meta.env.BASE_URL}images/linkedin.svg`} alt="LinkedIn" width="24" height="24" className="h-6 w-6" loading="lazy" />
               </a>
               <a href="https://facebook.com/gifteddreamers" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="flex items-center justify-center w-11 h-11 hover:opacity-80 transition-opacity transform hover:scale-110">
                 <img src={`${import.meta.env.BASE_URL}images/facebook.svg`} alt="Facebook" width="24" height="24" className="h-6 w-6" loading="lazy" />
               </a>
               <a href="https://instagram.com/gifted.dreamers" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="flex items-center justify-center w-11 h-11 hover:opacity-80 transition-opacity transform hover:scale-110">
                 <img src={`${import.meta.env.BASE_URL}images/instagram.svg`} alt="Instagram" width="24" height="24" className="h-6 w-6" loading="lazy" />
               </a>
               <a href="https://youtube.com/@gifteddreamers" target="_blank" rel="noopener noreferrer" aria-label="Follow us on YouTube" className="flex items-center justify-center w-11 h-11 hover:opacity-80 transition-opacity transform hover:scale-110">
                 <img src={`${import.meta.env.BASE_URL}images/youtube.svg`} alt="YouTube" width="24" height="24" className="h-6 w-6" loading="lazy" />
               </a>
               <a href="http://tiktok.com/@gifteddreamers" target="_blank" rel="noopener noreferrer" aria-label="Follow us on TikTok" className="flex items-center justify-center w-11 h-11 hover:opacity-80 transition-opacity transform hover:scale-110">
                 <img src={`${import.meta.env.BASE_URL}images/tiktok.svg`} alt="TikTok" width="24" height="24" className="h-6 w-6" loading="lazy" />
               </a>
               <a href="https://www.x.com/gifteddreamers" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X (Twitter)" className="flex items-center justify-center w-11 h-11 hover:opacity-80 transition-opacity transform hover:scale-110">
                 <img src={`${import.meta.env.BASE_URL}images/X.svg`} alt="X (Twitter)" width="24" height="24" className="h-6 w-6" loading="lazy" />
               </a>
               <a href="https://pinterest.com/@gifteddreamers" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Pinterest" className="flex items-center justify-center w-11 h-11 hover:opacity-80 transition-opacity transform hover:scale-110">
                 <img src={`${import.meta.env.BASE_URL}images/pinterest.svg`} alt="Pinterest" width="24" height="24" className="h-6 w-6" loading="lazy" />
               </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;