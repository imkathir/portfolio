import { CheckCircle2, GraduationCap, Globe2, Award, Terminal } from 'lucide-react';
import { SKILL_GROUPS, RESUME_INFO } from '../data/resumeData.ts';

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 lg:py-24 border-b border-slate-200 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
            <span>Technical Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>Production Depth</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
            Technical skills honed across 8+ years of high-concurrency systems
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            From client-side single page architecture and rendering optimizations to backend Java services and transactional relational data models.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="border-b border-slate-100 pb-3 mb-4">
                  <h3 className="text-lg font-bold text-slate-900">{group.category}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{group.description}</p>
                </div>

                <div className="space-y-3.5">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-900">{skill.name}</span>
                        <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px] tabular-nums">
                          <span>{skill.experienceYears}</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-blue-700 font-medium">{skill.level}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{skill.focus}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Language Qualifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Education Card */}
          <div className="md:col-span-2 rounded-xl border border-slate-200 bg-white p-6 shadow-xs flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-blue-700 rounded-lg shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Formal Education
              </div>
              <h4 className="text-base font-bold text-slate-900">
                {RESUME_INFO.education.degree}
              </h4>
              <p className="text-xs text-slate-600 font-medium">
                {RESUME_INFO.education.institution}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <span>Graduated in {RESUME_INFO.education.graduated}</span>
                <span aria-hidden="true">·</span>
                <span>Coimbatore, Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Languages & Communication */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs flex items-start gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-700 rounded-lg shrink-0">
              <Globe2 className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Languages
              </div>
              <div className="space-y-1.5 text-xs text-slate-700">
                {RESUME_INFO.languages.map((lang) => (
                  <div key={lang.language} className="flex items-center justify-between gap-4">
                    <span className="font-semibold text-slate-900">{lang.language}</span>
                    <span className="text-slate-500">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                International collaboration with multi-regional enterprise teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
