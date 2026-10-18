
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(254),
  projectType: z.enum([
    "Website",
    "Web Application",
    "E-commerce",
    "UI/UX Design",
    "Digital Strategy",
    "Something else",
  ]),
  budget: z.enum([
    "",
    "Not sure yet",
    "Under £2,000",
    "£2,000 – £5,000",
    "£5,000 – £10,000",
    "£10,000+",
  ]),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(500).optional().default(""),
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Please check your details and try again.",
        },
        { status: 400 }
      );
    }

    const data = parsed.data;
    console.log("CONTACT DEBUG:", {
  honeypotFilled: Boolean(data.website),
  hasApiKey: Boolean(process.env.RESEND_API_KEY),
  fromEmailConfigured: Boolean(process.env.CONTACT_FROM_EMAIL),
});

    // Silently ignore simple spam submissions.
    // if (data.website) {
    //   return NextResponse.json({
    //     message: "Your inquiry has been received.",
    //   });
    // }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !fromEmail) {
      console.error("Contact email configuration is missing.");

      return NextResponse.json(
        {
          message:
            "The contact form is temporarily unavailable. Please try again later.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(data.name);
    const safeEmail = escapeHtml(data.email);
    const safeProject = escapeHtml(data.projectType);
    const safeBudget = escapeHtml(data.budget || "Not specified");
    const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br />");

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: ["ferial.echresh29@gmail.com"],
      replyTo: data.email,
      subject: "New SHAMS Project Inquiry",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#222;line-height:1.7">
          <div style="background:#14100e;padding:24px;border-radius:12px 12px 0 0">
            <h1 style="color:#ff6a00;margin:0;font-size:24px">
              SHAMS Technology
            </h1>
            <p style="color:#ccc;margin:8px 0 0">
              New project inquiry
            </p>
          </div>

          <div style="padding:28px;border:1px solid #eee">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Project type:</strong> ${safeProject}</p>
            <p><strong>Budget:</strong> ${safeBudget}</p>

            <hr style="border:0;border-top:1px solid #eee;margin:24px 0" />

            <h2 style="font-size:17px">Project details</h2>
            <p>${safeMessage}</p>
          </div>

          <div style="padding:18px;color:#777;font-size:12px">
            Submitted through the SHAMS Technology website.
          </div>
        </div>
      `,
      text: [
        "New SHAMS Project Inquiry",
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Project type: ${data.projectType}`,
        `Budget: ${data.budget || "Not specified"}`,
        "",
        "Project details:",
        data.message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend contact error:", error);

      return NextResponse.json(
        {
          message:
            "We couldn't send your inquiry right now. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      message: "Your inquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
