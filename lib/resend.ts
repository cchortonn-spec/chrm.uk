import { Resend } from "resend";

const FROM_ADDRESS = "RIGN <info@rign.uk>";
const SUBJECT_PREFIX = "[RIGN]";

export type ContactEmailPayload = {
  name: string;
  email: string;
  message: string;
  phone?: string;
};

/**
 * Sends a contact-form email via Resend.
 * From: info@rign.uk
 * To: CONTACT_EMAIL_TO env (rign.uk@gmail.com)
 * Subject always prefixed with [RIGN]
 */
export async function sendContactEmail(payload: ContactEmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }
  if (!to) {
    throw new Error("CONTACT_EMAIL_TO is not set");
  }

  const resend = new Resend(apiKey);
  const subject = `${SUBJECT_PREFIX} New enquiry from ${payload.name}`;

  const { data, error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: [to],
    replyTo: payload.email,
    subject,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      payload.phone ? `Phone: ${payload.phone}` : null,
      "",
      "Message:",
      payload.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
