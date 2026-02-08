import type { Project } from '@/components/projects/projects-grid';

export const projects: Project[] = [
  {
    title: 'Atlas Signals',
    summary: 'An observability layer that normalizes telemetry from hardware experiments into searchable signals.',
    stack: ['Next.js', 'tRPC', 'Edge Functions'],
    link: 'https://github.com/lawncegoh',
    status: 'Shipping'
  },
  {
    title: 'Drift Garden',
    summary: 'Generative essays and watercolor renders composed from note graphs and memory fragments.',
    stack: ['MDX', 'D3.js', 'Cloudflare Workers'],
    status: 'Exploring'
  },
  {
    title: 'Studio Twelve',
    summary: 'Client workbench for high-touch research collaborations with live notebooks and async briefing packs.',
    stack: ['React', 'Supabase', 'Postgres']
  }
];
