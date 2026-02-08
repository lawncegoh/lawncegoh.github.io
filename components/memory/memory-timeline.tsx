import Link from 'next/link';

import type { MemoryEntry } from '@/lib/content';
import { formatDate } from '@/lib/format-date';

type Props = {
  entries: MemoryEntry[];
};

export function MemoryTimeline({ entries }: Props) {
  return (
    <div className="space-y-6">
      {entries.map((entry) => (
        <div key={entry.slug} className="relative border-l border-border/70 pl-6">
          <span className="absolute -left-2 top-1.5 h-3 w-3 rounded-full border border-primary bg-background" aria-hidden />
          <div className="flex flex-col gap-2 rounded-xl border border-border/60 bg-card/50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <span>{formatDate(entry.created)}</span>
              <span>{entry.tags.map((tag) => `#${tag}`).join(' ')}</span>
            </div>
            <Link href={`/memory/${entry.slug}`} className="text-lg font-semibold hover:underline">
              {entry.title}
            </Link>
            <p className="text-sm text-muted-foreground">{entry.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
