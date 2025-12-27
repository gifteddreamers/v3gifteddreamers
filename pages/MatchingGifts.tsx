import React from 'react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

const MatchingGifts: React.FC = () => {
  return (
    <div className="pb-20">
       <div className="bg-slate-900 text-white py-16">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Double Your Impact</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Many employers match charitable donations made by their employees. This means your contribution to Gifted Dreamers could be doubled or even tripled at no extra cost to you.
          </p>
          <div className="max-w-md mx-auto">
            <a
              href="https://givebutter.com/gifteddreamers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="primary" size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Donate Now via Givebutter
              </Button>
            </a>
          </div>
        </Reveal>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal className="mb-16 text-center">
           <h2 className="text-2xl font-bold text-slate-900 mb-6">Check Your Eligibility</h2>
           <p className="mb-6 text-slate-600">Search for your employer to see if they offer matching gifts</p>
           <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
             <p className="text-slate-600 mb-4">
               Use the search tool below to check if your employer matches charitable donations:
             </p>
             <a
               href="https://doublethedonation.com/company-search"
               target="_blank"
               rel="noopener noreferrer"
               className="text-primary hover:text-primary-dark font-semibold underline"
             >
               Search for Your Employer on Double the Donation →
             </a>
             <p className="text-sm text-slate-500 mt-4">
               Our EIN: <strong>39-3863796</strong> | Organization: <strong>Gifted Dreamers, Inc.</strong>
             </p>
           </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
           <Reveal delay={100} className="text-center">
             <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
             <h3 className="font-bold mb-2">Make Your Donation</h3>
             <p className="text-sm text-slate-600">Contribute to Gifted Dreamers through our secure donation platform.</p>
           </Reveal>
           <Reveal delay={200} className="text-center">
             <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
             <h3 className="font-bold mb-2">Search Your Employer</h3>
             <p className="text-sm text-slate-600">Use our search tool above to find out if your company offers a match.</p>
           </Reveal>
           <Reveal delay={300} className="text-center">
             <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
             <h3 className="font-bold mb-2">Submit Match Request</h3>
             <p className="text-sm text-slate-600">Follow your employer's process. We'll verify it.</p>
           </Reveal>
        </div>

        <Reveal delay={400} className="bg-slate-50 p-8 rounded-xl mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-1">What is a matching gift?</h3>
              <p className="text-slate-600 text-sm">A corporate donation that matches an employee's charitable contribution.</p>
            </div>
             <div>
              <h3 className="font-bold text-slate-900 mb-1">How long does the process take?</h3>
              <p className="text-slate-600 text-sm">Typically 6-8 weeks, depending on your employer.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Are there minimums?</h3>
              <p className="text-slate-600 text-sm">Often $25-$50. Check the search tool for your specific company.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={500} className="text-center">
           <h2 className="text-2xl font-bold text-slate-900 mb-6">Ready to Make a Difference?</h2>
           <div className="flex justify-center gap-4">
             <a href="https://givebutter.com/gifteddreamers" target="_blank" rel="noopener noreferrer">
               <Button>Donate Now</Button>
             </a>
           </div>
           <p className="mt-4 text-xs text-slate-500">Gifted Dreamers is a 501(c)(3) nonprofit. All donations are tax-deductible.</p>
        </Reveal>
      </div>
    </div>
  );
};

export default MatchingGifts;