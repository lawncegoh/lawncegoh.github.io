'use client';

import { useMemo, useState } from 'react';

import type { Note } from '@/lib/content';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { NoteCard } from '@/components/note-card';

type NotePreview = Pick<Note, 'slug' | 'title' | 'summary' | 'tags' | 'created' | 'updated'>;

type Props = {
  notes: NotePreview[];
};

export function NoteFilter({ notes }: Props) {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const unique = new Set<string>();
    notes.forEach((note) => note.tags.forEach((tag) => unique.add(tag)));
    return Array.from(unique).sort();
  }, [notes]);

  const filtered = useMemo(() => {
    return notes.filter((note) => {
      const matchesTag = activeTag ? note.tags.includes(activeTag) : true;
      if (!matchesTag) return false;
      if (!query) return true;
      const token = query.toLowerCase();
      return (
        note.title.toLowerCase().includes(token) ||
        note.summary.toLowerCase().includes(token) ||
        note.tags.some((tag) => tag.toLowerCase().includes(token))
      );
    });
  }, [notes, activeTag, query]);

  return (
    <div className="space-y-6">
      <Input
        placeholder="Search by title, tag, or summary"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="border-muted/80 bg-muted/40"
      />
      <div className="flex flex-wrap gap-2 text-sm">
        <button
          type="button"
          className={cn(
            'rounded-full border border-border/70 px-3 py-1 text-muted-foreground transition-colors hover:border-primary hover:text-primary',
            !activeTag && 'border-primary text-primary'
          )}
          onClick={() => setActiveTag(null)}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={cn(
              'rounded-full border border-border/70 px-3 py-1 text-muted-foreground transition-colors hover:border-primary hover:text-primary',
              activeTag === tag && 'border-primary text-primary'
            )}
            onClick={() => setActiveTag((current) => (current === tag ? null : tag))}
          >
            #{tag}
          </button>
        ))}
      </div>
      <div className="grid gap-4">
        {filtered.length === 0 && <p className="text-sm text-muted-foreground">No notes match that filter.</p>}
        {filtered.map((note) => (
          <NoteCard key={note.slug} note={note} />
        ))}
      </div>
    </div>
  );
}
