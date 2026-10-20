import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { RESUME_INFO } from '../data/resumeData.ts';

interface ContactSectionProps {
  onOpenOpportunityModal: () => void;
}

export function ContactSection({ onOpenOpportunityModal }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    opportunityType: 'Full-time Senior Frontend',
    locationPreference: 'Remote / Flexible',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(RESUME_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const constructEmailSubject = () => {
    return `[${formData.opportunityType}] Opportunity from ${formData.company || 'Employer'} — via Portfolio`;
  };

  const constructEmailBody = () => {
    return `Hello Kathir,

My name is ${formData.name || '[Name]'} from ${formData.company || '[Company]'}.

We have an opportunity that aligns with your 8+ years of enterprise SaaS experience:
- Opportunity Type: ${formData.opportunityType}
- Work Arrangement: ${formData.locationPreference}
- Sender Email: ${formData.email}

Message / Role Details:
${formData.message || 'We would love to discuss potential opportunities with you.'}

Best regards,
${formData.name || ''}
${formData.company || ''}`;
  };

  const mailtoUrl = `mailto:${RESUME_INFO.email}?subject=${encodeURIComponent(
    constructEmailSubject()
  )}&body=${encodeURIComponent(constructEmailBody())}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    setSubmitted(true);
  };

  const handleCopyFormattedBody = () => {
    const fullContent = `To: ${RESUME_INFO.email}\nSubject: ${constructEmailSubject()}\n\n${constructEmailBody()}`;
    navigator.clipboard.writeText(fullContent);
    setCopiedBody(true);
    setTimeout(() => setCopiedBody(false), 2000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 border-b border-slate-200 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
            <span>Direct Communication</span>
            <span aria-hidden="true">·</span>
            <span>Employer Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
            Let's discuss how my experience can scale your engineering organization
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Whether you are hiring for a Senior Frontend, Full-Stack, or Systems Engineering role, or seeking architectural guidance on high-scale web applications, reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Fast Options */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Mail Card */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-md space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-blue-600 text-white rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Direct Email Delivery</h3>
                  <p className="text-xs text-slate-400">Primary inbox for recruiters and employers</p>
                </div>
              </div>

              <div className="p-3 bg-slate-800 rounded-lg flex items-center justify-between gap-3 text-xs">
                <span className="font-mono text-slate-200">{RESUME_INFO.email}</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <a
                  href={`mailto:${RESUME_INFO.email}?subject=Opportunity%20Discussion%20with%20Kathir`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Mail App</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenOpportunityModal}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Email Templates</span>
                </button>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide">
                Direct Channels & Coordinates
              </h4>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-slate-500" />
                    <div>
                      <div className="font-medium text-slate-900">Phone & WhatsApp</div>
                      <div className="font-mono text-slate-600">{RESUME_INFO.phone}</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="p-1.5 text-slate-500 hover:text-slate-900 rounded"
                    title="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 bg-slate-50 rounded-lg">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                  <div>
                    <div className="font-medium text-slate-900">Location</div>
                    <div className="text-slate-600">{RESUME_INFO.location} (Open to Remote & Select Relocation)</div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-lg text-xs text-blue-900 space-y-1">
                <div className="font-semibold">Availability & Engagement</div>
                <p className="text-blue-800/90 leading-relaxed">
                  Available for full-time senior / lead engineering positions, high-impact contract roles, and technical architecture advisory.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Employer Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-1">Send a Direct Opportunity Message</h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill out the role details below to connect or generate a pre-formatted email dispatch.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-emerald-900">Opportunity Drafted Successfully!</h4>
                    <p className="text-xs text-emerald-800 mt-1 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold">{formData.name}</span>. Your message for the <span className="font-semibold">{formData.opportunityType}</span> role at <span className="font-semibold">{formData.company}</span> is ready for transmission.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Dispatch via Email Client</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyFormattedBody}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
                    >
                      {copiedBody ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>Copy Message Text</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 text-xs text-slate-600 hover:text-slate-900 cursor-pointer"
                    >
                      Edit Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Work Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company / Organization <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Corp"
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Opportunity Scope
                      </label>
                      <select
                        value={formData.opportunityType}
                        onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 text-slate-900"
                      >
                        <option value="Full-time Senior Frontend">Full-time Senior Frontend Engineer</option>
                        <option value="Full-time Full-Stack Engineer">Full-time Full-Stack Engineer</option>
                        <option value="Engineering Lead / Staff Engineer">Engineering Lead / Staff Engineer</option>
                        <option value="Architecture & Performance Consulting">Architecture & Performance Consulting</option>
                        <option value="Contract / Project-based">Contract / Project-based</option>
                        <option value="Other Opportunity">Other Opportunity</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Work Arrangement
                    </label>
                    <select
                      value={formData.locationPreference}
                      onChange={(e) => setFormData({ ...formData, locationPreference: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 text-slate-900"
                    >
                      <option value="Remote / Flexible">Remote / Flexible</option>
                      <option value="Hybrid (India)">Hybrid (India)</option>
                      <option value="On-site (Chennai / Bangalore / Tamil Nadu)">On-site (Chennai / Bangalore / Tamil Nadu)</option>
                      <option value="International Relocation">Open to International Relocation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Opportunity Details & Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell Kathir about the team, tech stack, and what challenge this role will solve..."
                      className="w-full p-3 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 text-slate-900 leading-relaxed"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all cursor-pointer active:scale-[0.98]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Direct Message</span>
                    </button>

                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      <span>Or launch pre-filled email client</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
