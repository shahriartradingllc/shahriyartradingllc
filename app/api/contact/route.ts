import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    // এখানে env থেকে নাও
    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;

    if (!user || !pass) {
      return Response.json({ error: "Email service not configured properly." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL || user,
      subject: "New Contact Form Submission",
      text: message,
      html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b> ${message}</p>`,
    });

    return Response.json({ success: true, message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("Email send error:", error);
    return Response.json({ success: false, message: "Email failed to send." }, { status: 500 });
  }
}
