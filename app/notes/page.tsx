import { NoteFilter } from '@/components/notes/note-filter';
import { getNotes } from '@/lib/content';

export const metadata = {
  title: 'Notes'
};

export default function NotesPage() {
  const notes = getNotes();
  const notePreviews = notes.map(({ slug, title, summary, tags, created, updated }) => ({
    slug,
    title,
    summary,
    tags,
    created,
    updated
  }));

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Notes</h1>
        <p className="text-muted-foreground">
          Living research notes with tags, summaries, and timestamps. Filter by tag or search to find a specific thread.
        </p>
      </div>
      <NoteFilter notes={notePreviews} />
    </div>
  );
}
