import React from 'react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { Video, MessageCircle, FileText, Calendar } from 'lucide-react';

const CommonCloud: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section
        className="relative text-white overflow-hidden min-h-[60vh] flex items-center bg-slate-900"
        style={{
          backgroundImage: 'url(/images/common-cloud-hero.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/80"></div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 py-24">
          <Reveal className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Common Cloud: The Learning Community</h1>
            <p className="text-xl md:text-2xl text-slate-100 font-light">
              Free knowledge. Real community. No gatekeeping.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Reveal className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
             <Calendar className="h-10 w-10 text-accent mb-4" />
             <h3 className="text-xl font-bold mb-2">Weekly Calls</h3>
             <p className="text-slate-600 mb-4">Open office hours. Bring your questions about nonprofit tech perks, automation, and AI tools.</p>
             <p className="text-sm font-medium text-slate-500">Every Friday, 12PM CT</p>
          </Reveal>
          <Reveal delay={100} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
             <FileText className="h-10 w-10 text-accent mb-4" />
             <h3 className="text-xl font-bold mb-2">Blog / Substack</h3>
             <p className="text-slate-600 mb-4">Deep dives on perks, automation templates, AI experiments. Subscribe for free weekly updates.</p>
             <a href="https://gifteddreamers.substack.com" target="_blank" rel="noopener noreferrer">
               <Button variant="outline" size="sm">Subscribe</Button>
             </a>
          </Reveal>
          <Reveal delay={200} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
             <Video className="h-10 w-10 text-accent mb-4" />
             <h3 className="text-xl font-bold mb-2">Video Library</h3>
             <p className="text-slate-600 mb-4">Recorded walkthroughs of grants, Canva Pro setup, n8n automation templates. (Coming Q1 2026)</p>
          </Reveal>
          <Reveal delay={300} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
             <MessageCircle className="h-10 w-10 text-accent mb-4" />
             <h3 className="text-xl font-bold mb-2">Community Chat</h3>
             <p className="text-slate-600 mb-4">Matrix/Element room for async questions. Help when you need it. No salespeople.</p>
{/* TODO: Update room ID once created on matrix.commoncloud.cc */}
             <a href="https://matrix.to/#/#gifteddreamers:commoncloud.cc" target="_blank" rel="noopener noreferrer">
               <Button variant="outline" size="sm">Join Community</Button>
             </a>
          </Reveal>
        </div>

        <Reveal className="max-w-5xl mx-auto text-center mb-16">
           <h2 className="text-2xl font-bold text-slate-900 mb-6">Why We Give This Away</h2>
           <p className="text-lg text-slate-600 mb-6">
             Most knowledge is locked behind $500/month coaching programs or enterprise software training. We think that's backwards. The playbooks exist. The tools are free. We just share them.
           </p>
           <div className="bg-slate-50 p-8 rounded-xl">
             <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-6">
               {/* Learn It */}
               <div className="flex flex-col items-center">
                 <img src="/images/learn.svg" alt="Learn" className="w-20 h-20 mb-3" />
                 <p className="font-bold text-primary text-lg">LEARN IT</p>
               </div>
               
               <div className="text-3xl text-slate-400 hidden md:block">→</div>
               
               {/* Document It */}
               <div className="flex flex-col items-center">
                 <img src="/images/document.svg" alt="Document" className="w-20 h-20 mb-3" />
                 <p className="font-bold text-accent text-lg">DOCUMENT IT</p>
               </div>
               
               <div className="text-3xl text-slate-400 hidden md:block">→</div>
               
               {/* Teach It */}
               <div className="flex flex-col items-center">
                 <img src="/images/teach.jpg" alt="Teach" className="w-20 h-20 mb-3 object-contain" />
                 <p className="font-bold text-primary text-lg">TEACH IT</p>
               </div>
               
               <div className="text-3xl text-slate-400 hidden md:block">→</div>
               
               {/* Get Paid */}
               <div className="flex flex-col items-center">
                 <img src="/images/payment.svg" alt="Get Paid" className="w-20 h-20 mb-3" />
                 <p className="font-bold text-accent text-lg">GET PAID</p>
               </div>
             </div>
             <p className="text-sm font-normal text-slate-500">(IF YOU WANT US TO DO IT)</p>
           </div>
        </Reveal>
      </div>
    </div>
  );
};

export default CommonCloud;
