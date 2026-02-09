export const metadata = {
  title: 'CV'
};

export default function CvPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">CV</h1>
        <p className="text-muted-foreground">Highlights pulled from my resume. (Full PDF available on request.)</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Goldman Sachs  Quantitative Engineer (Associate)</h2>
        <p className="text-sm text-muted-foreground">May 2022  Present</p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>
            Built end-to-end FIX flows for equity-linked products (FIX protocol  Java microservice processor  pricing
            integration), increasing trade volume from a key client.
          </li>
          <li>
            Designed cloud ingestion + feature engineering pipelines for structured product pricing data using MongoDB, S3,
            Airflow (EC2), and Python transformations.
          </li>
          <li>
            Developed analytics pipelines + Superset dashboards to monitor turnaround time and error distributions across
            distribution channels.
          </li>
          <li>Helped maintain Kafka streaming pipelines with secure access controls and archival to S3.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Education</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>
            NUS  MSc Statistics (May 2024  Present): applied statistical learning, NLP, time series, finance methods.
          </li>
          <li>
            NUS  BComp Computer Science (AI specialisation) (2018  2022): ML foundations, big data systems, CV,
            ethics.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Technical skills (selected)</h2>
        <p className="text-sm text-muted-foreground">
          Python, Java, TypeScript, SQL, AWS (EC2/S3/IAM), Docker, Kafka, Airflow, MongoDB, Postgres, Superset.
        </p>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card/60 p-5 text-sm text-muted-foreground">
        Want the PDF version here as a download button? Tell me what email/phone (if any) you want public, and Ill wire it
        in.
      </section>
    </div>
  );
}
