import { useState } from 'react';
import { FileText, Mail, Menu, X } from 'lucide-react';
import { RESUME_INFO } from '../data/resumeData.ts';

interface NavbarProps {
  onOpenResumeModal: () => void;
  onOpenOpportunityModal: () => void;
}

export function Navbar({ onOpenResumeModal, onOpenOpportunityModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Zone 1: Brand Wordmark (Single text element, strict Top Bar Contract) */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
        >
          {RESUME_INFO.name}
        </a>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a
            href="#about"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            About
          </a>
          <a
            href="#experience"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            Skills
          </a>
          <button
            type="button"
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-slate-500" />
            <span>Resume PDF</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenOpportunityModal}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Mail Opportunity</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg border border-slate-200"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-slate-900"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-slate-900"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-slate-900"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-slate-900"
            >
              Skills
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex items-center gap-2 py-1.5 text-left hover:text-slate-900 text-blue-600 font-medium"
            >
              <FileText className="w-4 h-4" />
              <span>Preview Official Resume PDF</span>
            </button>
          </div>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOpportunityModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Mail Opportunity</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
