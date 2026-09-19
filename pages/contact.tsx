import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const countryCodes = [
  ["India", "+91"], ["USA", "+1"], ["China", "+86"], ["UK", "+44"],
  ["Australia", "+61"], ["Canada", "+1"], ["Germany", "+49"], ["France", "+33"],
  ["Singapore", "+65"], ["United Arab Emirates", "+971"], ["Saudi Arabia", "+966"],
  ["South Africa", "+27"], ["Japan", "+81"], ["New Zealand", "+64"], ["Other", "+"] as [string, string],
];

export default function Contact() {
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [validationError, setValidationError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email && !phone && !linkedin) {
      setValidationError("Please provide an email, phone number, or LinkedIn ID.");
      return;
    }
    setValidationError("");
    setStatus("sending");

    const contactSummary = [
      email && `Email: ${email}`,
      phone && `Phone: ${countryCode} ${phone}`,
      linkedin && `LinkedIn: ${linkedin}`,
    ].filter(Boolean).join(" | ");

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email || `${countryCode} ${phone}` || linkedin, name: "", message: `Callback request — ${contactSummary}` }),
      });

      if (!response.ok) throw new Error("Unable to send");
      setStatus("sent");
      setEmail("");
      setPhone("");
      setLinkedin("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Head>
        <title>Get in touch | Akshay Gatkal</title>
        <meta
          name="description"
          content="A simple way to contact Akshay Gatkal by email, LinkedIn, or a callback request."
        />
      </Head>

      <Navbar />

      <main style={page}>
        <div className="container" style={layout}>
          <section style={intro}>
            <p style={eyebrow}>GET IN TOUCH</p>
            <h1 style={heading}>Let’s make contact easy.</h1>
            <p style={lead}>
              Whether you are a founder, business leader, technology professional, or simply
              exploring an idea, you can reach me directly through the channel that suits you.
            </p>

            <div style={links}>
              <a href="mailto:akshaytax2014@gmail.com" style={contactLink}>
                <span style={linkLabel}>Email me directly</span>
                <span>akshaytax2014@gmail.com</span>
              </a>
              <a href="tel:+917083148500" style={contactLink}>
                <span style={linkLabel}>Call me directly</span>
                <span>+91 70831 48500</span>
              </a>
              <a href="https://wa.me/917083148500" target="_blank" rel="noreferrer" style={contactLink}>
                <span style={linkLabel}>Message me on WhatsApp</span>
                <span>Start a direct conversation ↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/akshaygatkal/"
                target="_blank"
                rel="noreferrer"
                style={contactLink}
              >
                <span style={linkLabel}>Message me on LinkedIn</span>
                <span>Connect or send a direct message ↗</span>
              </a>
            </div>
          </section>

          <section style={formCard} aria-labelledby="callback-heading">
            <p style={eyebrow}>PREFER A CALLBACK?</p>
            <h2 id="callback-heading" style={formHeading}>Choose your easiest way to be reached.</h2>
            <p style={formText}>
              Share one or more contact details. I’ll use the channel you prefer and get back to you personally.
            </p>

            {status === "sent" ? (
              <p role="status" style={success}>
                Thanks. I have your contact details and will be in touch.
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <label htmlFor="email" style={label}>Email address <span style={optional}>(optional)</span></label>
                <input id="email" name="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" autoComplete="email" style={input} />

                <label htmlFor="phone" style={label}>Mobile number <span style={optional}>(optional)</span></label>
                <div style={phoneRow}>
                  <select id="countryCode" value={countryCode} onChange={(event) => setCountryCode(event.target.value)} style={countrySelect} aria-label="Country code">
                    {countryCodes.map(([country, code]) => <option value={code} key={country}>{country} ({code})</option>)}
                  </select>
                  <input id="phone" name="phone" type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="70831 48500" autoComplete="tel" style={{ ...input, flex: 1 }} />
                </div>

                <label htmlFor="linkedin" style={label}>LinkedIn ID or profile link <span style={optional}>(optional)</span></label>
                <input id="linkedin" name="linkedin" type="text" value={linkedin} onChange={(event) => setLinkedin(event.target.value)} placeholder="linkedin.com/in/your-name" style={input} />

                {validationError && <p role="alert" style={error}>{validationError}</p>}
                <button type="submit" disabled={status === "sending"} style={button}>
                  {status === "sending" ? "Sending…" : "Give me a callback"}
                </button>
                {status === "error" && (
                  <p role="alert" style={error}>
                    Something went wrong. Please email me directly instead.
                  </p>
                )}
              </form>
            )}
          </section>
        </div>

        <div className="container" style={footerNote}>
          <Link href="/projects" style={backLink}>← Continue exploring my work</Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

const page: React.CSSProperties = { background: "#f8fafc", minHeight: "70vh", padding: "5rem 1rem" };
const layout: React.CSSProperties = { display: "grid", gridTemplateColumns: "minmax(0, 1.1fr) minmax(320px, .9fr)", gap: "4rem", alignItems: "center" };
const intro: React.CSSProperties = { maxWidth: "620px" };
const eyebrow: React.CSSProperties = { color: "#0E4D92", fontSize: ".74rem", fontWeight: 700, letterSpacing: ".14em", margin: "0 0 1rem" };
const heading: React.CSSProperties = { color: "#111827", fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1.05, letterSpacing: "-.05em", margin: "0 0 1.4rem" };
const lead: React.CSSProperties = { color: "#4b5563", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "570px" };
const links: React.CSSProperties = { display: "grid", gap: ".75rem", marginTop: "2.2rem" };
const contactLink: React.CSSProperties = { display: "flex", flexDirection: "column", gap: ".2rem", borderTop: "1px solid #dbe2ea", padding: "1rem 0", color: "#4b5563", textDecoration: "none" };
const linkLabel: React.CSSProperties = { color: "#111827", fontWeight: 700 };
const formCard: React.CSSProperties = { background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "2rem", boxShadow: "0 12px 30px rgba(15, 23, 42, .06)" };
const formHeading: React.CSSProperties = { color: "#111827", fontSize: "1.7rem", lineHeight: 1.2, margin: "0 0 .8rem" };
const formText: React.CSSProperties = { color: "#6b7280", lineHeight: 1.7, margin: "0 0 1.5rem" };
const label: React.CSSProperties = { display: "block", color: "#374151", fontWeight: 700, fontSize: ".9rem", marginBottom: ".5rem" };
const input: React.CSSProperties = { width: "100%", border: "1px solid #cbd5e1", borderRadius: "6px", padding: ".9rem", font: "inherit", color: "#111827", outlineColor: "#0E4D92" };
const optional: React.CSSProperties = { color: "#9ca3af", fontWeight: 400 };
const phoneRow: React.CSSProperties = { display: "flex", gap: ".5rem", marginBottom: "1rem" };
const countrySelect: React.CSSProperties = { width: "42%", border: "1px solid #cbd5e1", borderRadius: "6px", padding: ".9rem .55rem", font: "inherit", color: "#111827", background: "#fff" };
const button: React.CSSProperties = { border: 0, borderRadius: "6px", background: "#0E4D92", color: "#ffffff", padding: ".9rem 1.2rem", marginTop: "1rem", fontWeight: 700, cursor: "pointer" };
const success: React.CSSProperties = { background: "#ecfdf5", color: "#047857", border: "1px solid #a7f3d0", borderRadius: "6px", padding: "1rem", lineHeight: 1.6 };
const error: React.CSSProperties = { color: "#b91c1c", fontSize: ".9rem", marginTop: "1rem" };
const footerNote: React.CSSProperties = { marginTop: "3rem" };
const backLink: React.CSSProperties = { color: "#0E4D92", fontWeight: 700, textDecoration: "none" };
