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
              <div className="container mx-auto max-w-5xl flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span>© {new Date().getFullYear()} Lawnce Goh</span>
                <div className="flex flex-col gap-1 text-xs sm:items-end">
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    <a
                      className="text-primary underline-offset-4 hover:underline"
                      href="https://github.com/lawncegoh"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      className="text-primary underline-offset-4 hover:underline"
                      href="https://www.linkedin.com/in/lawnce-goh/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <span className="text-muted-foreground">Crafted with Next.js, Tailwind, and MDX.</span>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
