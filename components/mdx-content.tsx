import { markdownToHtml } from '@/lib/markdown';

export function MDXContent({ source }: { source: string }) {
  const html = markdownToHtml(source);
  return <div className="space-y-4" dangerouslySetInnerHTML={{ __html: html }} />;
}
