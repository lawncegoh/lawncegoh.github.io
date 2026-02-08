const accolades = [
  {
    title: 'Emergent Systems Fellow',
    org: 'Unknown Lab',
    year: '2024',
    summary: 'Selected for a residency exploring resilient civic infrastructure with lightweight sensing networks.'
  },
  {
    title: 'Github Octogarden Highlight',
    org: 'GitHub',
    year: '2022',
    summary: 'Digital garden pattern featured in the community showcase for thoughtful personal knowledge bases.'
  }
];

export const metadata = {
  title: 'Accolades'
};

export default function AccoladesPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Accolades</h1>
        <p className="text-muted-foreground">Signals from peers, programs, and curators.</p>
      </div>
      <div className="space-y-4">
        {accolades.map((item) => (
          <div key={item.title} className="rounded-2xl border border-border/60 bg-card/60 p-5">
            <div className="flex flex-wrap justify-between gap-2 text-sm text-muted-foreground">
              <span>{item.org}</span>
              <span>{item.year}</span>
            </div>
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-sm text-muted-foreground">{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
