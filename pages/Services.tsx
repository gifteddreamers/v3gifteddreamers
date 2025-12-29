import React from 'react';
import { CheckCircle, Zap, Shield, Clock } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

interface ToolLogo {
  name: string;
  url: string;
  maxWidth?: string;
}

const toolLogos: ToolLogo[] = [
  // Major cloud/enterprise
  { name: 'Google', url: '/logos/google.png' },
  { name: 'Microsoft', url: '/logos/microsoft.svg' },
  { name: 'AWS', url: '/logos/aws.svg' },
  { name: 'Salesforce', url: '/logos/salesforce.svg' },
  { name: 'Adobe', url: '/logos/adobe.svg' },
  // Collaboration
  { name: 'Slack', url: '/logos/slack.png' },
  { name: 'Notion', url: '/logos/notion.svg' },
  { name: 'Airtable', url: '/logos/airtable.svg' },
  { name: 'Zoom', url: '/logos/zoom.svg' },
  { name: 'Miro', url: '/logos/miro.svg' },
  // Dev tools
  { name: 'GitHub', url: '/logos/github.svg' },
  { name: 'GitLab', url: '/logos/gitlab.svg' },
  { name: 'Figma', url: '/logos/figma.svg' },
  { name: 'Docker', url: '/logos/docker.svg' },
  // AI
  { name: 'OpenAI', url: '/logos/openai.svg' },
  { name: 'Anthropic', url: '/logos/anthropic.svg', maxWidth: 'max-w-20' },
  // Automation
  { name: 'Zapier', url: '/logos/zapier.svg' },
  { name: 'n8n', url: '/logos/n8n.png' },
  // Monitoring
  { name: 'Datadog', url: '/logos/datadog.png' },
  { name: 'Splunk', url: '/logos/splunk.svg' },
  { name: 'PagerDuty', url: '/logos/pagerduty.svg' },
  { name: 'NewRelic', url: '/logos/newrelic.svg' },
  // Accounting/Nonprofit
  { name: 'QuickBooks', url: '/logos/quickbooks.svg' },
  { name: 'TechSoup', url: '/logos/techsoup.svg' },
  { name: 'Givebutter', url: '/logos/givebutter.svg' },
  { name: 'Twilio', url: '/logos/twilio.svg' },
  // Privacy-focused/Self-hosted
  { name: 'Nextcloud', url: '/logos/nextcloud.svg' },
  { name: 'Element', url: '/logos/element.svg' },
  { name: 'Matrix', url: '/logos/matrix.svg' },
  { name: 'CryptPad', url: '/logos/cryptpad.svg' },
  { name: 'SimpleX', url: '/logos/simplex.svg' },
  { name: 'Kumu', url: '/logos/kumu.svg' },
  { name: 'Canva', url: '/logos/canva.svg' },
];

const Services: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero with gradient background */}
      <div className="bg-gradient-to-br from-primary via-[#0353A4] to-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur rounded-full text-sm font-medium mb-6">
            Trusted by 50+ nonprofits
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tech Perks Audit + Accounting Cleanup</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
            We help small nonprofits access enterprise tools and fix messy books. Clear pricing. No hidden fees. No dependency.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-accent" /> 475+ perks tracked</div>
            <div className="flex items-center gap-2"><Zap className="h-5 w-5 text-accent" /> Same-week turnaround</div>
            <div className="flex items-center gap-2"><Shield className="h-5 w-5 text-accent" /> 501(c)(3) nonprofit</div>
          </div>
        </Reveal>
      </div>

      {/* Tools We Use */}
      <div className="bg-slate-50 py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Tools We Use:</span>
            {toolLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.url}
                alt={logo.name}
                className={`h-6 md:h-8 object-contain hover:opacity-80 transition-all ${logo.maxWidth || 'w-auto'}`}
                title={logo.name}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Tech Perks Card */}
          <Reveal className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col h-full">
            <div className="h-48 bg-slate-100 relative">
               <img src="/images/tech-dashboard.jpg" alt="Tech Perks dashboard interface" width="800" height="533" className="w-full h-full object-cover" />
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
              <a href="https://calendly.com/kristinesocall" target="_blank" rel="noopener noreferrer">
                <Button fullWidth>Book a Perks Session</Button>
              </a>
            </div>
          </Reveal>

          {/* Accounting Card */}
          <Reveal className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col h-full" delay={150}>
            <div className="h-48 bg-slate-100 relative">
               <img src="/images/accounting-papers.jpg" alt="Accounting documents and ledgers" width="800" height="459" className="w-full h-full object-cover" />
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
              <a href="https://calendly.com/kristinesocall" target="_blank" rel="noopener noreferrer">
                <Button fullWidth>Book a Free Assessment</Button>
              </a>
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