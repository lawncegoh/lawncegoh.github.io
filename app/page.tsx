import Link from 'next/link';

import { buttonClassName } from '@/components/ui/button';
import { NoteCard } from '@/components/note-card';
import { ProjectsGrid } from '@/components/projects/projects-grid';
import { formatDate } from '@/lib/format-date';
import { getMemoryEntries, getNotes } from '@/lib/content';
import { tradingProjects } from '@/data/projects';

export default function HomePage() {
  const notes = getNotes().slice(0, 3);
  const memories = getMemoryEntries().slice(0, 3);

  return (
    <div className="space-y-12">
      <section className="rounded-2xl border border-border/70 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 text-center shadow-lg">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Digital Garden</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Quant Engineer building trading systems</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
          I’m Lawnce Goh — a Quantitative Engineer at Goldman Sachs. This is a digital garden of projects and notes on
          execution/pricing pipelines, volatility research, and applied ML.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/projects" className={buttonClassName({ variant: 'primary' })}>
            Browse projects
          </Link>
          <Link href="/research" className={buttonClassName({ variant: 'outline' })}>
            Read research notes
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Latest notes</h2>
          <Link href="/notes" className="text-sm text-muted-foreground hover:text-primary">
            View all →
          </Link>
        </div>
        <div className="grid gap-4">
          {notes.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Recent memories</h2>
          <Link href="/memory" className="text-sm text-muted-foreground hover:text-primary">
            Timeline →
          </Link>
        </div>
        <div className="space-y-4">
          {memories.map((memory) => (
            <div key={memory.slug} className="rounded-2xl border border-border/60 bg-card/60 p-4">
              <div className="flex flex-wrap justify-between text-xs uppercase tracking-wide text-muted-foreground">
                <span>{formatDate(memory.created)}</span>
                <span>{memory.tags.map((tag) => `#${tag}`).join(' ')}</span>
              </div>
              <Link href={`/memory/${memory.slug}`} className="mt-2 inline-flex text-lg font-semibold hover:underline">
                {memory.title}
              </Link>
              <p className="text-sm text-muted-foreground">{memory.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Active projects</h2>
          <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">
            Projects →
          </Link>
        </div>
        <ProjectsGrid projects={tradingProjects.slice(0, 2)} />
      </section>
    </div>
  );
}
