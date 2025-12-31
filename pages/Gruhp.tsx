import React from 'react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { Heart, ShoppingCart, Home, Zap, Stethoscope, PawPrint } from 'lucide-react';

const Gruhp: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero with warm gradient and urgency */}
      <div className="bg-gradient-to-br from-[#7C3AED] via-[#9333EA] to-[#6D28D9] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur p-5 rounded-full animate-pulse">
              <Heart className="h-12 w-12 text-white" />
            </div>
          </div>
          <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-medium mb-6">
            Community Crisis Response
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">GRUHP: Mutual Aid Fund</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-4">
            <strong>G</strong>roceries. <strong>R</strong>ent. <strong>U</strong>tilities. <strong>H</strong>ealth Care. <strong>P</strong>ets.
          </p>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            When systems fail, we step up. 100% of donations go directly to community members in crisis.
          </p>
        </Reveal>
      </div>

      {/* GRUHP Acronym Icons */}
      <div className="bg-purple-50 py-8 border-b border-purple-100">
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
            { amount: '$25', text: 'Groceries' },
            { amount: '$50', text: 'Pet food' },
            { amount: '$100', text: 'Utilities' },
            { amount: '$250', text: 'Half Rent' },
            { amount: '$500', text: 'Full Rent' },
          ].map((item, idx) => (
            <Reveal key={item.amount} delay={idx * 100} className="bg-white p-6 rounded-lg text-center shadow-sm border border-slate-100">
              <div className="text-2xl font-bold text-accent mb-1">{item.amount}</div>
              <div className="text-sm text-slate-600">{item.text}</div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Transparency</h2>
            <p className="text-slate-600 mb-6">
              We're building a real-time transparency dashboard:
            </p>
            <div className="flex items-center gap-2 text-sm font-mono bg-slate-100 p-4 rounded-md mb-6 overflow-x-auto">
              <span>Donations</span> <span>→</span> <span>QuickBooks</span> <span>→</span> <span>Airtable</span> <span>→</span> <span>Public Site</span>
            </div>
            <p className="font-bold text-slate-900">
              100% of GRUHP donations go to recipients. Zero admin fees. Zero overhead.
            </p>
          </Reveal>
        </div>

        {/* Givebutter Widget - Centered */}
        <Reveal className="mt-20" delay={300}>
          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-50 rounded-xl p-8">
              {/* @ts-ignore - Givebutter custom element */}
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