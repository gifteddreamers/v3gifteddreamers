import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

const About: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section
        className="relative text-white overflow-hidden min-h-[60vh] flex items-center"
        style={{
          backgroundImage: 'url(/images/about-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50"></div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 py-24">
          <Reveal className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Accountant Who Got Tired of Watching Nonprofits Struggle
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 font-light">
              25 years of cleaning up financial messes. Now I'm teaching everyone how to access the same tools Fortune 500 companies use—for free.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Profile Section */}
        <Reveal className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <img 
            src="/kristine-socall.jpg" 
            alt="Kristine Socall, Founder of Gifted Dreamers" 
            className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-primary"
          />
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Kristine Socall</h2>
            <p className="text-lg text-primary font-semibold mb-2">Founder & CEO</p>
            <p className="text-slate-600">MBA | 25 Years in Accounting | Nonprofit Advocate</p>
          </div>
        </Reveal>

        <div className="prose prose-slate max-w-none">
          <Reveal delay={100}>
            <h2 className="text-xl font-bold text-slate-900 mb-4">The 60-Second Version</h2>
            <p className="mb-6">
              I'm Kristine Socall. MBA. 25 years in accounting. I've managed books for organizations from $0 to $300M. Futures clearing firms. SaaS startups. Commercial contractors. Nonprofits.
            </p>
            <p className="mb-6">
              350+ bank accounts. 15 currencies. $2.8B in client assets. I've seen every financial disaster you can imagine. And I've fixed most of them.
            </p>
            <p className="mb-10">
              Now I run Gifted Dreamers—a nonprofit that helps other nonprofits and entrepreneurs access $380K+ in free enterprise tools. Because I got tired of watching small organizations struggle with problems that shouldn't exist.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="text-xl font-bold text-slate-900 mb-4">What Changed</h2>
            <p className="mb-6">
              In 2017, I was serving on grant review panels. I saw good work that didn't get funded because the paperwork was wrong. Then in 2023, I discovered something that made me angry.
            </p>
            <p className="mb-6">
              Google gives nonprofits $10,000/month in free advertising. Microsoft, Salesforce, Canva, Slack—hundreds of companies give away tools worth $100K+ per year. And most nonprofits don't even know these programs exist.
            </p>
            <p className="mb-10">
              I'd spent 25 years cleaning up financial messes. Now I wanted to prevent them.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <h2 className="text-xl font-bold text-slate-900 mb-4">What I Believe</h2>
            <ul className="list-disc pl-5 space-y-2 mb-10">
              <li>Knowledge should be free. Tools should be accessible.</li>
              <li>Small organizations deserve enterprise-quality tools.</li>
              <li>Independence beats dependency.</li>
              <li>Transparency builds trust.</li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={400} className="bg-slate-50 p-8 rounded-xl mt-12 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Want to Work Together?</h2>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <Button>Contact Us</Button>
            </Link>
            <a href="https://gifteddreamers.substack.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Subscribe on Substack</Button>
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default About;