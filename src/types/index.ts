export interface Project {
  id: number;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  date: string;
  role: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image: string;
  category: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  techStack: string[];
}

export interface CommandItem {
  title: string;
  category: 'Navigation' | 'Sub-Portal' | 'External';
  href: string;
  icon: string;
  isExternal?: boolean;
}