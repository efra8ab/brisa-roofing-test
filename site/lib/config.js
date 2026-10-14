// Where new leads go. In production this is the client's Make webhook.
// Locally it falls back to the fake webhook in tools/mock_make_webhook.py.
export const MAKE_WEBHOOK_URL =
  process.env.MAKE_WEBHOOK_URL ?? "http://localhost:8787/hook";

// The Make webhook only accepts requests that send this key.
// TODO: move to Vercel env vars (Carlos, 2026-10-05)
export const MAKE_API_KEY =
  process.env.MAKE_API_KEY ?? "mk_live_4f8a2c91d7e3b6a05f1c8e2d9b7a3f60";
