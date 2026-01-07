import React from 'react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import OptimizedImage from '../components/OptimizedImage';
import { getHeroImageProps } from '../lib/image-utils';
import { ShoppingCart, Home, Zap, Stethoscope, PawPrint, DollarSign, Globe } from 'lucide-react';

const heroImageProps = getHeroImageProps('/images/partners-hero.jpg');

const Gruhp: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero with community image */}
      <div className="bg-white py-24 relative overflow-hidden pb-12">
        <div className="absolute inset-0">
          <OptimizedImage 
            src="/images/partners-hero.jpg" 
            alt="Diverse community" 
            className="w-full h-full object-cover object-center"
            width={1920}
            height={1080}
            isPriority={true}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40"></div>
        </div>
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-4 py-1 bg-slate-900/80 backdrop-blur rounded-full text-sm font-medium mb-6 text-white">
            Community Crisis Response
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">GRUHP: Mutual Aid Fund</h1>
          <p className="text-xl text-slate-800 max-w-3xl mx-auto mb-4">
            <strong>G</strong>roceries. <strong>R</strong>ent. <strong>U</strong>tilities. <strong>H</strong>ealth Care. <strong>P</strong>ets.
          </p>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-0">
            When systems fail, we step up. 100% of donations go directly to community members in crisis.
          </p>
        </Reveal>
      </div>

      {/* GRUHP Icon - Below Hero */}
      <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-2">
        <div className="flex justify-center">
          <div className="bg-primary/10 backdrop-blur p-5 rounded-full animate-pulse">
            <img src="/images/gruhp.svg" alt="GRUHP" className="h-12 w-12" />
          </div>
        </div>
      </Reveal>

      {/* GRUHP Acronym Icons */}
      <div className="bg-primary/10 py-8 border-b border-primary/20">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { icon: ShoppingCart, label: 'Groceries', color: 'text-green-600' },
            { icon: Home, label: 'Rent', color: 'text-blue-600' },
            { icon: Zap, label: 'Utilities', color: 'text-yellow-600' },
            { icon: Stethoscope, label: 'Health Care', color: 'text-red-600' },
            { icon: PawPrint, label: 'Pets', color: 'text-purple-600' },
          ].map(({ icon: Icon, label, color }) => (
            <div key={label} className="flex flex-col items-center">
              <div className={`p-3 bg-white rounded-full shadow-sm ${color}`}>
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium text-slate-600 mt-2">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Impact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-20">
          {[
            { amount: '$25', text: 'Pet food' },
            { amount: '$50', text: 'Utilities' },
            { amount: '$100', text: 'Groceries' },
            { amount: '$250', text: 'Medical' },
            { amount: '$500', text: 'Partial Rent' },
          ].map((item, idx) => (
            <Reveal key={item.amount} delay={idx * 100} className="bg-white p-6 rounded-lg text-center shadow-sm border border-slate-100">
              <div className="text-2xl font-bold text-accent mb-1">{item.amount}</div>
              <div className="text-sm text-slate-600">{item.text}</div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-16 max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Systems Are Failing</h2>
            <p className="text-lg text-slate-600 mb-6">
              SNAP benefits disrupted. Millions losing health coverage. Food bank demand up 11%+. Benefits targeted in 21 states.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              The cracks keep getting wider. People keep falling through. This isn't charity. This is mutual aid. Community taking care of community.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <img src="/images/gruhp-hero.png" alt="Diverse community" className="w-full mb-6 rounded-lg -mt-8" />
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Transparency</h2>
            <p className="text-slate-600 mb-6">
              We're building a real-time transparency dashboard:
            </p>
            <div className="flex items-center justify-center gap-4 bg-slate-100 p-6 rounded-md mb-6 overflow-x-auto">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <img src="/logos/payment.svg" alt="Donations" className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Donations</span>
              </div>
              <span className="text-slate-400">→</span>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm p-2">
                  <img src="/logos/givebutter.svg" alt="Givebutter" className="w-full h-full object-contain" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Givebutter</span>
              </div>
              <span className="text-slate-400">→</span>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm p-2">
                  <img src="/logos/quickbooks.svg" alt="QuickBooks" className="w-full h-full object-contain" />
                </div>
                <span className="text-xs font-semibold text-slate-700">QuickBooks</span>
              </div>
              <span className="text-slate-400">→</span>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm p-2">
                  <img src="/logos/airtable.svg" alt="Airtable" className="w-full h-full object-contain" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Airtable</span>
              </div>
              <span className="text-slate-400">→</span>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm p-2">
                  <img src="/images/logo.png" alt="Our Website" className="w-full h-full object-contain" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Our Website</span>
              </div>
            </div>
            <p className="font-bold text-slate-900 text-center">
              100% of GRUHP donations go to recipients. Zero admin fees. Zero overhead.
            </p>
          </Reveal>
        </div>

        {/* Givebutter Widget - Centered */}
        <Reveal className="mt-8" delay={300}>
          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-50 rounded-xl p-8 flex justify-center">
              <givebutter-widget id="pnqxbg"></givebutter-widget>
            </div>
            <div className="text-center mt-8 text-slate-500 text-sm">
              <p>Gifted Dreamers, Inc. is a 501(c)(3) nonprofit.</p>
              <p>EIN: 39-3863796</p>
              <p>All donations are tax-deductible.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Gruhp;