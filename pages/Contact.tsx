import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';
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
              Ready to unlock free enterprise tools for your nonprofit? Let's talk about how we can help.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Contact Form */}
            <Reveal>
              <div className="lg:col-span-2">
                <ContactForm 
                  formType="contact"
                  title="Send Us a Message"
                  subtitle="Fill out the form below and we'll get back to you within 24 hours."
                />
              </div>
            </Reveal>

            {/* Email */}
            <Reveal delay={100}>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-6">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Email Us</h3>
                <p className="text-slate-600 mb-6">
                  Send us a message and we'll get back to you within 24 hours.
                </p>
                <a href="mailto:services@gifteddreamers.org" className="block">
                  <Button variant="outline" fullWidth>
                    services@gifteddreamers.org
                  </Button>
                </a>
              </div>
            </Reveal>

            {/* Location */}
            <Reveal delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Location</h3>
                <p className="text-slate-600 mb-2">
                  <strong>Gifted Dreamers, Inc.</strong>
                </p>
                <p className="text-slate-600">
                  Austin, Texas<br/>
                  Serving nonprofits nationwide
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
                    We'll help you apply, set up, and maintain access to your free enterprise tools.
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
