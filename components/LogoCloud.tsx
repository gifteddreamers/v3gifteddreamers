import React from 'react';

interface Logo {
  name: string;
  url: string;
  width?: string; // Custom width for logos that need it
}

const logos: Logo[] = [
  // Major cloud/enterprise
  { name: 'Google', url: '/logos/google.png' },
  { name: 'Microsoft', url: '/logos/microsoft.svg', width: 'w-24' },
  { name: 'AWS', url: '/logos/aws.svg', width: 'w-16' },
  { name: 'Salesforce', url: '/logos/salesforce.svg', width: 'w-20' },
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
  { name: 'Anthropic', url: '/logos/anthropic.svg', width: 'w-20' },
  // Automation
  { name: 'Zapier', url: '/logos/zapier.svg' },
  { name: 'n8n', url: '/logos/n8n.png', width: 'w-10' },
  // Monitoring
  { name: 'Datadog', url: '/logos/datadog.png' },
  { name: 'Splunk', url: '/logos/splunk.svg' },
  { name: 'PagerDuty', url: '/logos/pagerduty.svg' },
  { name: 'NewRelic', url: '/logos/newrelic.svg' },
  // Accounting/Nonprofit
  { name: 'QuickBooks', url: '/logos/quickbooks.svg' },
  { name: 'TechSoup', url: '/logos/techsoup.svg', width: 'w-20' },
  { name: 'Givebutter', url: '/logos/givebutter.svg', width: 'w-20' },
  { name: 'Twilio', url: '/logos/twilio.svg' },
  // Privacy-focused/Self-hosted
  { name: 'Nextcloud', url: '/logos/nextcloud.svg' },
  { name: 'Element', url: '/logos/element.svg' },
  { name: 'Matrix', url: '/logos/matrix.svg' },
  { name: 'CryptPad', url: '/logos/cryptpad.svg', width: 'w-20' },
  { name: 'SimpleX', url: '/logos/simplex.svg', width: 'w-16' },
  { name: 'Kumu', url: '/logos/kumu.svg' },
  { name: 'Canva', url: '/logos/canva.svg', width: 'w-20' },
];

interface LogoCloudProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const LogoCloud: React.FC<LogoCloudProps> = ({
  title = "Powered By Enterprise Tools",
  subtitle = "We leverage $380K+ in free nonprofit technology",
  className = ""
}) => {
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">{title}</h3>
          <p className="text-slate-600">{subtitle}</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="hover:grayscale hover:opacity-60 transition-all duration-300"
              title={logo.name}
            >
              <img
                src={logo.url}
                alt={logo.name}
                className={`h-8 md:h-10 object-contain ${logo.width || 'w-auto'}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
