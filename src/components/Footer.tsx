import { ArrowUp, Download, Mail, Phone, ExternalLink } from 'lucide-react';
import { RESUME_INFO } from '../data/resumeData.ts';

interface FooterProps {
  onOpenResumeModal: () => void;
  onOpenOpportunityModal: () => void;
}

export function Footer({ onOpenResumeModal, onOpenOpportunityModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-12 text-slate-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-100">
          <div>
            <div className="text-base font-bold text-slate-900">{RESUME_INFO.name}</div>
            <p className="text-xs text-slate-500 mt-0.5">
              {RESUME_INFO.title} · Tamil Nadu, India
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a href="#about" className="hover:text-slate-900 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-slate-900 transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-slate-900 transition-colors">
              Skills
            </a>
            <button
              type="button"
              onClick={onOpenResumeModal}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Resume PDF
            </button>
            <button
              type="button"
              onClick={onOpenOpportunityModal}
              className="text-blue-600 hover:text-blue-700 transition-colors cursor-pointer font-semibold"
            >
              Mail Opportunity
            </button>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 {RESUME_INFO.name}. All enterprise SaaS accomplishments verified.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${RESUME_INFO.email}`}
              className="hover:text-slate-900 transition-colors"
            >
              {RESUME_INFO.email}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={`tel:${RESUME_INFO.phone}`}
              className="hover:text-slate-900 transition-colors"
            >
              {RESUME_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
