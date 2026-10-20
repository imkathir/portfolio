import { useState } from 'react';
import { Download, ExternalLink, FileText, Check, Copy, Eye, Sparkles } from 'lucide-react';
import { RESUME_INFO, EXPERIENCES, SKILL_GROUPS } from '../data/resumeData.ts';

interface ResumeHostingSectionProps {
  onOpenResumeModal: () => void;
  onOpenOpportunityModal: () => void;
}

export function ResumeHostingSection({ onOpenResumeModal, onOpenOpportunityModal }: ResumeHostingSectionProps) {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    const fullUrl = window.location.origin + RESUME_INFO.resumePdfUrl;
    navigator.clipboard.writeText(fullUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="resume" className="py-16 lg:py-24 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
            <span>Verified Document</span>
            <span aria-hidden="true">·</span>
            <span>Resume Hosting</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
            Official Curriculum Vitae & Enterprise Portfolio
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Directly access, inspect, or download the original PDF resume verified for applicant tracking systems (ATS) and hiring engineering managers.
          </p>
        </div>

        {/* Embedded Interactive Resume Hosting Box */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden shadow-xs">
          {/* Top Bar for the Viewer */}
          <div className="p-4 sm:p-5 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-50 text-blue-700 rounded-lg">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  Kathir_Venkatachalam_-_Resume.pdf
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                  <span>PDF Document</span>
                  <span aria-hidden="true">·</span>
                  <span>Verified 2026</span>
                  <span aria-hidden="true">·</span>
                  <span>Full-Stack & Senior Frontend</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-blue-600" />
                <span>Fullscreen Reader</span>
              </button>

              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
                title="Copy PDF download URL"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy PDF Link</span>
                  </>
                )}
              </button>

              <a
                href={RESUME_INFO.resumePdfUrl}
                download="Kathir_Venkatachalam_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official PDF</span>
              </a>
            </div>
          </div>

          {/* Embedded Preview Body */}
          <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Embedded IFrame PDF Canvas */}
            <div className="lg:col-span-8 bg-slate-200 rounded-xl overflow-hidden border border-slate-300 h-[500px] sm:h-[620px] relative shadow-inner">
              <iframe
                src={`${RESUME_INFO.resumePdfUrl}#toolbar=0&navpanes=0`}
                title="Kathir Venkatachalam Official Resume"
                className="w-full h-full border-none"
              />
              {/* Fallback floating button for devices where iframe PDF is blocked */}
              <div className="absolute bottom-3 right-3 sm:hidden">
                <a
                  href={RESUME_INFO.resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900/90 rounded-lg shadow"
                >
                  Open PDF Directly
                </a>
              </div>
            </div>

            {/* Quick Summary Sidebar for Recruiters */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                  <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide">
                    Executive Profile
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {RESUME_INFO.summary}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                  <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide">
                    Core Technical Pillars
                  </h4>
                  <div className="text-xs text-slate-700 space-y-1.5">
                    <div>
                      <span className="font-semibold text-slate-900">Frontend:</span> JavaScript (ES6+), Ember.js, State Management, DOM Tuning
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">Backend:</span> Java, RESTful APIs, Anti-Abuse, Rate Limiting
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">Data:</span> MySQL, Query Plans, Row-Level Locking
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                  <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide">
                    Education & Credentials
                  </h4>
                  <div className="text-xs text-slate-700">
                    <div className="font-semibold text-slate-900">{RESUME_INFO.education.degree}</div>
                    <div className="text-slate-600">{RESUME_INFO.education.institution}</div>
                    <div className="text-slate-500 mt-1 font-mono">Graduated {RESUME_INFO.education.graduated}</div>
                  </div>
                </div>
              </div>

              {/* Action trigger */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenOpportunityModal}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Reach Out with an Opportunity</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
