export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  category: 'Full-Stack' | 'Frontend' | 'Architecture' | 'Performance';
  company: string;
  period: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  architectureDetails: string[];
  impactMetrics: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    experienceYears: string;
    focus: string;
  }[];
}

export interface OpportunityTemplate {
  id: string;
  title: string;
  roleLabel: string;
  subject: string;
  body: string;
}
