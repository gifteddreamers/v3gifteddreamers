import React from 'react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { Briefcase, Video, FileText, PenTool, Users } from 'lucide-react';

const Volunteer: React.FC = () => {
  return (
    <div className="pb-20">
       <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover" alt="Volunteers" />
        </div>
        <Reveal className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Get Paid to Volunteer</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Your employer probably pays $25-50/hour when you volunteer. You learn skills. We get help. They write a check to the nonprofit. Everyone wins.
          </p>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Volunteer Grants Info */}
        <Reveal className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 md:p-12 mb-16">
          <div className="md:flex gap-12 items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
               <h2 className="text-2xl font-bold text-slate-900 mb-4">Volunteer Grants: The Hidden Perk</h2>
               <p className="text-slate-600 mb-6">
                 Thousands of companies pay nonprofits when their employees volunteer. When you volunteer 10 hours with us, your employer might donate $250-500. You don't pay anything. Neither do we. Your company funds the work.
               </p>
               <ul className="space-y-3">
                 <li className="flex items-center text-slate-700 bg-slate-50 p-3 rounded-md">
                   <span className="font-bold w-32">Microsoft</span> $25/hour
                 </li>
                 <li className="flex items-center text-slate-700 bg-slate-50 p-3 rounded-md">
                   <span className="font-bold w-32">Google</span> $50/hour
                 </li>
                 <li className="flex items-center text-slate-700 bg-slate-50 p-3 rounded-md">
                   <span className="font-bold w-32">Salesforce</span> $10,000+ annually
                 </li>
               </ul>
            </div>
            <div className="md:w-1/2 bg-slate-100 rounded-xl p-8 text-center">
               <h3 className="font-bold text-slate-900 mb-4">Does Your Employer Match?</h3>
               <p className="text-sm text-slate-600 mb-6">Many companies have programs you've never heard of. Search your employer below.</p>
               <div className="bg-white rounded-lg overflow-hidden">
                 <iframe
                   src="https://doublethedonation.com/matching-grant-database"
                   width="100%"
                   height="400"
                   style={{ border: 'none' }}
                   title="Double the Donation - Matching Gift Database"
                   allow="clipboard-read; clipboard-write"
                 />
               </div>
            </div>
          </div>
        </Reveal>

        {/* What You'll Learn */}
        <div className="mb-16">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">What You'll Learn (And Create)</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal delay={100} className="bg-slate-50 p-6 rounded-lg">
              <Briefcase className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2">Learn with Kristine</h3>
              <p className="text-slate-600 text-sm">AI tools, automation, nonprofit tech, bookkeeping systems. Real skills you can use in your day job.</p>
            </Reveal>
            <Reveal delay={200} className="bg-slate-50 p-6 rounded-lg">
              <FileText className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2">Document It</h3>
              <p className="text-slate-600 text-sm">Create content: blog posts, video tutorials, templates. This becomes part of our knowledge library.</p>
            </Reveal>
             <Reveal delay={300} className="bg-slate-50 p-6 rounded-lg">
              <Users className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2">Help Clients</h3>
              <p className="text-slate-600 text-sm">Assist with real projects. Watch how things get done. Build your portfolio while making an impact.</p>
            </Reveal>
             <Reveal delay={400} className="bg-slate-50 p-6 rounded-lg">
              <Video className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2">Host Community Calls</h3>
              <p className="text-slate-600 text-sm">Open Source AMA sessions on Element/Matrix. "Ask a tech engineer at Apple anything".</p>
            </Reveal>
             <Reveal delay={500} className="bg-slate-50 p-6 rounded-lg">
              <PenTool className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2">Post Content</h3>
              <p className="text-slate-600 text-sm">LinkedIn, Substack, wherever you have audience. Social proof for us, credibility for you.</p>
            </Reveal>
          </div>
        </div>

        {/* Impact Math */}
        <Reveal className="bg-slate-900 text-white p-10 rounded-2xl text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">Your Time = Our Funding</h3>
          <p className="text-lg text-slate-300 mb-6">
            Get 10 volunteers doing this? That's <span className="text-accent font-bold">$2,500 - $5,000/month</span>.
          </p>
          <p className="text-slate-400">You learn. We get help. Your company writes the check.</p>
        </Reveal>

        {/* Sign Up Form */}
        <Reveal className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Interested in Volunteering?</h2>
          <form className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-slate-200" action="mailto:volunteer@gifteddreamers.org" method="POST" encType="text/plain">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input type="text" name="name" required className="w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" name="email" required className="w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Company (for grant lookup)</label>
              <input type="text" name="company" className="w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary p-2 border" />
            </div>
             <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Skills / Interests</label>
              <input type="text" name="skills" className="w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary p-2 border" />
            </div>
            <div>
               <label className="block text-sm font-medium text-slate-700 mb-1">Hours available per month</label>
              <select name="hours" className="w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary p-2 border">
                <option value="1-5">1-5 hours</option>
                <option value="5-10">5-10 hours</option>
                <option value="10+">10+ hours</option>
              </select>
            </div>
            <Button type="submit" fullWidth>Submit Volunteer Interest</Button>
          </form>
        </Reveal>
      </div>
    </div>
  );
};

export default Volunteer;