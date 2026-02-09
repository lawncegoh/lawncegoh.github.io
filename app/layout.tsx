import type { Metadata } from 'next';
import './globals.css';

import { SiteHeader } from '@/components/site-header';
import { ThemeProvider } from '@/components/providers/theme-provider';

export const metadata: Metadata = {
  metadataBase: new URL('https://lawncegoh.github.io'),
  title: {
    default: 'Lawnce Goh — Digital Garden',
    template: '%s · Lawnce Goh'
  },
  description:
    'A dark digital garden for Lawnce Goh that collects notes, projects, and a living memory timeline.',
  keywords: ['Lawnce Goh', 'digital garden', 'notes', 'projects'],
  authors: [{ name: 'Lawnce Goh' }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="bg-background text-foreground font-sans">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col bg-background text-foreground">
            <SiteHeader />
            <main className="container mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
              {children}
            </main>
            <footer className="border-t border-border px-4 py-6 text-sm text-muted-foreground sm:px-6">
              <div className="container mx-auto max-w-5xl flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <span>© {new Date().getFullYear()} Lawnce Goh</span>
                <span className="text-xs">Crafted with Next.js, Tailwind, and MDX.</span>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
