import React, { useState } from 'react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { Briefcase, Video, FileText, PenTool, Users, CheckCircle, AlertCircle } from 'lucide-react';

// n8n webhook URL for volunteer form submissions
const WEBHOOK_URL = 'https://n8n.cloudpublica.org/webhook/volunteer-form';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  skills: string[];
  message: string;
}

const skillOptions = [
  { value: 'sysadmin', label: 'System Administration' },
  { value: 'security', label: 'Security / DevSecOps' },
  { value: 'ai-ml', label: 'AI / Machine Learning' },
  { value: 'automation', label: 'Automation / n8n' },
  { value: 'accounting', label: 'Accounting / Bookkeeping' },
  { value: 'content', label: 'Content Creation' },
  { value: 'social-media', label: 'Social Media' },
  { value: 'design', label: 'Graphic Design' },
  { value: 'video', label: 'Video Production' },
  { value: 'community', label: 'Community Management' },
];

const Volunteer: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    skills: [],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company,
          skills: formData.skills,
          message: formData.message,
          submittedAt: new Date().toISOString(),
          source: 'v3gifteddreamers',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          skills: [],
          message: '',
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('There was an error submitting your application. Please try again or email volunteer@gifteddreamers.org');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pb-20">
       {/* Enhanced Hero with Impact Stats */}
       <div className="bg-gradient-to-br from-primary via-[#0353A4] to-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/volunteers-collaborating.jpg" className="w-full h-full object-cover" alt="Volunteers collaborating" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
        <Reveal className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1 bg-accent/20 backdrop-blur rounded-full text-sm font-medium text-accent mb-6">
            Corporate Volunteer Programs
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Paid to Volunteer</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-10">
            Your employer probably pays $25-50/hour when you volunteer. You learn skills. We get help. They write a check to the nonprofit. Everyone wins.
          </p>

          {/* Impact Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent">$50</div>
              <div className="text-sm text-slate-300 mt-1">Max per hour</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">10+</div>
              <div className="text-sm text-slate-300 mt-1">Skill areas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent">100%</div>
              <div className="text-sm text-slate-300 mt-1">Remote friendly</div>
            </div>
          </div>
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

          {submitStatus === 'success' ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Application Submitted!</h3>
              <p className="text-green-700">Thank you for your interest in volunteering. We'll be in touch soon!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700 text-sm">{errorMessage}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary p-2 border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary p-2 border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary p-2 border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Company (for volunteer grant lookup)</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g., Microsoft, Google, Salesforce"
                  className="w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary p-2 border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Skills / Interests (select all that apply)</label>
                <div className="grid grid-cols-2 gap-2">
                  {skillOptions.map(skill => (
                    <label
                      key={skill.value}
                      className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                        formData.skills.includes(skill.value)
                          ? 'bg-primary/10 border-primary text-primary'
                          : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.skills.includes(skill.value)}
                        onChange={() => handleSkillToggle(skill.value)}
                        className="sr-only"
                      />
                      <span className={`w-4 h-4 rounded border flex items-center justify-center ${
                        formData.skills.includes(skill.value) ? 'bg-primary border-primary' : 'border-slate-300'
                      }`}>
                        {formData.skills.includes(skill.value) && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </span>
                      <span className="text-sm">{skill.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Tell us about yourself</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="What interests you about volunteering with Gifted Dreamers? What would you like to learn or contribute?"
                  className="w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary p-2 border"
                />
              </div>

              <Button type="submit" fullWidth disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Volunteer Application'}
              </Button>

              <p className="text-xs text-slate-500 text-center">
                By submitting, you agree to be contacted about volunteer opportunities.
                Your information will be stored securely and never shared with third parties.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </div>
  );
};

export default Volunteer;
