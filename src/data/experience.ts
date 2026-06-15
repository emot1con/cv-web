import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Intern Backend Engineer',
    company: 'UPT TIK Universitas Lampung',
    location: 'Bandar Lampung',
    period: 'Sep 2025 - Apr 2026',
    description: [
      'Implemented data synchronization from external APIs into SQL Server databases using concurrency patterns in Go.',
      'Refactored legacy PHP-based APIs into Go services to improve maintainability, scalability, and code structure consistency.',
      'Designed and developed RESTful APIs for internal campus system integration and data management.',
    ],
    techStack: ['Go', 'SQL Server', 'REST API'],
  },
];