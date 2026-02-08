import { notFound } from 'next/navigation';

import { MDXContent } from '@/components/mdx-content';
import { formatDate } from '@/lib/format-date';
import { getMemoryEntries, getMemoryEntry } from '@/lib/content';

type Props = {
  params: Promise<{ date: string }>;
};

export async function generateStaticParams() {
  return getMemoryEntries().map((entry) => ({ date: entry.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { date } = await params;
  const memory = getMemoryEntry(date);
  if (!memory) return {};
  return {
    title: `${memory.title} · ${formatDate(memory.created)}`,
    description: memory.summary
  };
}

export default async function MemoryEntryPage({ params }: Props) {
  const { date } = await params;
  const memory = getMemoryEntry(date);
  if (!memory) {
    notFound();
  }

  return (
    <article className="space-y-6">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Memory</p>
        <h1 className="text-3xl font-semibold tracking-tight">{memory.title}</h1>
        <p className="text-sm text-muted-foreground">{formatDate(memory.created)}</p>
        <p className="text-base text-muted-foreground">{memory.summary}</p>
      </div>
      <div className="space-y-6 text-base leading-relaxed">
        <MDXContent source={memory.body} />
      </div>
    </article>
  );
}
