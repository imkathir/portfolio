import { useEffect } from 'react';
import { X, CheckCircle2, Layers, Cpu, Database, ShieldAlert, Zap } from 'lucide-react';
import { ProjectItem } from '../types.ts';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenOpportunityModal: () => void;
}

export function ProjectDetailModal({ project, onClose, onOpenOpportunityModal }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="relative flex flex-col w-full max-w-3xl max-h-[90vh] bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between px-6 py-5 border-b border-slate-200 bg-slate-50/90 shrink-0">
          <div className="pr-4">
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <span>{project.company}</span>
              <span aria-hidden="true">·</span>
              <span>{project.period}</span>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-blue-700">{project.role}</span>
            </div>
            <h2 id="project-modal-title" className="text-xl font-bold text-slate-900 leading-snug">
              {project.title}
            </h2>
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

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-slate-700">
          {/* Executive Overview */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-2">Executive Summary</h3>
            <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-200">
              {project.shortDescription}
            </p>
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-rose-100 bg-rose-50/40 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-rose-900 text-xs uppercase tracking-wide">
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                <span>The Engineering Challenge</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">{project.challenge}</p>
            </div>

            <div className="p-4 rounded-lg border border-emerald-100 bg-emerald-50/40 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-emerald-900 text-xs uppercase tracking-wide">
                <Zap className="w-4 h-4 text-emerald-600" />
                <span>The Engineered Architecture</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Architectural Pillars */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Core Architectural Highlights</span>
            </div>
            <ul className="space-y-2.5">
              {project.architectureDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50/80 p-3 rounded-lg border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Measurable Production Impact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
              Business & System Impact
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.impactMetrics.map((metric, idx) => (
                <div key={idx} className="p-3 bg-slate-900 text-white rounded-lg space-y-1">
                  <div className="text-[11px] font-mono text-blue-400">0{idx + 1}. Outcome</div>
                  <div className="text-xs font-medium text-slate-100 leading-snug">{metric}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-2">Technologies Used</h3>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
              {project.technologies.map((tech, i) => (
                <span key={tech} className="inline-flex items-center">
                  <span className="font-mono text-slate-800">{tech}</span>
                  {i < project.technologies.length - 1 && <span className="ml-2 text-slate-300">/</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500">
            Interested in implementing similar high-scale systems?
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
              Contact Kathir
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
