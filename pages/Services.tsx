import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Shield } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import OptimizedImage from '../components/OptimizedImage';
// Note: Hero images use direct WebP (not srcSet) to avoid LCP delay

// Brandfetch Logo API - compliant hotlinking (no attribution required)
// Client ID from 1Password: Engineering/BrandFetch - Brand and Transaction API
const BRANDFETCH_CLIENT_ID = '1idtlk0flzi7wjMDPI9';
const getBrandLogo = (domain: string) =>
  `https://cdn.brandfetch.io/${domain}/w/200/h/200/icon?c=${BRANDFETCH_CLIENT_ID}`;

interface ToolLogo {
  name: string;
  url: string;
  domain: string;
}

const toolLogos: ToolLogo[] = [
  // Major cloud/enterprise
  { name: 'Google', domain: 'google.com', url: getBrandLogo('google.com') },
  { name: 'Microsoft', domain: 'microsoft.com', url: getBrandLogo('microsoft.com') },
  { name: 'AWS', domain: 'aws.amazon.com', url: getBrandLogo('aws.amazon.com') },
  { name: 'Salesforce', domain: 'salesforce.com', url: getBrandLogo('salesforce.com') },
  { name: 'Adobe', domain: 'adobe.com', url: getBrandLogo('adobe.com') },
  // Collaboration
  { name: 'Slack', domain: 'slack.com', url: getBrandLogo('slack.com') },
  { name: 'Zoom', domain: 'zoom.us', url: getBrandLogo('zoom.us') },
  { name: 'Notion', domain: 'notion.so', url: getBrandLogo('notion.so') },
  { name: 'Airtable', domain: 'airtable.com', url: getBrandLogo('airtable.com') },
  { name: 'Miro', domain: 'miro.com', url: getBrandLogo('miro.com') },
  { name: 'Monday.com', domain: 'monday.com', url: getBrandLogo('monday.com') },
  { name: 'Linear', domain: 'linear.app', url: getBrandLogo('linear.app') },
  // Dev tools
  { name: 'GitHub', domain: 'github.com', url: getBrandLogo('github.com') },
  { name: 'GitLab', domain: 'gitlab.com', url: getBrandLogo('gitlab.com') },
  { name: 'Figma', domain: 'figma.com', url: getBrandLogo('figma.com') },
  { name: 'Docker', domain: 'docker.com', url: getBrandLogo('docker.com') },
  { name: 'Webflow', domain: 'webflow.com', url: getBrandLogo('webflow.com') },
  { name: 'Bubble', domain: 'bubble.io', url: getBrandLogo('bubble.io') },
  { name: 'Appsmith', domain: 'appsmith.com', url: getBrandLogo('appsmith.com') },
  { name: 'Statamic', domain: 'statamic.com', url: getBrandLogo('statamic.com') },
  // AI
  { name: 'OpenAI', domain: 'openai.com', url: getBrandLogo('openai.com') },
  { name: 'Claude', domain: 'claude.ai', url: getBrandLogo('claude.ai') },
  { name: 'Perplexity', domain: 'perplexity.ai', url: getBrandLogo('perplexity.ai') },
  // Automation
  { name: 'Zapier', domain: 'zapier.com', url: getBrandLogo('zapier.com') },
  { name: 'n8n', domain: 'n8n.io', url: getBrandLogo('n8n.io') },
  // Monitoring
  { name: 'Datadog', domain: 'datadoghq.com', url: getBrandLogo('datadoghq.com') },
  { name: 'PagerDuty', domain: 'pagerduty.com', url: getBrandLogo('pagerduty.com') },
  { name: 'New Relic', domain: 'newrelic.com', url: getBrandLogo('newrelic.com') },
  { name: 'Splunk', domain: 'splunk.com', url: getBrandLogo('splunk.com') },
  // Accounting/Nonprofit
  { name: 'QuickBooks', domain: 'quickbooks.com', url: getBrandLogo('quickbooks.com') },
  // TechSoup not in Brandfetch - using local fallback
  { name: 'TechSoup', domain: 'techsoup.org', url: '/logos/techsoup.svg' },
  { name: 'Givebutter', domain: 'givebutter.com', url: getBrandLogo('givebutter.com') },
  { name: 'Goodstack', domain: 'goodstack.io', url: getBrandLogo('goodstack.io') },
  { name: 'Twilio', domain: 'twilio.com', url: getBrandLogo('twilio.com') },
  // Hardware
  { name: 'HP', domain: 'hp.com', url: getBrandLogo('hp.com') },
  { name: 'Dell', domain: 'dell.com', url: getBrandLogo('dell.com') },
  // Privacy-focused/Self-hosted
  { name: 'Nextcloud', domain: 'nextcloud.com', url: getBrandLogo('nextcloud.com') },
  { name: 'Element', domain: 'element.io', url: getBrandLogo('element.io') },
  // Matrix not in Brandfetch - using local fallback
  { name: 'Matrix', domain: 'matrix.org', url: '/logos/matrix.svg' },
];

