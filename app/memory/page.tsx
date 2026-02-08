import { MemoryTimeline } from '@/components/memory/memory-timeline';
import { getMemoryEntries } from '@/lib/content';

export const metadata = {
  title: 'Memory'
};

export default function MemoryPage() {
  const entries = getMemoryEntries();

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Memory timeline</h1>
        <p className="text-muted-foreground">
          Breadcrumbs from field work, on-site experiments, and studio dispatches, organized by date.
        </p>
      </div>
      <MemoryTimeline entries={entries} />
    </div>
  );
}
