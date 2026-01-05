import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { Mail, User, Building, MessageSquare, CheckCircle, AlertCircle, Phone, Linkedin, Calendar, Briefcase, Globe } from 'lucide-react';
import { trackFormSubmission } from '../lib/analytics';

interface ContactFormProps {
  formType?: 'contact' | 'booking';
  title?: string;
  subtitle?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formType = 'contact',
  title = 'Get in Touch',
  subtitle = 'Fill out the form below and we\'ll get back to you within 24 hours.'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    linkedin: '',
    meetingPreference: '',
    title: '',
    department: '',
    companyUrl: '',
    message: '',
    formType: formType
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // n8n webhook URL
      const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://n8n.cloudpublica.org/webhook/leads';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'website'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Track conversion for Google Ad Grants
      trackFormSubmission(formType, formData.company);

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        linkedin: '',
        meetingPreference: '',
        title: '',
        department: '',
        companyUrl: '',
        message: '',
        formType: formType
      });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email us directly at services@gifteddreamers.org');
      // Log error for debugging in development
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error('Form submission error:', error);
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">{title}</h2>
        <p className="text-slate-600">{subtitle}</p>
      </div>

      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-green-900">Thank you for reaching out!</p>
            <p className="text-sm text-green-700">We'll get back to you within 24 hours.</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-900">Oops! Something went wrong.</p>
            <p className="text-sm text-red-700">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
              <User className="inline h-4 w-4 mr-1" />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="Jane Smith"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
              <Mail className="inline h-4 w-4 mr-1" />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="jane@example.org"
            />
          </div>
        </div>

        {/* Row 2: Company and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
              <Building className="inline h-4 w-4 mr-1" />
              Company / Organization *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="Your Organization Name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
              <Phone className="inline h-4 w-4 mr-1" />
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        {/* Row 3: LinkedIn and Meeting Preference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="linkedin" className="block text-sm font-semibold text-slate-700 mb-2">
              <Linkedin className="inline h-4 w-4 mr-1" />
              LinkedIn Profile
            </label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>

          <div>
            <label htmlFor="meetingPreference" className="block text-sm font-semibold text-slate-700 mb-2">
              <Calendar className="inline h-4 w-4 mr-1" />
              Preferred Meeting Type
            </label>
            <select
              id="meetingPreference"
              name="meetingPreference"
              value={formData.meetingPreference}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
            >
              <option value="">Select preference...</option>
              <option value="video">Video Call (Zoom/Meet)</option>
              <option value="phone">Phone Call</option>
              <option value="email">Email Only</option>
            </select>
          </div>
        </div>

        {/* Row 4: Title and Department (Optional) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-slate-700 mb-2">
              <Briefcase className="inline h-4 w-4 mr-1" />
              Job Title
              <span className="text-slate-400 font-normal ml-1">(optional)</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="Executive Director"
            />
          </div>

          <div>
            <label htmlFor="department" className="block text-sm font-semibold text-slate-700 mb-2">
              <Building className="inline h-4 w-4 mr-1" />
              Department
              <span className="text-slate-400 font-normal ml-1">(optional)</span>
            </label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="Operations"
            />
          </div>
        </div>

        {/* Row 5: Company URL (Optional) */}
        <div>
          <label htmlFor="companyUrl" className="block text-sm font-semibold text-slate-700 mb-2">
            <Globe className="inline h-4 w-4 mr-1" />
            Organization Website
            <span className="text-slate-400 font-normal ml-1">(optional)</span>
          </label>
          <input
            type="url"
            id="companyUrl"
            name="companyUrl"
            value={formData.companyUrl}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="https://yourorganization.org"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
            <MessageSquare className="inline h-4 w-4 mr-1" />
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your organization and how we can help..."
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </Button>

        <p className="text-xs text-slate-500 text-center">
          By submitting this form, you agree to our{' '}
          <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
