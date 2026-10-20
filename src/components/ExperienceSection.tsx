import { useState } from 'react';
import { Briefcase, Building2, Calendar, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/resumeData.ts';

export function ExperienceSection() {
  const [selectedExpId, setSelectedExpId] = useState<string>(EXPERIENCES[0].id);

  return (
    <section id="experience" className="py-16 lg:py-24 border-b border-slate-200 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
            <span>Career History</span>
            <span aria-hidden="true">·</span>
            <span>Enterprise SaaS Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
            8+ years scaling core architecture at Zoho Corporation
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Progressing from intern to Senior Frontend Engineer and Full-Stack Systems Engineer across
            flagship international platforms (Zoho ERP, Zoho Books, Zoho Inventory).
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Roles Selector on Left */}
          <div className="lg:col-span-4 space-y-3">
            {EXPERIENCES.map((exp) => {
              const isSelected = selectedExpId === exp.id;
              return (
                <button
                  key={exp.id}
                  type="button"
                  onClick={() => setSelectedExpId(exp.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-blue-600 shadow-sm'
                      : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-medium text-slate-500 font-mono tabular-nums">
                      {exp.period}
                    </span>
                    {exp.isCurrent && (
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Current Role
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-bold text-slate-900">{exp.role}</div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{exp.company}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.location}</span>
                  </div>
                </button>
              );
            })}

            {/* Quick Summary Card */}
            <div className="p-4 bg-slate-900 text-slate-200 rounded-xl space-y-2 mt-4 text-xs">
              <div className="font-semibold text-white">Full Product Lifecycle Track Record</div>
              <p className="text-slate-400 leading-relaxed">
                Seamless transition from high-concurrency client-side Ember.js state management to resilient Java backend anti-abuse systems and MySQL lock optimization.
              </p>
            </div>
          </div>

          {/* Role Details Panel on Right */}
          <div className="lg:col-span-8">
            {EXPERIENCES.filter((e) => e.id === selectedExpId).map((exp) => (
              <div
                key={exp.id}
                className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6"
              >
                {/* Header */}
                <div className="border-b border-slate-200 pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                    <span className="text-xs font-mono font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 font-medium">
                    <span className="text-slate-900 font-semibold">{exp.company}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.location}</span>
                  </div>

                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">{exp.summary}</p>
                </div>

                {/* Production Highlights */}
                <div>
                  <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
                    Key Responsibilities & Architectural Impact
                  </h4>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
                    Technologies & Methodologies
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                    {exp.technologies.map((tech, i) => (
                      <span key={tech} className="inline-flex items-center">
                        <span className="font-mono text-slate-800 bg-slate-100 px-2 py-1 rounded">
                          {tech}
                        </span>
                        {i < exp.technologies.length - 1 && <span className="ml-2 text-slate-300">·</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
