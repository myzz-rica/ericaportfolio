import { ArrowUpRight, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

const recipient = "ericagyamfuaafordjour@gmail.com";

export default function PortfolioContactForm() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = `Portfolio inquiry from ${name}`;
    const body = `Hi Erica,\n\n${message}\n\nBest,\n${name}\n${email}`;
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setFeedback("Your email app should open with your message addressed to Erica. If it doesn’t, use the email link to send it directly.");
    window.location.href = mailto;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__heading">
        <div><span>WRITE A NOTE</span><h3>Start a conversation</h3></div>
        <span className="contact-form__ornament" aria-hidden="true"><Send size={17} /></span>
      </div>
      <label className="form-field">
        <span>Your name</span>
        <input autoComplete="name" maxLength={100} name="name" placeholder="Name" required />
      </label>
      <label className="form-field">
        <span>Email address</span>
        <input autoComplete="email" maxLength={254} name="email" placeholder="you@example.com" required type="email" />
      </label>
      <label className="form-field">
        <span>Your message</span>
        <textarea maxLength={3000} minLength={10} name="message" placeholder="What would you like to talk about?" required rows={4} />
      </label>
      <p className="contact-form__note">Submitting opens your email app with a ready-to-send draft; this site does not store or send your message.</p>
      <button className="button button--dark contact-form__submit" type="submit">
        Compose email <ArrowUpRight size={16} aria-hidden="true" />
      </button>
      <p className="form-feedback" aria-live="polite" role="status">{feedback}</p>
    </form>
  );
}
