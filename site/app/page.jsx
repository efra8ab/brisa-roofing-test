import LeadForm from "./LeadForm";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Brisa Roofing &middot; Miami-Dade &amp; Broward</p>
        <h1>Free roof inspection in 24 hours</h1>
        <p>
          Leaks, storm damage, insurance inspections. Licensed and insured since 2009.
          Tell us what&apos;s going on and we&apos;ll call you.
        </p>
      </section>
      <section className="form-card">
        <LeadForm />
      </section>
    </main>
  );
}
