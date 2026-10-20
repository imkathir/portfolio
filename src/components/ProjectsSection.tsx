import { useState } from 'react';
import { ArrowUpRight, Shield, Activity, Layers, Database, Cpu, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/resumeData.ts';
import { ProjectItem } from '../types.ts';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Full-Stack', 'Frontend', 'Architecture', 'Performance'];

  const filteredProjects =
    filter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-16 lg:py-24 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
              <span>Featured Engineering</span>
              <span aria-hidden="true">·</span>
              <span>Production Architectures</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
              Proven systems deployed to millions of enterprise users
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Real-world systems engineered for resilience, zero-friction user journeys, and high-frequency financial and inventory operations.
            </p>
          </div>

          {/* Interactive filter control (functional buttons with active/inactive states) */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg shrink-0 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  filter === cat
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 sm:p-7 hover:border-slate-300 hover:shadow-md transition-all"
            >
              <div>
                {/* Clean unboxed metadata header */}
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-blue-700">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.company}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{project.period}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Architectural Blueprint Visual Card (Fallback container / SVG schematic) */}
                <div className="my-5 p-4 rounded-lg bg-slate-950 text-slate-300 font-mono text-[11px] leading-relaxed border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2 mb-2">
                    <span className="text-blue-400 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>System Contract</span>
                    </span>
                    <span className="text-slate-500">{project.role}</span>
                  </div>
                  <div className="text-slate-300 space-y-1">
                    <div className="text-emerald-400 truncate">
                      ✓ Challenge: {project.challenge.slice(0, 80)}...
                    </div>
                    <div className="text-slate-400 truncate">
                      ⚡ Solution: {project.solution.slice(0, 85)}...
                    </div>
                  </div>
                </div>

                {/* Key Metrics / Highlights */}
                <div className="space-y-1.5 mb-5">
                  {project.impactMetrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies and Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-600">
                  {project.technologies.slice(0, 3).map((t, idx) => (
                    <span key={t} className="font-mono text-slate-700">
                      {t}{idx < Math.min(project.technologies.length, 3) - 1 ? ' ·' : ''}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-slate-400 font-mono">+{project.technologies.length - 3}</span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 shrink-0 cursor-pointer"
                >
                  <span>Architecture Deep Dive</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
