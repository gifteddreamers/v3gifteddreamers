import React from 'react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { Video, MessageCircle, FileText, Calendar } from 'lucide-react';

const CommonCloud: React.FC = () => {
  return (
    <div className="pb-20">
       <div className="bg-primary text-white py-20">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Common Cloud: The Learning Community</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Free knowledge. Real community. No gatekeeping.
          </p>
        </Reveal>
      </div>

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

        <Reveal className="max-w-3xl mx-auto text-center mb-16">
           <h2 className="text-2xl font-bold text-slate-900 mb-6">Why We Give This Away</h2>
           <p className="text-lg text-slate-600 mb-6">
             Most knowledge is locked behind $500/month coaching programs or enterprise software training. We think that's backwards. The playbooks exist. The tools are free. We just share them.
           </p>
           <div className="bg-slate-50 p-8 rounded-xl">
             <p className="font-bold text-slate-900 text-lg">
               LEARN IT → DOCUMENT IT → TEACH IT → GET PAID<br/>
               <span className="text-sm font-normal text-slate-500">(IF YOU WANT US TO DO IT)</span>
             </p>
           </div>
        </Reveal>
      </div>
    </div>
  );
};

export default CommonCloud;