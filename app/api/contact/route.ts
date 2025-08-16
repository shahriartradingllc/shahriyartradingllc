import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    const user = process.env.GMAIL_USER;shahriartradingllc@gmail.com
    const pass = process.env.GMAIL_APP_PASSWORD;kywm sylm ayav oeqs

    if (!user || !pass) {
      console.error("Email env vars missing");
      return Response.json({ error: "Server email is not configured." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to: user,
      subject: `New message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p>${message.replace(/\n/g, "<br/>")}</p>`,
    });

    return Response.json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Failed to send email." }, { status: 500 });
  }
}

export const dynamic = "force-dynamic";
