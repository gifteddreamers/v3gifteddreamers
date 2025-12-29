import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Volunteer from './pages/Volunteer';
import Gruhp from './pages/Gruhp';
import Partners from './pages/Partners';
import CommonCloud from './pages/CommonCloud';
import About from './pages/About';
import MatchingGifts from './pages/MatchingGifts';
import FAQ from './pages/FAQ';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
        {/* Skip link for accessibility - hidden until focused */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Skip to main content
        </a>
        <Navbar />
        
        {/* Conditional Breadcrumbs handled inside Breadcrumbs component via generic check, 
            but for cleaner separation we can also conditionally render the component here.
            The Breadcrumbs component implementation handles checking if path is home.
        */}
        <Breadcrumbs />

        <main id="main-content" className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/gruhp" element={<Gruhp />} />
            <Route path="/corporate-partners" element={<Partners />} />
            <Route path="/common-cloud" element={<CommonCloud />} />
            
            {/* Compliance & Footer Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/matching-gifts" element={<MatchingGifts />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<div className="p-20 text-center">Contact page placeholder</div>} />
            <Route path="/privacy" element={<div className="p-20 text-center">Privacy Policy placeholder</div>} />
            <Route path="/terms" element={<div className="p-20 text-center">Terms of Service placeholder</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;