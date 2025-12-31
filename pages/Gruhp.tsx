import React from 'react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { Heart, ShoppingCart, Home, Zap, Stethoscope, PawPrint, ArrowRight, DollarSign, BookOpen, Database, Globe } from 'lucide-react';

const Gruhp: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero with image background and purple overlay */}
      <section
        className="relative text-white overflow-hidden min-h-[60vh] flex items-center bg-slate-900"
        style={{
          backgroundImage: 'url(/images/gruhp-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/60"></div>
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
          <p className="text-lg text-purple-200 max-w-2xl mx-auto mb-10">
            When systems fail, we step up. 100% of donations go directly to community members in crisis.
          </p>
          <a href="https://givebutter.com/GRUHP" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="lg" className="bg-white text-purple-700 hover:bg-purple-50 shadow-xl">
              Donate Now via Givebutter
            </Button>
          </a>
        </Reveal>
      </section>

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
            {/* Visual Transparency Flow */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl mb-6">
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                {/* Donations */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                    <DollarSign className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 mt-2">Donations</span>
                </div>
                <ArrowRight className="h-5 w-5 text-purple-400 hidden sm:block" />
                <div className="text-purple-400 sm:hidden">↓</div>
                {/* QuickBooks */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-[#2CA01C] rounded-xl flex items-center justify-center shadow-lg">
                    <BookOpen className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 mt-2">QuickBooks</span>
                </div>
                <ArrowRight className="h-5 w-5 text-purple-400 hidden sm:block" />
                <div className="text-purple-400 sm:hidden">↓</div>
                {/* Airtable */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-[#18BFFF] rounded-xl flex items-center justify-center shadow-lg">
                    <Database className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 mt-2">Airtable</span>
                </div>
                <ArrowRight className="h-5 w-5 text-purple-400 hidden sm:block" />
                <div className="text-purple-400 sm:hidden">↓</div>
                {/* Public Site */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Globe className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 mt-2">Public Site</span>
                </div>
              </div>
            </div>
            <p className="font-bold text-slate-900">
              100% of GRUHP donations go to recipients. Zero admin fees. Zero overhead.
            </p>
          </Reveal>
        </div>

        {/* Givebutter Widget */}
        <Reveal className="mt-20" delay={300}>
          <div className="bg-slate-50 rounded-xl p-8">
            {/* @ts-ignore - Givebutter custom element */}
            <givebutter-widget id="pnqxbg"></givebutter-widget>
          </div>

          {/* Centered Donate Button */}
          <div className="flex justify-center mt-10">
            <a href="https://givebutter.com/GRUHP" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="bg-purple-600 hover:bg-purple-700 text-white shadow-xl px-10">
                <Heart className="h-5 w-5 mr-2" />
                Donate Now
              </Button>
            </a>
          </div>

          <div className="text-center mt-8 text-slate-500 text-sm">
            <p>Gifted Dreamers, Inc. is a 501(c)(3) nonprofit.</p>
            <p>EIN: 39-3863796</p>
            <p>All donations are tax-deductible.</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Gruhp;