import { ProjectsGrid } from '@/components/projects/projects-grid';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Projects'
};

export default function ProjectsPage() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">
          A sampling of studio initiatives, client builds, and speculative tools currently in rotation.
        </p>
      </div>
      <ProjectsGrid projects={projects} />
    </div>
  );
}
