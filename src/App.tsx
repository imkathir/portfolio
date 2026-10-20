/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ExperienceSection } from './components/ExperienceSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { SkillsSection } from './components/SkillsSection.tsx';
import { ResumeHostingSection } from './components/ResumeHostingSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ResumeViewerModal } from './components/ResumeViewerModal.tsx';
import { OpportunityMailerModal } from './components/OpportunityMailerModal.tsx';
import { ProjectDetailModal } from './components/ProjectDetailModal.tsx';
import { ProjectItem } from './types.ts';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isOpportunityModalOpen, setIsOpportunityModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenOpportunityModal={() => setIsOpportunityModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Split Hero & Core Metric Strip */}
        <Hero
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenOpportunityModal={() => setIsOpportunityModalOpen(true)}
        />

        {/* Career Progression & Roles at Zoho */}
        <ExperienceSection />

        {/* Featured Enterprise Systems & Case Studies */}
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* Skills Matrix, Credentials & Education */}
        <SkillsSection />

        {/* Resume Hosting & Direct PDF Viewer / Download */}
        <ResumeHostingSection
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenOpportunityModal={() => setIsOpportunityModalOpen(true)}
        />

        {/* Direct Contact Form & Mail Options for Employers */}
        <ContactSection
          onOpenOpportunityModal={() => setIsOpportunityModalOpen(true)}
        />
      </main>

      {/* Quiet, Clean Footer */}
      <Footer
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenOpportunityModal={() => setIsOpportunityModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ResumeViewerModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onOpenOpportunityModal={() => {
          setIsResumeModalOpen(false);
          setIsOpportunityModalOpen(true);
        }}
      />

      <OpportunityMailerModal
        isOpen={isOpportunityModalOpen}
        onClose={() => setIsOpportunityModalOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenOpportunityModal={() => {
          setSelectedProject(null);
          setIsOpportunityModalOpen(true);
        }}
      />
    </div>
  );
}
