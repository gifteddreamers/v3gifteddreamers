import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, HelpCircle } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import OptimizedImage from '../components/OptimizedImage';
import { getHeroImageProps } from '../lib/image-utils';
import { FAQItem } from '../types';

const heroImageProps = getHeroImageProps('/images/faq-hero.jpg');

const faqData: FAQItem[] = [
  // About Gifted Dreamers
  {
    category: "About Gifted Dreamers",
    question: "What is Gifted Dreamers?",
    answer: "Gifted Dreamers is a 501(c)(3) nonprofit that helps small nonprofits and entrepreneurs access $380K+ in free & discounted enterprise tools. We provide tech perks audits, accounting cleanup, and workflow automation services at affordable prices."
  },
  {
    category: "About Gifted Dreamers",
    question: "What services do you offer?",
    answer: "We offer three main services: (1) Tech Perks Audits - 2-hour sessions where we review every perk program you qualify for, starting at $150. (2) Accounting Cleanup - fixing messy books, QuickBooks setup, and ongoing bookkeeping starting at $199/month. (3) Workflow Automation - helping you connect and automate your tools."
  },
  {
    category: "About Gifted Dreamers",
    question: "How is Gifted Dreamers different from TechSoup?",
    answer: "TechSoup is a great resource for discounted software, and we actually help organizations apply through TechSoup! But we go beyond that: we track 475+ perks programs across Google, Microsoft, Salesforce, AWS, Datadog, GitLab, Canva, and many more. Many of these programs aren't available through TechSoup. We also provide hands-on help with applications and renewals."
  },

  // Donations & Tax Deductibility
  {
    category: "Donations & Tax Deductibility",
    question: "Is my donation tax-deductible?",
    answer: "Yes! Gifted Dreamers is a 501(c)(3) nonprofit organization (EIN #39-3863796). All donations are tax-deductible to the full extent allowed by law. You will receive a receipt for your donation that you can use for tax purposes."
  },
  {
    category: "Donations & Tax Deductibility",
    question: "How will my donation be used?",
    answer: "Your donation directly funds our mission: maintaining our perks database, providing subsidized services to small nonprofits, and supporting community projects like the GRUHP Fund which provides direct assistance to people in need."
  },
  {
    category: "Donations & Tax Deductibility",
    question: "What payment methods do you accept?",
    answer: "We accept donations via credit card, debit card, PayPal, Venmo, and bank transfer through our Givebutter donation platform. All transactions are secure and encrypted."
  },
  {
    category: "Donations & Tax Deductibility",
    question: "Can I set up a recurring donation?",
    answer: "Yes! Recurring monthly donations help us sustain our services and provide predictable funding. You can set up recurring donations through any of our Givebutter widgets on the site."
  },

  // Matching Gifts
  {
    category: "Matching Gifts",
    question: "What are matching gifts?",
    answer: "Matching gifts are charitable donations that employers match for their employees. Many companies will match your donation dollar-for-dollar, effectively doubling your impact at no extra cost to you. Some employers even offer 2:1 or 3:1 matching ratios."
  },
  {
    category: "Matching Gifts",
    question: "How do I know if my employer offers matching gifts?",
    answer: "Use the employer search tool on our Matching Gifts page to check if your company participates in matching gift programs. You can also check with your HR department or employee benefits portal."
  },
  {
    category: "Matching Gifts",
    question: "How do I submit a matching gift request?",
    answer: "After making your donation, visit our Matching Gifts page and search for your employer. Follow the instructions provided for your specific company—most employers have an online portal where you can submit match requests. You'll need your donation receipt and our EIN #39-3863796."
  },
  {
    category: "Matching Gifts",
    question: "How long does it take for matching gifts to be processed?",
    answer: "Processing times vary by employer, typically ranging from 30 days to 3 months. Some companies process matches quarterly. We'll work with your employer to ensure your match is processed smoothly."
  },

  // Volunteer Grants & Volunteering
  {
    category: "Volunteer Grants & Volunteering",
    question: "What are volunteer grants?",
    answer: "Volunteer grants (also called Dollars for Doers programs) are corporate giving programs where companies donate to nonprofits based on their employees' volunteer hours. For example, a company might donate $500 to Gifted Dreamers if you volunteer 20 hours."
  },
  {
    category: "Volunteer Grants & Volunteering",
    question: "How do I earn a volunteer grant for Gifted Dreamers?",
    answer: "First, check if your employer offers volunteer grant programs using the tool on our Volunteer page. Then, sign up to volunteer with Gifted Dreamers, track your volunteer hours, and submit them through your employer's volunteer grant portal. We'll provide documentation of your volunteer work."
  },
  {
    category: "Volunteer Grants & Volunteering",
    question: "What volunteer opportunities are available?",
    answer: "We need volunteers with skills in software development, design, content creation, community management, documentation, testing, and outreach. Fill out the volunteer form on our Volunteer page to let us know your interests and availability."
  },
  {
    category: "Volunteer Grants & Volunteering",
    question: "Do I need technical skills to volunteer?",
    answer: "Not necessarily! While we welcome developers and designers, we also need help with content writing, community outreach, documentation, user testing, event coordination, and social media management. There are opportunities for all skill levels."
  },
  {
    category: "Volunteer Grants & Volunteering",
    question: "Can I volunteer remotely?",
    answer: "Yes! Most volunteer opportunities are remote and flexible. We're a distributed team working across time zones, so you can contribute from anywhere with an internet connection."
  },

  // Tech Perks
  {
    category: "Tech Perks",
    question: "What is a Tech Perks Audit?",
    answer: "A Tech Perks Audit is a 2-hour session where we review your organization against our database of 475+ perks programs. We identify everything you qualify for, help you apply during the session, and set up renewal reminders so you never lose access."
  },
  {
    category: "Tech Perks",
    question: "What perks programs do you track?",
    answer: "We track programs from Google (Ad Grants, Workspace), Microsoft (365, Azure), Salesforce (10 free licenses), AWS, Datadog ($100K credits), GitLab Ultimate ($14K/year), Canva Pro, Slack, Notion, Airtable, Zoom, Figma, and 200+ more. New programs are added regularly."
  },
  {
    category: "Tech Perks",
    question: "How much can I save with tech perks?",
    answer: "The average organization we work with qualifies for $50,000-$380,000+ in annual perks. Google Ad Grants alone is worth $120,000/year ($10K/month). Many organizations don't know these programs exist or don't have time to apply."
  },
  {
    category: "Tech Perks",
    question: "Do you help with Google Ad Grants?",
    answer: "Yes! We help you apply for Google Ad Grants ($10,000/month in free Google Ads) and maintain compliance. 75% of nonprofits never activate their grant, and 60% of those who do lose compliance. We help you avoid both pitfalls."
  },
  {
    category: "Tech Perks",
    question: "What if I've already applied and been rejected?",
    answer: "We can help! Sometimes applications are rejected due to technicalities or incomplete documentation. We review why you were rejected and help you reapply correctly. Many rejections can be overturned with the right approach."
  },

  // Accounting Services
  {
    category: "Accounting Services",
    question: "What accounting services do you offer?",
    answer: "We offer: (1) Accounting Cleanup - fixing multi-year backlogs, recategorizing transactions, and reconciling accounts. (2) QuickBooks Setup - properly configuring your QuickBooks Online with correct chart of accounts. (3) Monthly Bookkeeping - flat-fee ongoing bookkeeping starting at $199/month."
  },
  {
    category: "Accounting Services",
    question: "Can you fix years of messy books?",
    answer: "Absolutely. Our founder has 25 years of experience cleaning up multi-year backlogs, 350+ bank accounts, 15 currencies, and $2.8B in client assets. If your books are a disaster, we've seen worse."
  },
  {
    category: "Accounting Services",
    question: "Do you prepare taxes?",
    answer: "We provide bookkeeping services, not tax preparation. However, clean books make tax time much easier! We'll prepare your books so your CPA or tax preparer can file your returns without issues."
  },
  {
    category: "Accounting Services",
    question: "What accounting software do you use?",
    answer: "We primarily work with QuickBooks Online and can help you set it up properly. Our founder is a QuickBooks Online ProAdvisor. We can also work with other accounting software if needed."
  },

  // Contact & Support
  {
    category: "Contact & Support",
    question: "How can I contact Gifted Dreamers?",
    answer: "You can reach us through our contact form, or email us at services@gifteddreamers.org. You can also connect with our founder Kristine Socall on LinkedIn at linkedin.com/in/kristinesocall."
  },
  {
    category: "Contact & Support",
    question: "Do you offer free consultations?",
    answer: "Yes! We offer a free 60-minute discovery call for accounting services to assess your needs and provide a fixed-price quote. For tech perks, the $150 audit fee is applied as a credit toward any follow-up services."
  },
  {
    category: "Contact & Support",
    question: "Where are you located?",
    answer: "We're based in Texas but work with organizations globally. All our services are delivered remotely via video calls and screen sharing."
  },
  {
    category: "Contact & Support",
    question: "How do I stay updated on new perks and tips?",
    answer: "Subscribe to our newsletter on Substack! Every week we share which perks just opened applications, automation templates you can copy, and real talk about nonprofit tech. It's free."
  },
];

