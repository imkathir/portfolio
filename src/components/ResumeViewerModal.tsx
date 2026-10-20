import { useEffect, useState } from 'react';
import { X, Download, ExternalLink, FileText, Check, Copy } from 'lucide-react';
import { RESUME_INFO, EXPERIENCES, SKILL_GROUPS } from '../data/resumeData.ts';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOpportunityModal: () => void;
}

export function ResumeViewerModal({ isOpen, onClose, onOpenOpportunityModal }: ResumeViewerModalProps) {
  const [activeTab, setActiveTab] = useState<'pdf' | 'text'>('pdf');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="relative flex flex-col w-full max-w-5xl h-[92vh] bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-slate-50/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 text-blue-700 rounded-lg">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="resume-modal-title" className="text-base font-semibold text-slate-900 leading-tight">
                {RESUME_INFO.name} — Official Resume
              </h2>
              <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                <span>{RESUME_INFO.title}</span>
                <span aria-hidden="true">·</span>
                <span>{RESUME_INFO.location}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View toggle */}
            <div className="hidden sm:flex items-center p-0.5 bg-slate-200/80 rounded-lg text-xs font-medium mr-2">
              <button
                type="button"
                onClick={() => setActiveTab('pdf')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'pdf' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                PDF Document
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('text')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'text' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Text Format
              </button>
            </div>

            <a
              href={RESUME_INFO.resumePdfUrl}
              download="Kathir_Venkatachalam_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors shadow-xs"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            <a
              href={RESUME_INFO.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              title="Open in new window"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 bg-slate-100 overflow-hidden relative">
          {activeTab === 'pdf' ? (
            <div className="w-full h-full flex flex-col">
              <iframe
                src={`${RESUME_INFO.resumePdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                title="Kathir Venkatachalam Resume PDF"
                className="w-full h-full border-none bg-slate-100"
              />
              <div className="sm:hidden p-2 bg-slate-200 text-center text-xs text-slate-700 border-t border-slate-300">
                <span>PDF not rendering on your mobile device? </span>
                <button
                  type="button"
                  onClick={() => setActiveTab('text')}
                  className="font-semibold text-blue-700 underline"
                >
                  Switch to Text View
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full h-full overflow-y-auto p-6 sm:p-10 bg-white max-w-4xl mx-auto text-slate-800 space-y-8 font-sans">
              <div className="border-b border-slate-200 pb-6">
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{RESUME_INFO.name}</h1>
                <p className="text-base text-slate-700 font-medium mt-1">{RESUME_INFO.title}</p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mt-3">
                  <span>Email: {RESUME_INFO.email}</span>
                  <span aria-hidden="true">·</span>
                  <span>Phone: {RESUME_INFO.phone}</span>
                  <span aria-hidden="true">·</span>
                  <span>Location: {RESUME_INFO.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>Languages: English (Fluent), Tamil (Native)</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-wide text-slate-900 uppercase">Professional Summary</h3>
                <p className="text-sm text-slate-700 leading-relaxed mt-2">{RESUME_INFO.summary}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-wide text-slate-900 uppercase mb-3">Technical Skills</h3>
                <div className="space-y-2 text-sm text-slate-700">
                  {SKILL_GROUPS.map((group) => (
                    <div key={group.category} className="leading-relaxed">
                      <span className="font-semibold text-slate-900">{group.category}:</span>{' '}
                      <span className="text-slate-700">{group.skills.map((s) => s.name).join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-wide text-slate-900 uppercase mb-4">Professional Experience</h3>
                <div className="space-y-6">
                  {EXPERIENCES.map((exp) => (
                    <div key={exp.id} className="border-l-2 border-slate-200 pl-4 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-semibold text-slate-900">{exp.role}</span>
                        <span className="text-xs text-slate-500 font-mono tabular-nums">{exp.period}</span>
                      </div>
                      <div className="text-xs text-slate-600 font-medium">{exp.company} — {exp.location}</div>
                      <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
                        {exp.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-wide text-slate-900 uppercase mb-2">Education</h3>
                <div className="text-sm text-slate-800">
                  <p className="font-semibold">{RESUME_INFO.education.degree}</p>
                  <p className="text-xs text-slate-600 mt-0.5">{RESUME_INFO.education.institution}</p>
                  <p className="text-xs text-slate-500 mt-0.5">Graduated: {RESUME_INFO.education.graduated}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer / Fast Actions for Recruiters */}
        <div className="px-5 py-3 border-t border-slate-200 bg-white flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 text-xs text-slate-600">
            <span>Direct Email:</span>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1 font-mono text-slate-900 hover:text-blue-600 cursor-pointer"
            >
              <span>{RESUME_INFO.email}</span>
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenOpportunityModal();
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
            >
              Discuss Hiring / Role
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
