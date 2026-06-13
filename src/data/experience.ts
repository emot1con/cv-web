import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Software Engineer Intern',
    company: 'Tech Company',
    location: 'Jakarta, Indonesia',
    period: 'Jun 2025 - Present',
    description: [
      'Developed RESTful APIs serving 10k+ daily requests',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
      'Collaborated with cross-functional team on microservices architecture',
    ],
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    id: 2,
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    location: 'Lampung, Indonesia',
    period: 'Jan 2024 - May 2025',
    description: [
      'Built 5+ full-stack web applications for local businesses',
      'Designed responsive UIs improving mobile engagement by 40%',
      'Managed end-to-end project lifecycle from requirements to deployment',
    ],
    techStack: ['React', 'Next.js', 'Laravel', 'MySQL'],
  },
];