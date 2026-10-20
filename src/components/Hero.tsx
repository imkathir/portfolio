import { useState } from 'react';
import { Mail, FileText, ArrowRight, Check, Copy, Terminal, Shield, Cpu, ExternalLink } from 'lucide-react';
import { RESUME_INFO } from '../data/resumeData.ts';

interface HeroProps {
  onOpenResumeModal: () => void;
  onOpenOpportunityModal: () => void;
}

export function Hero({ onOpenResumeModal, onOpenOpportunityModal }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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

  return (
    <section id="about" className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Status Kicker with typographic separators (anti-slop compliant) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 mb-4">
              <span>{RESUME_INFO.location}</span>
              <span aria-hidden="true">·</span>
              <span>8+ Years Production SaaS</span>
              <span aria-hidden="true">·</span>
              <span className="text-blue-700 font-semibold">Zoho Enterprise Ecosystem</span>
            </div>

            {/* Headline with text-wrap balance */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance">
              Full-Stack & Senior Frontend Engineer building resilient enterprise systems.
            </h1>

            {/* Lead copy */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Over 8 years in production SaaS, combining 7 years of deep frontend specialization
              (JavaScript, Ember.js, modern web architecture) with robust backend systems (Java, MySQL).
              Proven impact delivering flagship enterprise solutions across Zoho ERP, Zoho Books, and Zoho Inventory.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenOpportunityModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap"
              >
                <Mail className="w-4 h-4" />
                <span>Mail Me An Opportunity</span>
              </button>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-800 bg-slate-100 hover:bg-slate-200 active:scale-[0.98] rounded-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-slate-600" />
                <span>Preview Resume PDF</span>
              </button>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct recruiter fast links */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400">Direct Email:</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="font-mono font-medium text-slate-800 hover:text-blue-600 flex items-center gap-1 cursor-pointer"
                  title="Click to copy email"
                >
                  <span>{RESUME_INFO.email}</span>
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3 h-3 text-slate-400" />}
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-slate-400">Phone:</span>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="font-mono font-medium text-slate-800 hover:text-blue-600 flex items-center gap-1 cursor-pointer"
                  title="Click to copy phone"
                >
                  <span>{RESUME_INFO.phone}</span>
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3 h-3 text-slate-400" />}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual Snapshot Card (Domain-native, responsive) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-xl border border-slate-200 bg-slate-900 text-slate-200 p-6 shadow-xl flex flex-col justify-between overflow-hidden">
              {/* Subtle architectural schematic background accents */}
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <Terminal className="w-48 h-48 text-white" />
              </div>

              {/* Card Header */}
              <div className="relative border-b border-slate-800 pb-4 mb-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-blue-400">Production Dossier</div>
                  <div className="text-sm font-semibold text-white mt-0.5">Kathir Venkatachalam</div>
                </div>
                <div className="text-right text-[11px] font-mono text-slate-400">
                  <div>Zoho Corp</div>
                  <div className="text-emerald-400">Active Engineer</div>
                </div>
              </div>

              {/* Core System Competencies */}
              <div className="relative space-y-3.5 text-xs">
                <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60">
                  <div className="text-[11px] font-medium text-slate-400 mb-1">Frontend Specialization</div>
                  <div className="text-slate-100 font-medium">
                    JavaScript (ES6+), Ember.js, State Machines, Virtualized Rendering, DOM Tuning
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60">
                  <div className="text-[11px] font-medium text-slate-400 mb-1">Backend & Security Engineering</div>
                  <div className="text-slate-100 font-medium">
                    Java Services, Anti-Abuse Token Buckets, Rate Limiting, Contract-First REST APIs
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60">
                  <div className="text-[11px] font-medium text-slate-400 mb-1">Relational Database Optimization</div>
                  <div className="text-slate-100 font-medium">
                    MySQL, Fine-Grained Row-Level Locking, Query Plans, High-Frequency Transactions
                  </div>
                </div>
              </div>

              {/* Card Footer action bar */}
              <div className="relative mt-5 pt-4 border-t border-slate-800 flex items-center justify-between gap-3 text-xs">
                <a
                  href={RESUME_INFO.resumePdfUrl}
                  download="Kathir_Venkatachalam_Resume.pdf"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-400" />
                  <span>Download Resume PDF</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium"
                >
                  <span>Connect Directly</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metric Strip below the split (Per design constitution Section 1.C & Reference 7) */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {RESUME_INFO.metrics.map((metric, i) => (
            <div key={i} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-slate-900 tabular-nums">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-slate-800">{metric.label}</div>
              <div className="text-xs text-slate-500">{metric.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
