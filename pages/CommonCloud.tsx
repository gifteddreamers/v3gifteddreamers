import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import OptimizedImage from '../components/OptimizedImage';
import { getHeroImageProps } from '../lib/image-utils';
import { Video, MessageCircle, FileText, Calendar } from 'lucide-react';

const heroImageProps = getHeroImageProps('/images/common-cloud-hero-bg.jpg');

const CommonCloud: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[60vh] flex items-center bg-slate-900">
        <OptimizedImage
          src="/images/common-cloud-hero-bg.jpg"
          alt="Common Cloud Learning Community"
          className="absolute inset-0 w-full h-full object-cover z-0"
          width={1920}
          height={1080}
          isPriority={true}
          loading="eager"
        />
        <OptimizedImage 
          src="/images/network-mesh.jpg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
          width={1920}
          height={1080}
          isPriority={false}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/80"></div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 py-24">
          <Reveal className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Common Cloud<br />
              Learning Community
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 font-light">
              Free knowledge. Real community. No gatekeeping.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Reveal className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
             <Calendar className="h-10 w-10 mb-4" style={{ color: '#A22131' }} />
             <h3 className="text-xl font-bold mb-2">Weekly Calls</h3>
             <p className="text-slate-600 mb-4">Open office hours. Bring your questions about nonprofit tech perks, automation, and AI tools.</p>
             <OptimizedImage 
               src="/images/jitsi-demo.jpg" 
               alt="Security and trust" 
               className="w-full h-48 object-cover rounded-lg mb-4"
               width={800}
               height={450}
               loading="lazy"
             />
             <p className="text-sm font-medium text-slate-500">(Coming Q1 2026)</p>
          </Reveal>
          <Reveal delay={100} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
             <FileText className="h-10 w-10 mb-4" style={{ color: '#A22131' }} />
             <h3 className="text-xl font-bold mb-2">Blog / Substack</h3>
             <p className="text-slate-600 mb-4">Resources for resilience. Deep dives on perks, automation templates, AI experiments. Subscribe for free.</p>
             <OptimizedImage 
               src="/images/blog-substack.jpg" 
               alt="Blog and Substack content" 
               className="w-full h-48 object-cover rounded-lg mb-4"
               width={800}
               height={450}
               loading="lazy"
             />
             <a href="https://gifteddreamers.substack.com" target="_blank" rel="noopener noreferrer">
               <Button variant="outline" size="sm">Subscribe</Button>
             </a>
          </Reveal>
          <Reveal delay={200} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
             <Video className="h-10 w-10 mb-4" style={{ color: '#A22131' }} />
             <h3 className="text-xl font-bold mb-2">Video Library</h3>
             <p className="text-slate-600 mb-4">Recorded walkthroughs of automation templates, perks applications, webapp builds, AI prompts and tips.</p>
             <OptimizedImage 
               src="/images/security-shield.jpg" 
               alt="Security and trust" 
               className="w-full h-48 object-cover rounded-lg mb-4"
               width={800}
               height={450}
               loading="lazy"
             />
             <p className="text-sm font-medium text-slate-500">(Coming Q1 2026)</p>
          </Reveal>
          <Reveal delay={300} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
             <MessageCircle className="h-10 w-10 mb-4" style={{ color: '#A22131' }} />
             <h3 className="text-xl font-bold mb-2">Community Chat</h3>
             <p className="text-slate-600 mb-4">Matrix/Element room for async questions. Help when you need it. No salespeople.</p>
             <OptimizedImage 
               src="/images/community-connect.jpg" 
               alt="Community connection" 
               className="w-full h-48 object-cover rounded-lg mb-4"
               width={800}
               height={450}
               loading="lazy"
             />
             <p className="text-sm text-slate-500">(Coming Q1 2026)</p>
          </Reveal>
        </div>

        <Reveal className="max-w-5xl mx-auto text-center mb-16">
           <h2 className="text-2xl font-bold text-slate-900 mb-6">Why We Give This Away</h2>
           <p className="text-lg text-slate-600 mb-6">
             Most knowledge is locked behind $500/month coaching programs or enterprise software training. We think that's backwards. The playbooks exist. The tools are free or discounted. We just share them.
           </p>
           <div className="bg-slate-50 p-8 rounded-xl">
             <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-6">
               {/* Learn It */}
               <div className="flex flex-col items-center">
                 <img src="/images/learnit.svg" alt="Learn" className="w-20 h-20 mb-3" />
                 <p className="font-bold text-primary text-lg">LEARN IT</p>
               </div>
               
               <div className="text-3xl text-slate-400 hidden md:block">→</div>
               
               {/* Document It */}
               <div className="flex flex-col items-center">
                 <img src="/images/documentit.svg" alt="Document" className="w-20 h-20 mb-3" />
                 <p className="font-bold text-accent text-lg">DOCUMENT IT</p>
               </div>
               
               <div className="text-3xl text-slate-400 hidden md:block">→</div>
               
               {/* Teach It */}
               <div className="flex flex-col items-center">
                 <img src="/images/teachit.svg" alt="Teach" className="w-20 h-20 mb-3" />
                 <p className="font-bold text-primary text-lg">TEACH IT</p>
               </div>
               
               <div className="text-3xl text-slate-400 hidden md:block">→</div>
               
               {/* Get Paid */}
               <div className="flex flex-col items-center">
                 <div className="w-20 h-20 mb-3 flex items-center justify-center">
                   <img src="/images/payus.svg" alt="Get Paid" className="w-full h-full object-contain" />
                 </div>
                 <p className="font-bold text-accent text-lg">PAY US*</p>
               </div>
               
               <div className="text-3xl text-slate-400 hidden md:block">→</div>
               
               {/* Fund GRUHP */}
               <div className="flex flex-col items-center">
                 <Link to="/gruhp" className="hover:opacity-80 transition-opacity">
                   <img src="/images/gruhp.svg" alt="GRUHP" className="w-20 h-20 mb-3" />
                 </Link>
                 <p className="font-bold text-primary text-lg">FUND GRUHP</p>
               </div>
             </div>
             <p className="text-sm font-normal text-slate-500 mb-2 italic">(*If You Want Us to Do it)</p>
             <p className="text-sm font-normal text-slate-600 max-w-2xl mx-auto">
               Mission revenue funds GRUHP—direct assistance for <strong>Groceries</strong>, <strong>Rent</strong>, <strong>Utilities</strong>, <strong>Healthcare</strong>, and <strong>Pets</strong> for people who need it most.
             </p>
           </div>
        </Reveal>
      </div>
    </div>
  );
};

export default CommonCloud;
