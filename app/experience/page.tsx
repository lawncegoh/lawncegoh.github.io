export const metadata = {
  title: 'Experience'
};

export default function ExperiencePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
      </div>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Goldman Sachs — Quantitative Strategist (Associate)</h2>
        <p className="text-sm text-muted-foreground">May 2022 — Jan 2026</p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>
            Led an end-to-end OTC client FIX flow for equity-linked products (FIX protocol → Java microservice processor →
            GS Slang-connected pricing), driving a 150% increase in trades from the client.
          </li>
          <li>
            Built pricing data ingestion for structured products: stored product datasets in MongoDB via scheduled jobs and
            persisted curated datasets to AWS S3 for redundancy and downstream consumption.
          </li>
          <li>
            Orchestrated feature engineering workflows using Apache Airflow on EC2, running Python transformations for
            normalization and dimensionality reduction, improving ML prediction stability by ~50%.
          </li>
          <li>
            Developed analytics pipelines and Superset dashboards to monitor turnaround time and error distributions across
            distribution channels; metrics used to forecast customer flow and support deal execution.
          </li>
          <li>
            Helped maintain Kafka streaming for microservices with IAM-based access control and archival to S3.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Education</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>
            NUS — MSc Statistics (May 2024 — Present): applied statistical learning, NLP, time series, finance methods.
          </li>
          <li>
            NUS — BComp Computer Science (AI specialisation) (2018 — 2022): ML foundations, big data systems, CV, ethics.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Notable projects</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>
            <span className="font-medium text-foreground">Earnings call “Reverse RAG”</span> — traced AI-generated
            questions back to source transcript sentences using LangChain chunking, SentenceTransformers embeddings, and a
            FAISS index.
          </li>
          <li>
            <span className="font-medium text-foreground">Real estate niche CRM</span> — Dockerized React + Express +
            Postgres stack with API-based channel integrations (WhatsApp/Instagram/Facebook) and workflow automation via
            n8n; experimented with self-hosted Llama3-8B for lead query replies.
          </li>
          <li>
            <span className="font-medium text-foreground">Crypto low-cap trading bot</span> — tracked KOL posts, scored
            sentiment with FinBERT, and used XGBoost features (market cap, volume, volatility) to inform holding time.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Technical skills</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-foreground">Languages</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Python</li>
              <li>Java</li>
              <li>TypeScript / JavaScript</li>
              <li>Rust</li>
              <li>SQL</li>
              <li>R</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-foreground">Data / ML</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>PyTorch, Hugging Face</li>
              <li>FAISS</li>
              <li>Feature engineering + backtesting</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-foreground">Infra / tooling</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>AWS (EC2, S3, IAM)</li>
              <li>Docker</li>
              <li>Kafka</li>
              <li>MongoDB, Postgres</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-foreground">Analytics / automation</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Airflow</li>
              <li>Superset</li>
              <li>n8n</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Certification</h2>
        <p className="text-sm text-muted-foreground">H2O Generative AI Track</p>
      </section>
    </div>
  );
}
