import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import Reveal from '../components/Reveal';

const Terms: React.FC = () => {
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
              <FileText className="h-8 w-8" />
              <span className="text-sm font-medium uppercase tracking-wider opacity-80">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
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
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
                <p className="text-slate-600 leading-relaxed">
                  By accessing or using the website gifteddreamers.org ("Site") operated by Gifted Dreamers, Inc., a 501(c)(3) nonprofit organization ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Site or services.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Description of Services</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Gifted Dreamers provides the following services to nonprofits and startups:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li><strong>Tech Perks Audits:</strong> Consultation services to help organizations identify and access free and discounted enterprise software programs.</li>
                  <li><strong>Accounting Cleanup:</strong> Bookkeeping and accounting cleanup services for organizations.</li>
                  <li><strong>Workflow Automation:</strong> Assistance with setting up automated workflows and integrations.</li>
                  <li><strong>Educational Content:</strong> Free resources, guides, and newsletter content about nonprofit technology.</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Limitations</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Please understand the following limitations of our services:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>We help identify and apply for perks programs, but cannot guarantee approval by third-party providers (Google, Microsoft, Salesforce, etc.).</li>
                  <li>Our accounting services are bookkeeping support, not Certified Public Accountant (CPA) services. We recommend consulting a CPA for tax preparation and audit requirements.</li>
                  <li>Perk program availability, terms, and eligibility requirements are set by the provider companies and may change without notice.</li>
                  <li>Our database of perks programs is maintained to the best of our ability but may not include all available programs.</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Payment Terms</h2>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>Service fees are as quoted on our website or in individual service agreements.</li>
                  <li>Payment is due as specified in individual service agreements.</li>
                  <li>Donations are processed through Givebutter and are non-refundable (as charitable contributions).</li>
                  <li>We reserve the right to modify our pricing with reasonable notice.</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">User Responsibilities</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>Provide accurate and complete information about your organization.</li>
                  <li>Use our services only for lawful purposes.</li>
                  <li>Not misrepresent your organization's nonprofit or startup status to obtain perks.</li>
                  <li>Maintain the confidentiality of any login credentials or account access we provide.</li>
                  <li>Comply with the terms of any third-party perks programs you access through our guidance.</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Intellectual Property</h2>
                <p className="text-slate-600 leading-relaxed">
                  The content on this Site, including text, graphics, logos, and software, is the property of Gifted Dreamers or its content suppliers and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission. However, we encourage sharing links to our content and resources.
                </p>
              </div>
            </Reveal>

            <Reveal delay={350}>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Disclaimer of Warranties</h2>
                <p className="text-slate-600 leading-relaxed">
                  Our Site and services are provided "as is" without warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components. We make no guarantees regarding the availability or continued existence of any third-party perks programs.
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
                <p className="text-slate-600 leading-relaxed">
                  To the fullest extent permitted by law, Gifted Dreamers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or in connection with your use of our Site or services. Our total liability shall not exceed the amount you paid for services in the twelve (12) months preceding the claim.
                </p>
              </div>
            </Reveal>

            <Reveal delay={450}>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Indemnification</h2>
                <p className="text-slate-600 leading-relaxed">
                  You agree to indemnify and hold harmless Gifted Dreamers and its officers, directors, employees, and volunteers from any claims, damages, losses, or expenses arising from your use of our services or violation of these Terms.
                </p>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to Terms</h2>
                <p className="text-slate-600 leading-relaxed">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site after changes are posted constitutes acceptance of the modified Terms.
                </p>
              </div>
            </Reveal>

            <Reveal delay={550}>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Governing Law</h2>
                <p className="text-slate-600 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the courts of Texas.
                </p>
              </div>
            </Reveal>

            <Reveal delay={600}>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  If you have questions about these Terms, please contact us:
                </p>
                <div className="text-slate-600">
                  <p><strong className="text-slate-900">Gifted Dreamers, Inc.</strong></p>
                  <p>Email: <a href="mailto:services@gifteddreamers.org" className="text-primary hover:underline">services@gifteddreamers.org</a></p>
                  <p>EIN: 39-3863796</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={650}>
              <div className="mt-12 text-center">
                <Link to="/privacy" className="text-primary hover:text-primary-dark font-medium">
                  View our Privacy Policy
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
