import React, { useState } from 'react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { Search } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  { category: 'Common Cloud', question: 'What is Gifted Dreamers?', answer: 'Gifted Dreamers is a 501(c)(3) nonprofit that helps small nonprofits and entrepreneurs access $380K+ in free enterprise tools.' },
  { category: 'Donations', question: 'Is my donation tax-deductible?', answer: 'Yes! Gifted Dreamers is a 501(c)(3) nonprofit organization (EIN #39-3863796).' },
  { category: 'Matching Gifts', question: 'What are matching gifts?', answer: 'Matching gifts are charitable donations that employers match for their employees.' },
  { category: 'Volunteering', question: 'What are volunteer grants?', answer: 'Corporate giving programs where companies donate to nonprofits based on employee volunteer hours.' },
  { category: 'Technical', question: 'Is your work open source?', answer: 'Yes, we document our processes openly. Learn it → Document it → Teach it → Get paid.' },
  { category: 'Contact', question: 'How can I contact Gifted Dreamers?', answer: 'Email services@gifteddreamers.org or connect with Kristine Socall on LinkedIn.' },
  // Add more as needed based on the prompt content
];

const categories = ['All', 'Common Cloud', 'Donations', 'Matching Gifts', 'Volunteering', 'Technical', 'Contact'];

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section
        className="relative text-white overflow-hidden min-h-[50vh] flex items-center"
        style={{
          backgroundImage: 'url(/images/faq-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/60"></div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 py-16">
          <Reveal className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-slate-100 mb-8">Find answers to common questions about Gifted Dreamers, donations, matching gifts, and volunteering.</p>
            
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
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat 
                ? 'bg-primary text-white' 
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="space-y-6">
          {filteredFAQs.map((faq, idx) => (
            <Reveal key={idx} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 block">{faq.category}</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h3>
              <p className="text-slate-600">{faq.answer}</p>
            </Reveal>
          ))}
          {filteredFAQs.length === 0 && (
            <div className="text-center text-slate-500 py-10">No results found.</div>
          )}
        </div>

        <Reveal delay={200} className="mt-16 text-center bg-slate-50 p-8 rounded-xl">
           <h3 className="font-bold text-slate-900 mb-2">Still have questions?</h3>
           <p className="text-slate-600 mb-6">Can't find the answer you're looking for? Reach out to our team.</p>
           <a href="mailto:services@gifteddreamers.org" className="text-primary font-medium hover:underline">Contact Us</a>
        </Reveal>
      </div>
    </div>
  );
};

export default FAQ;