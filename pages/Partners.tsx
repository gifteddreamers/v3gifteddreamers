import React, { useEffect } from 'react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

// Double the Donation plugin configuration
const DTD_API_KEY = '6HMm5sEaYqgnLZmU';

const Partners: React.FC = () => {
  // Load Double the Donation plugin
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://doublethedonation.com/api/js/ddplugin.js';
    script.async = true;
    script.onload = () => {
      const pluginNode = document.getElementById('dtd-plugin-partners');
      if (pluginNode && (window as any).doublethedonation?.plugin?.v2?.load_plugin) {
        const config = { sections: ['match', 'payroll-giving'] };
        (window as any).doublethedonation.plugin.v2.load_plugin(pluginNode, DTD_API_KEY, config);
      }
    };
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://doublethedonation.com/api/js/ddplugin.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="pb-20">
       <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img src="/images/handshake-partners.jpg" width="2000" height="1500" className="w-full h-full object-cover" alt="Business partners shaking hands" />
        </div>
        <Reveal className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Partner With Us</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Double donations through matching gifts. Generate volunteer grants from employee time. Support community infrastructure that lasts.
          </p>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Matching Gifts */}
        <Reveal className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="md:w-1/2">
               <h2 className="text-2xl font-bold text-slate-900 mb-4">Double Your Employees' Donations</h2>
               <p className="text-slate-600 mb-6">
                 Many companies match charitable donations 1:1, 2:1, or even 3:1. When your employees donate to Gifted Dreamers, you can match their contribution, demonstrate corporate social responsibility, and support community-led infrastructure.
               </p>
             </div>
             <div className="md:w-1/2 w-full">
               <div id="dtd-plugin-partners" className="bg-white rounded-lg border border-slate-200 p-4">
                 {/* Double the Donation plugin will load here */}
               </div>
             </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal delay={100} className="bg-slate-50 p-8 rounded-xl">
             <h3 className="text-2xl font-bold text-slate-900 mb-4">Volunteer Grants</h3>
             <p className="text-slate-600 mb-6">
               When employees volunteer with us, you pay us—not them. Common rates: Microsoft $25/hr, Google $50/hr. Volunteers work on real projects: tech perks research, documentation, and AI tool testing.
             </p>
             <a href="mailto:partnerships@gifteddreamers.org?subject=Volunteer Partnership Inquiry">
               <Button variant="outline">Start a Volunteer Partnership</Button>
             </a>
          </Reveal>
          <Reveal delay={200} className="bg-slate-50 p-8 rounded-xl">
             <h3 className="text-2xl font-bold text-slate-900 mb-4">Custom Engagements</h3>
             <p className="text-slate-600 mb-6">
               Sponsor training sessions, fund crisis response through GRUHP, or support our community tech education programs.
             </p>
             <a href="mailto:partnerships@gifteddreamers.org" className="text-primary font-medium hover:underline">Contact Partnerships →</a>
          </Reveal>
        </div>

        <Reveal className="mt-20 bg-white border border-slate-200 shadow-sm rounded-xl p-8 md:p-12">
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
             <p className="text-center font-bold text-slate-900 mt-8">We make your nonprofit program look good by actually using it well.</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Partners;