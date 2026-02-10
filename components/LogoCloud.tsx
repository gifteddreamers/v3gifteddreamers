import React from 'react';

// Brandfetch Logo API - compliant hotlinking (no attribution required)
// Client ID from 1Password: Engineering/BrandFetch - Brand and Transaction API
const BRANDFETCH_CLIENT_ID = '1idtlk0flzi7wjMDPI9';
const getBrandLogo = (domain: string) =>
  `https://cdn.brandfetch.io/${domain}/w/200/h/200/icon?c=${BRANDFETCH_CLIENT_ID}`;

interface Logo {
  name: string;
  url: string;
  domain: string; // Domain for Brandfetch lookup
}

const logos: Logo[] = [
  // Major cloud/enterprise
  { name: 'Google', domain: 'google.com', url: getBrandLogo('google.com') },
  { name: 'Microsoft', domain: 'microsoft.com', url: getBrandLogo('microsoft.com') },
  { name: 'AWS', domain: 'aws.amazon.com', url: getBrandLogo('aws.amazon.com') },
  { name: 'Cloudflare', domain: 'cloudflare.com', url: getBrandLogo('cloudflare.com') },
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

interface LogoCloudProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const LogoCloud: React.FC<LogoCloudProps> = ({
  title = "Powered By Enterprise Tools",
  subtitle = "We leverage $380K+ in free & discounted nonprofit technology",
  className
}) => {
  const sectionClassName = className ?? 'py-10 sm:py-12 md:py-14 bg-white';
  return (
    <section className={sectionClassName}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-1.5 md:mb-2">{title}</h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-7">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center hover:grayscale hover:opacity-60 transition-all duration-300 flex-shrink-0"
              title={logo.name}
            >
              <img
                src={logo.url}
                alt={logo.name}
                width="28"
                height="28"
                className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 object-contain"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
