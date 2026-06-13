import type { TimelineEntry } from '../types';

export const howIWork: TimelineEntry[] = [
  {
    id: 1,
    step: '01',
    title: 'Discover & Research',
    description: 'Understanding before building. I dig deep into requirements and problem context.',
    details: [
      'Analyze user needs and business goals',
      'Map out system constraints and edge cases',
      'Define clear success metrics and KPIs',
    ],
    icon: 'bx-search-alt',
  },
  {
    id: 2,
    step: '02',
    title: 'Design & Architect',
    description: 'Solid foundation before the first line of code. Thoughtful architecture prevents costly rewrites.',
    details: [
      'Choose the right tech stack for the problem',
      'Design scalable and maintainable system architecture',
      'Plan data models, API contracts, and component trees',
    ],
    icon: 'bx-layer',
  },
  {
    id: 3,
    step: '03',
    title: 'Build & Iterate',
    description: 'Ship fast but never sloppy. I iterate in cycles with constant feedback.',
    details: [
      'Develop in incremental, testable milestones',
      'Write clean, self-documenting code',
      'Continuous integration with automated testing',
    ],
    icon: 'bx-code-alt',
  },
  {
    id: 4,
    step: '04',
    title: 'Ship & Deploy',
    description: 'Quality gate before delivery. Every release should be confident, not hopeful.',
    details: [
      'Thorough code review and pair programming',
      'Staging environment validation',
      'Zero-downtime deployment strategy',
    ],
    icon: 'bx-rocket',
  },
  {
    id: 5,
    step: '05',
    title: 'Monitor & Improve',
    description: 'Software is never done. Real learning starts after deployment.',
    details: [
      'Track performance metrics and error rates',
      'Gather user feedback and usage patterns',
      'Iterate based on data, not assumptions',
    ],
    icon: 'bx-line-chart',
  },
];