const categories = [
  'All',
  'About Gifted Dreamers',
  'Donations & Tax Deductibility',
  'Matching Gifts',
  'Volunteer Grants & Volunteering',
  'Tech Perks',
  'Accounting Services',
  'Contact & Support'
];

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[50vh] flex items-center">
        <OptimizedImage
          src="/images/faq-hero.jpg"
          alt="FAQ Help Center"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          isPriority={true}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/60"></div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 py-16">
          <Reveal className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <HelpCircle className="h-6 w-6" />
              <span className="text-sm font-medium uppercase tracking-wider">Help Center</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-slate-100 mb-8">Find answers to common questions about our services, donations, matching gifts, and volunteering.</p>

            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-slate-900"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
            </div>
          </Reveal>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Reveal className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 30}>
                <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider mb-1 block" style={{ color: '#A22131' }}>
                        {faq.category}
                      </span>
                      <span className="font-medium text-slate-900">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 flex-shrink-0 ml-4 transition-transform ${openIndex === idx ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  {openIndex === idx && (
                    <div className="px-6 pb-4 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            ))
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">No questions found matching your search.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('All');
                }}
                className="mt-4 text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        <Reveal delay={200} className="mt-16 text-center bg-slate-50 p-8 rounded-xl border border-slate-100">
          <h3 className="font-bold text-slate-900 text-xl mb-2">Still have questions?</h3>
          <p className="text-slate-600 mb-6">Can't find the answer you're looking for? Reach out to our team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="primary">Contact Us</Button>
            </Link>
            <a href="mailto:services@gifteddreamers.org">
              <Button variant="outline">Email Us</Button>
            </a>
          </div>
        </Reveal>

        <Reveal delay={300} className="mt-8 text-center bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20">
          <h3 className="font-bold text-slate-900 text-xl mb-2">Support Our Mission</h3>
          <p className="text-slate-600 mb-6">Help us empower more nonprofits to access the technology they deserve.</p>
          <Link to="/gruhp">
            <Button variant="accent">Donate to GRUHP Fund</Button>
          </Link>
        </Reveal>
      </div>
    </div>
  );
};

export default FAQ;
