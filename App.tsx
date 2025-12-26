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
        <Navbar />
        
        {/* Conditional Breadcrumbs handled inside Breadcrumbs component via generic check, 
            but for cleaner separation we can also conditionally render the component here.
            The Breadcrumbs component implementation handles checking if path is home.
        */}
        <Breadcrumbs />

        <main className="flex-grow">
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