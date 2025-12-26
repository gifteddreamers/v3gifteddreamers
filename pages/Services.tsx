import React from 'react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

const Services: React.FC = () => {
  return (
    <div className="pb-20">
      <div className="bg-primary text-white py-20">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Tech Perks Audit + Accounting Cleanup</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We help small nonprofits access enterprise tools and fix messy books. Clear pricing. No hidden fees. No dependency.
          </p>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Tech Perks Card */}
          <Reveal className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col h-full">
            <div className="h-48 bg-slate-100 relative">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tech Perks" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-primary/10"></div>
            </div>
            <div className="p-8 flex-grow">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Tech Perks Audit</h2>
              <p className="text-accent font-semibold mb-6">You're probably leaving $100K+ on the table.</p>
              
              <p className="text-slate-600 mb-6">
                We maintain a database of 475+ nonprofit perks from companies like:
              </p>
              <ul className="space-y-2 mb-8 text-sm text-slate-600">
                <li className="flex items-start"><span className="text-accent mr-2">•</span> <strong>Google:</strong> $10K/month in free ads + Workspace</li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span> <strong>Microsoft:</strong> 365 licenses for your team</li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span> <strong>Salesforce:</strong> 10 free enterprise licenses</li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span> <strong>Datadog:</strong> $100K in infrastructure monitoring</li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span> <strong>GitLab Ultimate:</strong> $14K/year value</li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span> <strong>Plus:</strong> Canva, Slack, Notion, Zoom, Airtable, and 200+ more</li>
              </ul>

              <div className="bg-slate-50 p-6 rounded-lg mb-8">
                 <h3 className="font-bold text-slate-900 mb-4">What we do:</h3>
                 <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700">
                    <li>Review your organization against every program</li>
                    <li>Identify everything you qualify for</li>
                    <li>Help you apply during the session (guided)</li>
                    <li>Build renewal automations</li>
                 </ol>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="font-medium">2-hour session</span>
                  <span className="font-bold text-lg">$150</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="font-medium">Follow-up session</span>
                  <span className="font-bold text-lg">$100 <span className="text-sm font-normal text-slate-500">/ 90 min</span></span>
                </div>
              </div>
            </div>
            <div className="p-8 pt-0 mt-auto">
              <Button fullWidth>Book a Perks Session</Button>
            </div>
          </Reveal>

          {/* Accounting Card */}
          <Reveal className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col h-full" delay={150}>
            <div className="h-48 bg-slate-100 relative">
               <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Accounting" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-primary/10"></div>
            </div>
            <div className="p-8 flex-grow">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">QuickBooks Cleanup</h2>
              <p className="text-accent font-semibold mb-6">Your books are a disaster. We've seen worse.</p>
              
              <p className="text-slate-600 mb-6">
                25 years of experience cleaning up multi-year backlogs, botched categorizations, missing reconciliations, and tax deadline panic.
              </p>

              <div className="bg-slate-50 p-6 rounded-lg mb-8">
                 <h3 className="font-bold text-slate-900 mb-4">What we do:</h3>
                 <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700">
                    <li>Assess the damage (free 30-minute call)</li>
                    <li>Quote a fixed price for cleanup</li>
                    <li>Clean it up and document what we did</li>
                    <li>Train you (or your team) to maintain it</li>
                    <li>Optional: Monthly bookkeeping going forward</li>
                 </ol>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                   <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase">Cleanup Projects (One-Time)</h4>
                   <ul className="space-y-2 text-sm">
                     <li className="flex justify-between"><span>1-3 months backlog</span> <span className="font-bold">$500</span></li>
                     <li className="flex justify-between"><span>4-12 months backlog</span> <span className="font-bold">$750</span></li>
                     <li className="flex justify-between"><span>1+ year backlog</span> <span className="font-bold">$1,000 - $1,500</span></li>
                   </ul>
                </div>
                <div>
                   <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase">Monthly Bookkeeping</h4>
                   <ul className="space-y-2 text-sm">
                     <li className="flex justify-between"><span>Starter (&lt; 200 txns)</span> <span className="font-bold">$199/mo</span></li>
                     <li className="flex justify-between"><span>Growth (200-600 txns)</span> <span className="font-bold">$349/mo</span></li>
                     <li className="flex justify-between"><span>Scale (600+ txns)</span> <span className="font-bold">$549/mo</span></li>
                   </ul>
                </div>
              </div>
            </div>
            <div className="p-8 pt-0 mt-auto">
              <Button fullWidth>Book a Free Assessment</Button>
            </div>
          </Reveal>

        </div>
      </div>

      <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-slate-50 p-10 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">How Is This So Affordable?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">1. We use free tools</h3>
              <p className="text-sm text-slate-600">We're a nonprofit. We get the same perks we help you activate. Google Workspace, Microsoft 365, Canva Pro, Slack—all free.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">2. We automate everything</h3>
              <p className="text-sm text-slate-600">Automation means we can serve more clients at lower rates. We pass those savings to you.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">3. Not trying to get rich</h3>
              <p className="text-sm text-slate-600">We're a 501(c)(3). Profit funds our community projects. Not venture capital. Not shareholders.</p>
            </div>
          </div>
          <p className="mt-8 text-center text-slate-500 italic text-sm">
            Competitors charge $500-$2,000/month for Google Ad Grants alone. We include it in our $199 Starter tier.
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Questions?</p>
          <a href="mailto:services@gifteddreamers.org" className="text-primary hover:text-accent font-medium transition-colors">services@gifteddreamers.org</a>
        </div>
      </Reveal>
    </div>
  );
};

export default Services;