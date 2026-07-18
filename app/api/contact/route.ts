import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/resend";

/**
 * Contact form API — ready for Step 3 when the live form is wired up.
 * Sends via Resend to CONTACT_EMAIL_TO with [CHRM UK] subject prefix.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();
    const phone = body.phone ? String(body.phone).trim() : undefined;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    await sendContactEmail({ name, email, message, phone });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send email";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
