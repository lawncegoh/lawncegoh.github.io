import Link from 'next/link';

export const metadata = {
  title: 'Contact'
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="text-muted-foreground">The fastest way to reach me is via LinkedIn.</p>
      </div>

      <div className="rounded-2xl border border-border/60 bg-card/60 p-5">
        <ul className="space-y-3 text-sm">
          <li>
            <span className="text-muted-foreground">GitHub:</span>{' '}
            <Link className="text-primary underline-offset-4 hover:underline" href="https://github.com/lawncegoh" target="_blank" rel="noreferrer">
              github.com/lawncegoh
            </Link>
          </li>
          <li>
            <span className="text-muted-foreground">LinkedIn:</span>{' '}
            <Link className="text-primary underline-offset-4 hover:underline" href="https://www.linkedin.com/in/lawnce-goh/" target="_blank" rel="noreferrer">
              linkedin.com/in/lawnce-goh
            </Link>
          </li>
        </ul>
      </div>

      <p className="text-xs text-muted-foreground">
        If you want an email link or phone number on this page, tell me what youre comfortable publishing.
      </p>
    </div>
  );
}
