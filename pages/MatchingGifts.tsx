import React, { useEffect } from 'react';
import Reveal from '../components/Reveal';

// Double the Donation API key
const DTD_API_KEY = '6HMm5sEaYqgnLZmU';

const MatchingGifts: React.FC = () => {
  // Load Double the Donation plugin and Givebutter widget
  useEffect(() => {
    // Set global config for DTD
    (window as any).DDCONF = { API_KEY: DTD_API_KEY };

    // Load the DTD script
    const dtdScript = document.createElement('script');
    dtdScript.src = 'https://doublethedonation.com/api/js/ddplugin.js';
    dtdScript.async = true;
    document.head.appendChild(dtdScript);

    // Load Givebutter elements script (required for widget)
    const gbElementsScript = document.createElement('script');
    gbElementsScript.src = 'https://js.givebutter.com/elements/latest.js';
    document.head.appendChild(gbElementsScript);

    // Load Givebutter widget library script
    const gbScript = document.createElement('script');
    gbScript.src = 'https://widgets.givebutter.com/latest.umd.cjs?acct=PWF9tXFflbTG12rU&p=other';
    gbScript.async = true;
    document.head.appendChild(gbScript);

    return () => {
      // Cleanup DTD
      const existingDtdScript = document.querySelector('script[src="https://doublethedonation.com/api/js/ddplugin.js"]');
      if (existingDtdScript) {
        existingDtdScript.remove();
      }
      delete (window as any).DDCONF;
      // Cleanup Givebutter scripts
      const existingGbElementsScript = document.querySelector('script[src*="js.givebutter.com"]');
      if (existingGbElementsScript) {
        existingGbElementsScript.remove();
      }
      const existingGbScript = document.querySelector('script[src*="widgets.givebutter.com"]');
      if (existingGbScript) {
        existingGbScript.remove();
      }
    };
  }, []);
  return (
    <div className="pb-20">
       <div className="bg-slate-900 text-white py-16">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Double Your Impact</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Many employers match charitable donations made by their employees. This means your contribution to Gifted Dreamers could be doubled or even tripled at no extra cost to you.
          </p>
          <div className="flex justify-center">
            {/* @ts-expect-error Givebutter custom element */}
            <givebutter-widget id="jNybPp"></givebutter-widget>
          </div>
        </Reveal>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal className="mb-16 text-center">
           <h2 className="text-2xl font-bold text-slate-900 mb-6">Check Your Eligibility</h2>
           <p className="mb-6 text-slate-600">Search for your employer to see if they offer matching gifts</p>
           <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
             <div id="dd-container">
               <a href="https://doublethedonation.com/matching-grant-resources/matching-gift-basics/">Matching Gift</a> and{' '}
               <a href="https://doublethedonation.com/matching-grant-resources/volunteer-grant-basics/">Volunteer Grant</a> information provided by
               <br />
               <a href="https://doublethedonation.com">
                 <img alt="Powered by Double the Donation" src="https://doublethedonation.com/api/img/powered-by.png" />
               </a>
             </div>
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

        {/* Maximize Your Impact Section */}
        <Reveal delay={400} className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Maximize Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">No Extra Cost to You</h3>
                  <p className="text-slate-600 text-sm">Your employer covers the matching contribution entirely. You get to double your impact without spending an additional cent.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Build Resilient Communities</h3>
                  <p className="text-slate-600 text-sm">Matched donations help us deploy more infrastructure, support more communities, and accelerate the transition to sovereign, decentralized systems.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Tax Deductible</h3>
                  <p className="text-slate-600 text-sm">Gifted Dreamers is a 501(c)(3) nonprofit. Both your original donation and the employer match are tax-deductible.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Quick & Simple Process</h3>
                  <p className="text-slate-600 text-sm">Most matching gift requests take just a few minutes to submit online. We'll provide all the information your employer needs.</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Cross-promotion to Volunteer */}
        <Reveal delay={450} className="mb-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-slate-100 border border-slate-200 rounded-xl">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-slate-700">Volunteer your time to unlock employer grants too!</p>
            <a href="#/volunteer" className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              Volunteer to Earn Grants →
            </a>
          </div>
        </Reveal>

        {/* Extended FAQ Section */}
        <Reveal delay={500} className="bg-slate-50 p-8 rounded-xl mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-1">What is a matching gift?</h3>
              <p className="text-slate-600 text-sm">A matching gift is a corporate donation that matches an employee's charitable contribution, typically dollar-for-dollar. Some companies even offer 2:1 or 3:1 matches, tripling the impact of your donation.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">How do I know if my employer matches gifts?</h3>
              <p className="text-slate-600 text-sm">Use the search tool above to find your employer. Our database includes thousands of companies with matching gift programs. You can also check with your HR department or employee benefits portal.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">How long does the matching process take?</h3>
              <p className="text-slate-600 text-sm">Processing times vary by company, but most matching gifts are completed within 6-8 weeks. Some employers process matches more quickly, while others may take up to 3 months.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Are there minimum or maximum amounts?</h3>
              <p className="text-slate-600 text-sm">Each company sets its own guidelines. Some have minimum donation amounts (often $25-$50) and annual maximums (commonly $1,000-$10,000 per employee). Check your employer's specific policy using the search tool above.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">What information will my employer need?</h3>
              <p className="text-slate-600 text-sm">Typically, employers require proof of your donation (receipt), our nonprofit tax ID (EIN: 39-3863796), and our mailing address. We'll provide all necessary documentation after you make your donation.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Can retirees participate in matching gift programs?</h3>
              <p className="text-slate-600 text-sm">Many companies extend matching gift benefits to retirees! Check the search tool above or contact your former employer's HR department to confirm eligibility.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={600} className="text-center">
           <h2 className="text-2xl font-bold text-slate-900 mb-6">Ready to Make a Difference?</h2>
           <div className="flex justify-center gap-4">
             {/* @ts-expect-error Givebutter custom element */}
             <givebutter-widget id="jNybPp"></givebutter-widget>
           </div>
           <p className="mt-4 text-xs text-slate-500">Gifted Dreamers is a 501(c)(3) nonprofit. All donations are tax-deductible.</p>
        </Reveal>
      </div>
    </div>
  );
};

export default MatchingGifts;