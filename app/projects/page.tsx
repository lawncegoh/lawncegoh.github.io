import { ProjectsGrid } from '@/components/projects/projects-grid';
import { infraProjects, mlProjects, tradingProjects } from '@/data/projects';

export const metadata = {
  title: 'Projects'
};

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">A curated list of systems, experiments, and tools Ive built.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Trading systems</h2>
        <ProjectsGrid projects={tradingProjects} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">ML / GenAI</h2>
        <ProjectsGrid projects={mlProjects} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Infra / Tracking</h2>
        <ProjectsGrid projects={infraProjects} />
      </section>
    </div>
  );
}
