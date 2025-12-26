import React from 'react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { Heart } from 'lucide-react';

const Gruhp: React.FC = () => {
  return (
    <div className="pb-20">
      <div className="bg-primary text-white py-20">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <Heart className="h-10 w-10 text-accent" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">GRUHP: Mutual Aid Community Crisis Fund</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Groceries. Rent. Utilities. Health Care. Pets. When systems fail, we step up. 100% of donations go directly to community members.
          </p>
          <Button variant="primary" size="lg">Donate Now via Givebutter</Button>
        </Reveal>
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

        {/* Givebutter Embed Placeholder */}
        <Reveal className="mt-20" delay={300}>
          <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl h-96 flex flex-col items-center justify-center text-slate-400">
            <span className="font-semibold text-lg">[Givebutter Donation Widget Embed]</span>
            <span className="mt-2 text-sm">Full donation form will appear here</span>
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