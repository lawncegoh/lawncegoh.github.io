import type { Project } from '@/components/projects/projects-grid';

export const tradingProjects: Project[] = [
  {
    title: 'crypto_dispersion (vol research workbench)',
    summary:
      'Systematic research sandbox for volatility / breakout-style strategies, grid-search, and robustness checks (Monte Carlo).',
    stack: ['Rust', 'Python', 'Backtesting', 'Monte Carlo'],
    status: 'Active'
  },
  {
    title: 'HFT Order Book (C++ + Python wrapper)',
    summary: 'A low-latency limit order book implementation with a Python wrapper for experimentation.',
    stack: ['C++', 'Python', 'Market microstructure'],
    status: 'Open-source'
  },
  {
    title: 'QuantConnect Lean (fork)',
    summary: 'Explorations using Leans algorithmic trading engine patterns (research  backtest  deploy).',
    stack: ['C#', 'Python', 'Lean'],
    status: 'Learning'
  }
];

export const mlProjects: Project[] = [
  {
    title: 'Earnings Call Reverse RAG',
    summary:
      'Trace AI-generated questions back to source transcript sentences using embeddings + vector search for attribution.',
    stack: ['LangChain', 'SentenceTransformers', 'FAISS'],
    status: 'Prototype'
  },
  {
    title: 'Crypto Low Cap Coin Trading Bot (sentiment + features)',
    summary:
      'KOL tracking + FinBERT sentiment aggregation + XGBoost features for hold-time modelling and signal scoring.',
    stack: ['Python', 'FinBERT', 'XGBoost'],
    status: 'Prototype'
  }
];

export const infraProjects: Project[] = [
  {
    title: 'port-tracker',
    summary: 'Personal investment portfolio + net worth tracker.',
    stack: ['TypeScript', 'Tracking', 'Dashboards'],
    status: 'Active'
  }
];

