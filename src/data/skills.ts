import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: 'bx-code-alt',
    skills: [
      { name: 'GoLang', icon: 'https://api.iconify.design/logos:go.svg' },
      { name: 'C++', icon: 'https://api.iconify.design/logos:c-plusplus.svg' },
      { name: 'Dart', icon: 'https://api.iconify.design/logos:dart.svg' },
      { name: 'JavaScript', icon: 'https://api.iconify.design/logos:javascript.svg' },
      { name: 'TypeScript', icon: 'https://api.iconify.design/logos:typescript-icon.svg' },
      { name: 'PHP', icon: 'https://api.iconify.design/logos:php.svg' },
    ],
  },
  {
    title: 'Frameworks',
    icon: 'bx-layer',
    skills: [
      { name: 'Gin', icon: 'https://api.iconify.design/logos:go.svg' },
      { name: 'Fiber', icon: 'https://api.iconify.design/logos:go.svg' },
      { name: 'Flutter', icon: 'https://api.iconify.design/logos:flutter.svg' },
      { name: 'Laravel', icon: 'https://api.iconify.design/logos:laravel.svg' },
      { name: 'Express', icon: 'https://api.iconify.design/skill-icons:expressjs-dark.svg' },
    ],
  },
  {
    title: 'Backend',
    icon: 'bx-server',
    skills: [
      { name: 'REST API', icon: 'https://api.iconify.design/eos-icons:api.svg?color=%234285F4' },
      { name: 'gRPC', icon: 'https://api.iconify.design/logos:grpc.svg' },
    ],
  },
  {
    title: 'Databases',
    icon: 'bx-data',
    skills: [
      { name: 'PostgreSQL', icon: 'https://api.iconify.design/logos:postgresql.svg' },
      { name: 'MySQL', icon: 'https://api.iconify.design/logos:mysql.svg' },
      { name: 'SQL Server', icon: 'https://api.iconify.design/devicon:microsoftsqlserver.svg' },
      { name: 'Redis', icon: 'https://api.iconify.design/logos:redis.svg' },
      { name: 'Firebase', icon: 'https://api.iconify.design/logos:firebase.svg' },
    ],
  },
  {
    title: 'Infrastructure',
    icon: 'bx-cloud',
    skills: [
      { name: 'Docker', icon: 'https://api.iconify.design/logos:docker-icon.svg' },
      { name: 'Kubernetes', icon: 'https://api.iconify.design/logos:kubernetes.svg' },
      { name: 'Kafka', icon: 'https://api.iconify.design/logos:kafka-icon.svg' },
      { name: 'RabbitMQ', icon: 'https://api.iconify.design/logos:rabbitmq-icon.svg' },
    ],
  },
  {
    title: 'Tools',
    icon: 'bx-wrench',
    skills: [
      { name: 'Git', icon: 'https://api.iconify.design/logos:git-icon.svg' },
      { name: 'CI/CD', icon: 'https://api.iconify.design/flat-color-icons:data-configuration.svg' },
      { name: 'Nginx', icon: 'https://api.iconify.design/logos:nginx.svg' },
      { name: 'Jenkins', icon: 'https://api.iconify.design/logos:jenkins.svg' },
      { name: 'Bitbucket', icon: 'https://api.iconify.design/logos:bitbucket.svg' },
      { name: 'Postman', icon: 'https://api.iconify.design/logos:postman-icon.svg' },
    ],
  },
  {
    title: 'Observability',
    icon: 'bx-radar',
    skills: [
      { name: 'Elasticsearch', icon: 'https://api.iconify.design/logos:elasticsearch.svg' },
      { name: 'Logstash', icon: 'https://api.iconify.design/logos:logstash.svg' },
      { name: 'Kibana', icon: 'https://api.iconify.design/logos:kibana.svg' },
    ],
  },
];