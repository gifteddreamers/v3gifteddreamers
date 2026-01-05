import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import Reveal from '../components/Reveal';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-100 max-w-3xl">
              Ready to unlock free & discounted enterprise tools? Ready to cleanup your accounting books? Let's talk about how we can help.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Contact Form - Native with Analytics */}
            <Reveal className="lg:col-span-2">
              <ContactForm
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you within 24 hours."
              />
            </Reveal>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Location */}
              <Reveal delay={100}>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ backgroundColor: 'rgba(162, 33, 49, 0.1)', color: '#A22131' }}>
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Location</h3>
                  <p className="text-slate-600 mb-2">
                    <strong>Gifted Dreamers, Inc.</strong><br/>
                    Based in Austin, TX<br/>
                    501(c)(3) EIN 39-3863796
                  </p>
                  <p className="text-slate-600 text-sm">
                    Serving global startups and nonprofits remotely
                  </p>
                </div>
              </Reveal>

              {/* Response Time */}
              <Reveal delay={150}>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ backgroundColor: 'rgba(13, 114, 156, 0.1)', color: '#0D729C' }}>
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Response Time</h3>
                  <p className="text-slate-600 text-sm">
                    We respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </Reveal>

              {/* Free Consultation */}
              <Reveal delay={200}>
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl border border-primary/20">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Free Discovery Call</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Book a free 60-minute call to discuss your accounting needs and get a fixed-price quote.
                  </p>
                  <p className="text-xs text-slate-500">
                    Mention "Free Discovery Call" in your message.
                  </p>
                </div>
              </Reveal>
            </div>
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
