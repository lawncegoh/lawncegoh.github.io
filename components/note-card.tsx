import Link from 'next/link';

import type { Note } from '@/lib/content';
import { formatDate } from '@/lib/format-date';
import { Badge } from './ui/badge';
import { Card } from './ui/card';

type NoteSummary = Pick<Note, 'slug' | 'title' | 'summary' | 'tags' | 'created' | 'updated'>;

export function NoteCard({ note }: { note: NoteSummary }) {
  return (
    <Card className="flex flex-col gap-3 border-border/70 bg-card/60">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-wide text-muted-foreground">
        <span>Updated {formatDate(note.updated)}</span>
        <span>Created {formatDate(note.created)}</span>
      </div>
      <Link href={`/notes/${note.slug}`} className="underline-offset-4 hover:underline">
        <h3 className="text-xl font-semibold">{note.title}</h3>
      </Link>
      <p className="text-sm text-muted-foreground">{note.summary}</p>
      <div className="flex flex-wrap gap-2">
        {note.tags.map((tag) => (
          <Badge key={tag}>#{tag}</Badge>
        ))}
      </div>
    </Card>
  );
}