const Services: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero with image background */}
      <div className="bg-gradient-to-br from-primary via-[#0353A4] to-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage 
            src="/images/services-hero.jpg" 
            alt="Technology network" 
            className="w-full h-full object-cover opacity-60"
            width={1920}
            height={1080}
            isPriority={true}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent"></div>
        </div>
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-4 py-1 backdrop-blur rounded-full text-sm font-medium mb-6" style={{ backgroundColor: 'rgba(162, 33, 49, 0.2)' }}>
            Trusted by 50+ nonprofits
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tech Perks + Accounting Cleanup + Workflow Automation</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
            We help startups and nonprofits access enterprise tools and fix messy books. Clear pricing. No hidden fees. No dependency.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-accent" /> 475+ perks tracked</div>
            <div className="flex items-center gap-2"><Zap className="h-5 w-5 text-accent" /> Quick turnaround</div>
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
                className="h-6 md:h-8 object-contain hover:opacity-80 transition-all w-auto"
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
               <img src="/images/faq-hero.jpg" alt="Tech Perks dashboard interface" width="800" height="533" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-primary/10"></div>
            </div>
            <div className="p-8 flex-grow">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Tech Perks Audit</h2>
              <p className="font-semibold mb-6" style={{ color: '#A22131' }}>You're probably leaving $100K+ on the table.</p>
              
              <p className="text-slate-600 mb-6">
                We maintain a database of 475+ perks for startups and nonprofits from companies like:
              </p>
              <ul className="space-y-2 mb-8 text-sm text-slate-600">
                <li className="flex items-start"><span className="text-accent mr-2">•</span> <strong>Google</strong>: $10K/month in free ads + Workspace - for nonprofits only</li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span> <strong>Microsoft</strong>: 365 licenses for your team</li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span> <strong>Salesforce</strong>: 10 free enterprise licenses - for nonprofits only</li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span> <strong>Datadog</strong>: $100K in infrastructure monitoring</li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span> <strong>GitLab Ultimate</strong>: $14K/year value</li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span> <strong>Plus</strong>: Canva, Slack, Notion, Zoom, Airtable, and 200+ more</li>
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
              <Link to="/contact">
                <Button fullWidth>Contact Us</Button>
              </Link>
            </div>
          </Reveal>

          {/* Accounting Card */}
          <Reveal className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col h-full" delay={150}>
            <div className="h-48 bg-slate-100 relative">
               <img src="/images/accounting-cleanup.jpg" alt="Accounting and bookkeeping" width="800" height="459" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-primary/10"></div>
            </div>
            <div className="p-8 flex-grow">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Accounting Cleanup</h2>
              <p className="font-semibold mb-6" style={{ color: '#A22131' }}>Your books are a disaster. We've seen worse.</p>
              
              <p className="text-slate-600 mb-6">
                25 years of experience cleaning up multi-year backlogs, botched categorizations, missing reconciliations, and tax deadline panic.
              </p>

              <div className="bg-slate-50 p-6 rounded-lg mb-8">
                 <h3 className="font-bold text-slate-900 mb-4">What we do:</h3>
                 <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700">
                    <li>Assess the damage (free 60-minute call)</li>
                    <li>Quote a fixed price for cleanup</li>
                    <li>Clean it up and document what we did</li>
                    <li>Train you (or your team) to maintain it</li>
                    <li>Optional: Monthly FLAT-FEE bookkeeping going forward. No surprises.</li>
                 </ol>
              </div>

            </div>
            <div className="p-8 pt-0 mt-auto">
              <Link to="/contact">
                <Button fullWidth>Contact Us</Button>
              </Link>
            </div>
          </Reveal>

        </div>
      </div>

      <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-slate-50 p-10 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">How Is This So Affordable?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">1. We use free and discounted tools</h3>
              <p className="text-sm text-slate-600">We're a nonprofit. We get the same perks we help you activate. Google Workspace, Microsoft 365, Canva Pro, Slack—all free or discounted.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">2. We automate everything</h3>
              <p className="text-sm text-slate-600">Automation means we can serve more clients at lower rates. We pass those savings to you.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">3. Not trying to get rich</h3>
              <p className="text-sm text-slate-600">We're a 501(c)(3). Mission revenue directly funds community projects, like <Link to="/gruhp" className="font-semibold hover:underline" style={{ color: '#A22131' }}>GRUHP Fund</Link> - providing direct assistance for people who need it most.</p>
            </div>
          </div>
          <p className="mt-8 text-center text-slate-500 italic text-sm">
            Competitors charge $500-$2,000/month for Google Ad Grants management alone. We include it in our $199 Starter tier.
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Questions?</p>
          <Link to="/contact" className="text-primary hover:text-accent font-medium transition-colors">Contact Us</Link>
        </div>
      </Reveal>
    </div>
  );
};

export default Services;