import { useState, useId } from 'react';
import { X, Mail, Check, Copy, ExternalLink, Sparkles } from 'lucide-react';
import { RESUME_INFO, OPPORTUNITY_TEMPLATES } from '../data/resumeData.ts';

interface OpportunityMailerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OpportunityMailerModal({ isOpen, onClose }: OpportunityMailerModalProps) {
  const [selectedTemplateId, setSelectedTemplateId] = useState(OPPORTUNITY_TEMPLATES[0].id);
  const [senderName, setSenderName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [senderRole, setSenderRole] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [copiedText, setCopiedText] = useState(false);

  const senderNameId = useId();
  const companyNameId = useId();
  const senderRoleId = useId();
  const customMessageId = useId();

  if (!isOpen) return null;

  const currentTemplate =
    OPPORTUNITY_TEMPLATES.find((t) => t.id === selectedTemplateId) || OPPORTUNITY_TEMPLATES[0];

  // Dynamically replace placeholders if employer filled inputs
  const getSubject = () => {
    let sub = currentTemplate.subject;
    if (companyName.trim()) {
      sub = sub.replace('[Company Name]', companyName.trim());
    }
    return sub;
  };

  const getBody = () => {
    if (customMessage.trim()) return customMessage;
    let b = currentTemplate.body;
    if (companyName.trim()) {
      b = b.replaceAll('[Company Name]', companyName.trim());
    }
    if (senderName.trim()) {
      b = b.replaceAll('[Your Name]', senderName.trim());
    }
    if (senderRole.trim()) {
      b = b.replaceAll('[Your Role / Company]', `${senderRole.trim()}${companyName.trim() ? `, ${companyName.trim()}` : ''}`);
    }
    return b;
  };

  const finalSubject = getSubject();
  const finalBody = getBody();

  const mailtoUrl = `mailto:${RESUME_INFO.email}?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(finalBody)}`;

  const handleCopy = () => {
    const fullText = `To: ${RESUME_INFO.email}\nSubject: ${finalSubject}\n\n${finalBody}`;
    navigator.clipboard.writeText(fullText);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="opportunity-modal-title"
    >
      <div className="relative flex flex-col w-full max-w-2xl max-h-[92vh] bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/90 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h2 id="opportunity-modal-title" className="text-base font-bold text-slate-900">
                Mail An Opportunity to Kathir
              </h2>
              <p className="text-xs text-slate-500">
                Direct mail delivery to <span className="font-mono text-slate-700">{RESUME_INFO.email}</span>
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {/* Opportunity Template Selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Select Opportunity Scope
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {OPPORTUNITY_TEMPLATES.map((tmpl) => (
                <button
                  key={tmpl.id}
                  type="button"
                  onClick={() => {
                    setSelectedTemplateId(tmpl.id);
                    setCustomMessage('');
                  }}
                  className={`px-3 py-2 text-xs font-medium rounded-lg text-left transition-all border cursor-pointer ${
                    selectedTemplateId === tmpl.id
                      ? 'border-blue-600 bg-blue-50/70 text-blue-900 font-semibold shadow-xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="truncate">{tmpl.roleLabel}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Customizer Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs">
            <div>
              <label htmlFor={senderNameId} className="block font-medium text-slate-600 mb-1">Your Name</label>
              <input
                id={senderNameId}
                type="text"
                placeholder="e.g. Sarah Connor"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor={companyNameId} className="block font-medium text-slate-600 mb-1">Company / Organization</label>
              <input
                id={companyNameId}
                type="text"
                placeholder="e.g. Acme Corp"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor={senderRoleId} className="block font-medium text-slate-600 mb-1">Your Role</label>
              <input
                id={senderRoleId}
                type="text"
                placeholder="e.g. Head of Engineering"
                value={senderRole}
                onChange={(e) => setSenderRole(e.target.value)}
                className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Subject Preview */}
          <div>
            <div className="text-xs font-semibold text-slate-700 mb-1">Email Subject</div>
            <div className="px-3 py-2 bg-slate-100 rounded-md font-mono text-xs text-slate-800 border border-slate-200">
              {finalSubject}
            </div>
          </div>

          {/* Body Preview / Editable Area */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor={customMessageId} className="text-xs font-semibold text-slate-700">Email Message Preview (Editable)</label>
              <span className="text-xs text-slate-400">Feel free to tweak text before sending</span>
            </div>
            <textarea
              id={customMessageId}
              rows={8}
              value={finalBody}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full p-3 bg-white border border-slate-300 rounded-lg text-xs leading-relaxed text-slate-800 font-sans focus:outline-none focus:border-blue-600"
            />
          </div>
        </div>

        {/* Modal Actions */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer shadow-xs"
          >
            {copiedText ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>Copy Email & Subject</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Cancel
            </button>
            <a
              href={mailtoUrl}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all active:scale-[0.98]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Launch Default Email Client</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
