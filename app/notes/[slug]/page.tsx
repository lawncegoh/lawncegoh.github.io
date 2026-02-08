import { notFound } from 'next/navigation';

import { MDXContent } from '@/components/mdx-content';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/format-date';
import { getNote, getNotes } from '@/lib/content';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getNotes().map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.summary
  };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) {
    notFound();
  }

  return (
    <article className="space-y-6">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Note</p>
        <h1 className="text-3xl font-semibold tracking-tight">{note.title}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span>Created {formatDate(note.created)}</span>
          <span>Last updated {formatDate(note.updated)}</span>
        </div>
        <p className="text-base text-muted-foreground">{note.summary}</p>
        <div className="flex flex-wrap gap-2">
          {note.tags.map((tag) => (
            <Badge key={tag}>#{tag}</Badge>
          ))}
        </div>
      </div>
      <div className="space-y-6 text-base leading-relaxed">
        <MDXContent source={note.body} />
      </div>
    </article>
  );
}
