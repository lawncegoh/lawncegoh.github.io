import Link from 'next/link';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  link?: string;
  status?: string;
};

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <Card key={project.title} className="border-border/70 bg-card/60">
          <CardHeader>
            <div className="flex items-center justify-between gap-2">
              <CardTitle>{project.title}</CardTitle>
              {project.status && <Badge>{project.status}</Badge>}
            </div>
            <CardDescription>{project.summary}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-border/80 px-2 py-0.5">
                  {item}
                </span>
              ))}
            </div>
            {project.link && (
              <Link
                href={project.link}
                className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Visit project →
              </Link>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
