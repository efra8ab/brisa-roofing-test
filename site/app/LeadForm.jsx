"use client";

import { useState } from "react";

export default function LeadForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSending(true);
    const data = Object.fromEntries(new FormData(event.target));

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error(err);
    }

    // Meta Pixel conversion (the pixel script is only loaded in production)
    window.fbq?.("track", "Lead");
    setSent(true);
    setSending(false);
  }

  if (sent) {
    return (
      <div className="thanks">
        <h2>Thanks!</h2>
        <p>We&apos;ll call you within 24 hours to schedule your free inspection.</p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <label>
        Full name
        <input name="name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" required />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" placeholder="(305) 555-0123" required />
      </label>
      <label>
        Zip code
        <input name="zip" inputMode="numeric" required />
      </label>
      <label>
        What&apos;s going on with your roof?
        <textarea name="message" rows={3} />
      </label>
      <button type="submit" disabled={sending}>
        {sending ? "Sending..." : "Get my free inspection"}
      </button>
    </form>
  );
}
