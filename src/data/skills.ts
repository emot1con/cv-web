import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'bx-code',
    skills: [
      { name: 'JavaScript', icon: '/img/assets/javascript.svg' },
      { name: 'TypeScript', icon: '/img/assets/typescript-lang.svg' },
      { name: 'Java', icon: '/img/assets/Java.svg' },
      { name: 'Python', icon: '/img/assets/python.svg' },
      { name: 'C++', icon: '/img/assets/cplusplus.svg' },
      { name: 'Dart', icon: '/img/assets/dart-lang.svg' },
      { name: 'PHP', icon: '/img/assets/php-svgrepo-com.svg' },
      { name: 'Kotlin', icon: '/img/assets/kotlin-svgrepo-com.svg' },
    ],
  },
  {
    title: 'Frameworks & Libs',
    icon: 'bx-layer',
    skills: [
      { name: 'React.js', icon: '/img/assets/react.svg' },
      { name: 'Node.js', icon: '/img/assets/nodedotjs-color.svg' },
      { name: 'Next.js', icon: '/img/assets/nextjs-svgrepo-com.svg' },
      { name: 'Flutter', icon: '/img/assets/flutter-framework.svg' },
      { name: 'Tailwind CSS', icon: '/img/assets/tailwindcss-icon.svg' },
      { name: 'Bootstrap', icon: '/img/assets/bootstrap-color.svg' },
      { name: 'NestJS', icon: '/img/assets/nestjs-svgrepo-com.svg' },
      { name: 'Laravel', icon: '/img/assets/laravel-svgrepo-com.svg' },
    ],
  },
  {
    title: 'Infrastructure & Tools',
    icon: 'bx-cog',
    skills: [
      { name: 'Git', icon: '/img/assets/git-color.svg' },
      { name: 'VS Code', icon: '/img/assets/visualstudiocode-color.svg' },
      { name: 'GitHub', icon: '/img/assets/github-color.svg' },
      { name: 'Figma', icon: '/img/assets/figma-svgrepo-com.svg' },
      { name: 'Docker', icon: '/img/assets/docker-svgrepo-com.svg' },
      { name: 'Redis', icon: '/img/assets/redis-svgrepo-com.svg' },
      { name: 'Android Studio', icon: '/img/assets/logo-google-android-studio-svgrepo-com.svg' },
      { name: 'WebStorm', icon: '/img/assets/webstorm-svgrepo-com.svg' },
      { name: 'IntelliJ IDEA', icon: '/img/assets/intellij-idea-svgrepo-com.svg' },
      { name: 'Neovim', icon: '/img/assets/neovim-svgrepo-com.svg' },
      { name: 'Postman', icon: '/img/assets/postman-icon-svgrepo-com.svg' },
    ],
  },
  {
    title: 'Database',
    icon: 'bx-data',
    skills: [
      { name: 'MySQL', icon: '/img/assets/mysql-logo-svgrepo-com.svg' },
      { name: 'MongoDB', icon: '/img/assets/mongodb-svgrepo-com.svg' },
      { name: 'Prisma', icon: '/img/assets/prisma-svgrepo-com.svg' },
      { name: 'PostgreSQL', icon: '/img/assets/postgresql-logo-svgrepo-com.svg' },
    ],
  },
  {
    title: 'Markup & Configs',
    icon: 'bx-file',
    skills: [
      { name: 'HTML5', icon: '/img/assets/html5-color.svg' },
      { name: 'CSS3', icon: '/img/assets/css3-color.svg' },
      { name: 'XML', icon: '/img/assets/xml-svgrepo-com.svg' },
      { name: 'YAML', icon: '/img/assets/light-yaml-svgrepo-com.svg' },
      { name: 'TOML', icon: '/img/assets/toml-16-svgrepo-com.svg' },
    ],
  },
];