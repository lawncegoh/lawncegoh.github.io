export const metadata = {
  title: 'Research'
};

export default function ResearchPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Research</h1>
        <p className="text-muted-foreground">
          Short memos on strategy research, robustness checks, and execution assumptions.
        </p>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-border/60 bg-card/60 p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl font-semibold">Vol expansion burst + breakout (4h)</h2>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">MVP</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            A quiet-to-burst volatility filter gated by Donchian breakout direction. Backtest (research run) showed
            approximately <span className="font-medium text-foreground">+60.7%</span> total return with roughly{' '}
            <span className="font-medium text-foreground">-39.3%</span> max drawdown over the sampled period (see repo
            artifacts).
          </p>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card/60 p-5">
          <h2 className="text-xl font-semibold">Notes</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              These are research backtests, not investment advice. Live execution adds slippage, funding, and partial-fill
              realities.
            </li>
            <li>
              Current deployment target: Drift SOL-PERP with strict notional caps and DRY_RUN testing first.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
