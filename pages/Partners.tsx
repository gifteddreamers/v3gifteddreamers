import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import OptimizedImage from '../components/OptimizedImage';
import { getHeroImageProps } from '../lib/image-utils';

const heroImageProps = getHeroImageProps('/images/partners-hero.jpg');

const Partners: React.FC = () => {

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[60vh] flex items-center">
        <OptimizedImage
          src="/images/partners-hero.jpg"
          alt="Partner with Gifted Dreamers"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          isPriority={true}
          loading="eager"
          srcSet={heroImageProps.srcSet}
          srcSetWebP={heroImageProps.srcSetWebP}
          sizes={heroImageProps.sizes}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/60"></div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 py-24">
          <Reveal className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner With Us</h1>
            <p className="text-xl md:text-2xl text-slate-100 font-light">
              Support community infrastructure that lasts.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal className="bg-white border border-slate-200 shadow-sm rounded-xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Why Partner With Gifted Dreamers?</h2>
          <div className="max-w-3xl mx-auto">
             <p className="text-lg text-slate-600 mb-6 text-center">
               We help technology companies demonstrate the real-world impact of their nonprofit programs.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700">
               <div className="flex items-start"><span className="text-accent mr-2">•</span> Create case studies showing leverage</div>
               <div className="flex items-start"><span className="text-accent mr-2">•</span> Train other nonprofits to adopt tech</div>
               <div className="flex items-start"><span className="text-accent mr-2">•</span> Document best practices for CSR</div>
               <div className="flex items-start"><span className="text-accent mr-2">•</span> Generate measurable outcomes</div>
             </div>
             <p className="text-center font-bold text-slate-900 mt-8">We make your social impact program look good.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <Reveal delay={100} className="bg-slate-50 p-8 rounded-xl">
             <h3 className="text-2xl font-bold text-slate-900 mb-4">Custom Engagements</h3>
             <p className="text-slate-600 mb-6">
               Sponsor training sessions, fund crisis response through GRUHP, or support our community tech education programs.
             </p>
             <Link to="/contact" className="text-primary font-medium hover:underline">Contact Partnerships →</Link>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Partners;