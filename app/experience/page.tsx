const roles = [
  {
    role: 'Founder & Research Partner',
    company: 'Studio Twelve',
    period: '2021 — Present',
    summary: 'Leading research sprints for biotech, climate, and mobility companies with an emphasis on field work and rapid prototyping.'
  },
  {
    role: 'Director of Product',
    company: 'Atlas Instruments',
    period: '2018 — 2021',
    summary: 'Scaled a data platform for lab automation and instrumentation telemetry. Shipped cross-disciplinary tooling for scientists and operators.'
  }
];

export const metadata = {
  title: 'Experience'
};

export default function ExperiencePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
        <p className="text-muted-foreground">A lightweight snapshot of recent roles and focus areas.</p>
      </div>
      <div className="space-y-4">
        {roles.map((role) => (
          <div key={role.company} className="rounded-2xl border border-border/60 bg-card/60 p-5">
            <div className="flex flex-wrap justify-between gap-2 text-sm text-muted-foreground">
              <span>{role.company}</span>
              <span>{role.period}</span>
            </div>
            <h2 className="text-xl font-semibold">{role.role}</h2>
            <p className="text-sm text-muted-foreground">{role.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
