import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import LogoCloud from '../components/LogoCloud';

// Images from public folder - hardcoded paths for reliability
const heroImage = '/Austin_skyline.jpeg';
const profileImage = '/kristine-socall.jpg';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section
        className="relative text-white overflow-hidden min-h-[85vh] flex items-center bg-slate-900"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Technology overlay images */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <img 
            src="/images/tech-overlay-1.png" 
            alt="" 
            className="absolute top-10 right-20 w-64 h-64 opacity-20 mix-blend-screen"
          />
          <img 
            src="/images/tech-overlay-2.png" 
            alt="" 
            className="absolute bottom-20 right-40 w-48 h-48 opacity-15 mix-blend-screen"
          />
          <img 
            src="/images/tech-overlay-3.png" 
            alt="" 
            className="absolute top-1/2 right-10 w-56 h-56 opacity-10 mix-blend-screen"
          />
        </div>
        
        {/* Gradient box on left for text */}
        <div className="absolute left-0 top-0 bottom-0 w-full lg:w-3/5 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-transparent z-[2]"></div>
        
        {/* Text Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 py-24 md:py-32">
          <Reveal className="max-w-2xl lg:max-w-[55%]">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                <span className="text-white">$380K in Free Tools.</span><br/>
                <span className="text-accent">We'll Help You Get Them.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-100 mb-6 font-light">
                Google, Microsoft, Salesforce, Datadog, and 200+ companies give away enterprise tools to nonprofits and startups.
              </p>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl">
                Most organizations don't know these programs exist. We do. We activate perks, clean up books, and automate workflows—at prices that make sense.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" variant="primary" className="px-10">
                    Hire Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="https://gifteddreamers.substack.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 transition-all">
                    Subscribe on Substack
                  </Button>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Hook / Stats */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What You're Missing</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <Reveal delay={100}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 border-t-4 border-t-primary h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-6">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$10,000/mo</div>
                <div className="text-sm font-bold uppercase text-primary mb-4 tracking-wide">Free Google Ads</div>
                <p className="text-slate-600">
                  Google Ad Grants gives nonprofits $10K/month in advertising. 75% never activate it. Of those who do, 60% lose compliance.
                </p>
              </div>
            </Reveal>

            {/* Stat 2 */}
            <Reveal delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 border-t-4 border-t-accent h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 text-accent rounded-full mb-6">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$380,000/yr</div>
                <div className="text-sm font-bold uppercase text-accent mb-4 tracking-wide">Wasted Per Org</div>
                <p className="text-slate-600">
                  That's what we tracked in our own perks database. Google, Datadog, Salesforce, GitLab, Canva—475+ programs.
                </p>
              </div>
            </Reveal>

            {/* Stat 3 */}
            <Reveal delay={300}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 border-t-4 border-t-primary h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-6">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">25 Years</div>
                <div className="text-sm font-bold uppercase text-primary mb-4 tracking-wide">Crisis Cleanup</div>
                <p className="text-slate-600">
                  Multi-year retroactive corrections. 350+ bank accounts. 15 currencies. When your books are a mess, we've seen worse.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Logo Cloud - Enterprise Tools */}
      <LogoCloud />

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">We Fix Messes. We Find Free Stuff.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Tech Perks */}
            <Reveal className="flex flex-col h-full group">
              <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden mb-6 relative shadow-lg">
                <img src="/images/dashboard-analytics.jpg" alt="Dashboard showing tech perks analytics" width="800" height="570" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Perks Audit</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Tech Perks Audit</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                We know every nonprofit perk program. Google, Microsoft, Salesforce, Canva, Slack, Notion, Zoom, Datadog, GitLab, and 200+ more. We'll review what you qualify for, help you apply, and build automations so you never lose access.
              </p>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-slate-700">2-hour session</span>
                  <span className="font-bold text-slate-900">$150</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-700">Follow-up</span>
                  <span className="text-slate-600">$100/90 min</span>
                </div>
              </div>
              <Link to="/services" className="text-primary font-bold hover:text-primary-dark flex items-center group">
                Learn more about Perks <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>

            {/* Accounting */}
            <Reveal className="flex flex-col h-full group" delay={150}>
              <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden mb-6 relative shadow-lg">
                <img src="/images/accounting-papers.jpg" alt="Accounting documents and financial papers" width="800" height="459" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">Accounting</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Accounting Cleanup</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                Your books are behind. Your categories are wrong. Tax time is panic time. We clean up the mess, set up QuickBooks properly, and train you (or your staff) to maintain it going forward.
              </p>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 mb-6">
                 <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-slate-700">Monthly Bookkeeping</span>
                  <span className="font-bold text-slate-900">Starts at $199/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-700">Cleanup Projects</span>
                  <span className="text-slate-600">$500 - $1,500</span>
                </div>
              </div>
              <Link to="/services" className="text-accent font-bold hover:text-accent-hover flex items-center group">
                Learn more about Cleanup <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
           <Reveal className="mt-16 text-center">
            <Link to="/contact">
              <Button size="lg" className="px-12">Contact Us</Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-24 bg-primary text-white">
        <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Free Knowledge. Weekly.</h2>
          <p className="text-xl text-slate-100 mb-8 leading-relaxed font-light">
            Every week we share what we learn: Which perks just opened applications, automation templates you can copy, real talk about nonprofit tech, and AI tools that actually work.
          </p>
          <p className="text-2xl font-bold text-accent mb-10">We're building in public. Follow along.</p>
          <a href="https://gifteddreamers.substack.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary transition-all transform hover:scale-105">
              Subscribe on Substack
            </Button>
          </a>
        </Reveal>
      </section>

      {/* Credibility */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <Reveal className="w-full md:w-2/5">
              <div className="aspect-square rounded-2xl overflow-hidden border-8 border-slate-50 shadow-2xl rotate-2">
                <img src={profileImage} alt="Kristine Socall, Founder of Gifted Dreamers" width="600" height="599" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal className="w-full md:w-3/5" delay={200}>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 uppercase tracking-widest">About the Founder</div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">25 Years as a Crisis Translator</h2>
              <p className="text-slate-700 italic mb-6 text-xl border-l-4 border-accent pl-6 bg-slate-50 py-4 rounded-r-lg">
                "I untangle complexity for a living. I fix what others broke."
              </p>
              <div className="space-y-4 text-slate-600">
                <p>
                  Futures clearing firms. SaaS startups. Nonprofits of every size. 350+ bank accounts. 15 currencies. $2.8B in client assets. Multi-year retroactive corrections when the previous accountant made a mess.
                </p>
                <p>
                  The tech is new. The skill is the same. 6 months ago I'd never used AI. Now I'm running a full-stack app and documenting what AI experts with paid Substacks haven't figured out yet.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-lg">Kristine Socall, MBA</div>
                <div className="text-primary font-bold">Founder & Executive Director</div>
                <div className="text-slate-500 text-sm">QuickBooks Online ProAdvisor</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Ready to Find Your Free Stuff?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
             <Link to="/contact">
               <Button size="lg" className="px-10">Contact Us</Button>
             </Link>
             <a href="https://gifteddreamers.substack.com" target="_blank" rel="noopener noreferrer">
               <Button size="lg" variant="outline" className="px-10">Subscribe on Substack</Button>
             </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-slate-600">
             <Link to="/services" className="hover:text-primary transition-colors flex items-center gap-1">Our Services <ArrowRight className="h-4 w-4" /></Link>
             <Link to="/volunteer" className="hover:text-primary transition-colors flex items-center gap-1">Volunteer <ArrowRight className="h-4 w-4" /></Link>
             <Link to="/gruhp" className="hover:text-primary transition-colors flex items-center gap-1">Donate to GRUHP <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;