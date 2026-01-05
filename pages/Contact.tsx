import React from 'react';
import { MapPin } from 'lucide-react';
import Reveal from '../components/Reveal';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-100 max-w-3xl">
              Ready to unlock free & discounted enterprise tools for your nonprofit? Let's talk about how we can help.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Contact Form - Airtable Embed */}
            <Reveal>
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Send Us a Message</h2>
                  <p className="text-slate-600 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
                  <iframe 
                    className="airtable-embed" 
                    src="https://airtable.com/embed/appVDA5VzzPotA1N6/pagVoc7CkkvE7wjHy/form" 
                    frameBorder="0" 
                    width="100%" 
                    height="533" 
                    style={{ background: 'transparent', border: '1px solid #ccc' }}
                    title="Contact Form"
                  />
                </div>
              </div>
            </Reveal>

            {/* Location */}
            <Reveal delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: 'rgba(162, 33, 49, 0.1)', color: '#A22131' }}>
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Location</h3>
                <p className="text-slate-600 mb-2">
                  <strong>Gifted Dreamers, Inc.</strong><br/>
                  501(c)(3) EIN 39-3863796
                </p>
                <p className="text-slate-600">
                  Serving global startups and nonprofits
                </p>
              </div>
            </Reveal>
          </div>

          {/* Additional Info */}
          <Reveal>
            <div className="mt-16 bg-slate-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What to Expect</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">1</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Discovery Call</h3>
                  <p className="text-slate-600">
                    We'll learn about your organization, current tech stack, and goals.
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">2</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Custom Plan</h3>
                  <p className="text-slate-600">
                    We'll identify which perks and tools you qualify for and create an action plan.
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">3</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Implementation</h3>
                  <p className="text-slate-600">
                    We'll help you apply, set up, and maintain access to your free & discounted enterprise tools.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
