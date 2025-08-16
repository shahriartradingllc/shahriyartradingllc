'use client';

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<null | "idle" | "loading" | "success" | "error">(null);
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        setMessage("Message sent! I will reply to your email soon.");
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setMessage(data?.error || "Something went wrong. Please try again later.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <section id="contact" className="container py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Contact</h2>
          <p className="text-slate-300">Have a project in mind? Let’s talk.</p>
        </div>
        <form onSubmit={onSubmit} className="card p-6 space-y-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Name</label>
            <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-slate-800 border border-slate-700 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Email</label>
            <input type="email" name="email" required placeholder="you@example.com" className="w-full rounded-xl bg-slate-800 border border-slate-700 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Message</label>
            <textarea name="message" required rows={5} placeholder="Tell me about your project..." className="w-full rounded-xl bg-slate-800 border border-slate-700 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500" />
          </div>
          <button className="btn" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status && <p className={`text-sm ${status === "error" ? "text-red-400" : "text-green-400"}`}>{message}</p>}
        </form>
      </div>
    </section>
  );
}
