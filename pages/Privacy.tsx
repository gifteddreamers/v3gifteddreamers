import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import Reveal from '../components/Reveal';

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8" />
              <span className="text-sm font-medium uppercase tracking-wider opacity-80">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-slate-100">Last updated: January 4, 2026</p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <Reveal>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Gifted Dreamers ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website gifteddreamers.org and use our services.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  As a 501(c)(3) nonprofit organization helping other nonprofits access technology resources, we take data protection seriously. Your privacy matters to us.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>

                <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">Information You Provide</h3>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>Contact information (name, email address) when you contact us or request services</li>
                  <li>Organization information when you inquire about tech perks or accounting services</li>
                  <li>Donation information processed through our secure payment processor, Givebutter</li>
                  <li>Volunteer application details (skills, availability, employer information)</li>
                  <li>Communications you send to us</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">Automatically Collected Information</h3>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>Device and browser information</li>
                  <li>IP address (anonymized for analytics)</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referring website</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>Process service inquiries and provide tech perks audits</li>
                  <li>Process donations and provide tax receipts</li>
                  <li>Communicate with you about our programs and services</li>
                  <li>Coordinate volunteer activities</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Send newsletters and updates (with your consent)</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Services</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We use the following third-party services that may collect information:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>
                    <strong>Givebutter:</strong> Payment processing for donations. See{' '}
                    <a href="https://givebutter.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      Givebutter's Privacy Policy
                    </a>
                  </li>
                  <li>
                    <strong>Google Analytics:</strong> Website analytics to improve user experience. We use IP anonymization.
                  </li>
                  <li>
                    <strong>Microsoft Clarity:</strong> Website behavior analytics for improving user experience.
                  </li>
                  <li>
                    <strong>Double the Donation:</strong> Matching gift and volunteer grant lookup. See{' '}
                    <a href="https://doublethedonation.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      Double the Donation's Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
                <p className="text-slate-600 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information. This includes encryption, secure hosting, and access controls. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability</li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-4">
                  To exercise these rights, contact us at{' '}
                  <a href="mailto:services@gifteddreamers.org" className="text-primary hover:underline">
                    services@gifteddreamers.org
                  </a>
                </p>
              </div>
            </Reveal>

            <Reveal delay={350}>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies</h2>
                <p className="text-slate-600 leading-relaxed">
                  We use essential cookies for website functionality and analytics cookies to understand how visitors use our site. You can control cookies through your browser settings. Disabling cookies may affect your experience on our website.
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
                <p className="text-slate-600 leading-relaxed">
                  Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
                </p>
              </div>
            </Reveal>

            <Reveal delay={450}>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Policy</h2>
                <p className="text-slate-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="text-slate-600">
                  <p><strong className="text-slate-900">Gifted Dreamers, Inc.</strong></p>
                  <p>Email: <a href="mailto:services@gifteddreamers.org" className="text-primary hover:underline">services@gifteddreamers.org</a></p>
                  <p>EIN: 39-3863796</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={550}>
              <div className="mt-12 text-center">
                <Link to="/terms" className="text-primary hover:text-primary-dark font-medium">
                  View our Terms of Service
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
