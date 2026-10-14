import { NextResponse } from "next/server";
import { MAKE_API_KEY, MAKE_WEBHOOK_URL } from "../../../lib/config";
import { isValidEmail, isValidPhone } from "../../../lib/validate";

// Receives the form on the landing page and forwards the lead to Make.
export async function POST(request) {
  const { name, email, phone, zip, message } = await request.json();

  if (!name || !isValidEmail(email)) {
    console.log("[api/lead] 400 invalid name or email");
    return NextResponse.json({ error: "Invalid name or email" }, { status: 400 });
  }

  if (!isValidPhone(phone)) {
    console.log(`[api/lead] 400 invalid phone: "${phone}"`);
    return NextResponse.json({ error: "Invalid phone" }, { status: 400 });
  }

  const res = await fetch(MAKE_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-make-apikey": MAKE_API_KEY,
    },
    body: JSON.stringify({ name, email, phoneNumber: phone, zip, message }),
  });

  if (!res.ok) {
    console.log(`[api/lead] 502 Make responded ${res.status}`);
    return NextResponse.json({ error: "Could not save lead" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
