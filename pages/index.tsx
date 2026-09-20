import Head from "next/head";
import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import PersonalBranding from "../components/PersonalBranding";

const exploreItems = [
  { number: "01", title: "Products", description: "Useful software, tools and practical business utilities.", href: "/products" },
  { number: "02", title: "Concepts", description: "Ideas around ERP, automation, AI and better business systems.", href: "/concepts" },
  { number: "03", title: "Projects", description: "Implementations, experiments and case studies from real work.", href: "/projects" },
  { number: "04", title: "Learn", description: "Notes, explanations and structured learning material.", href: "/learn" },
];

const principles = [
  { title: "Pin down", text: "Reduce ambiguity by questioning and clarifying the requirements." },
  { title: "Review", text: "Evaluate the cost, time, and expected benefit to decide whether the system is worth building." },
  { title: "Outline", text: "Prototype a minimum solution and gather feedback from internal and external users before development." },
  { title: "Grow", text: "Enhance the original solution with subtle features that improve the user experience." },
  { title: "Reinforce", text: "Choose practical, durable technology that can support the organisation’s long-term business needs." },
  { title: "Empower", text: "Design for human use first. Following the 80/20 principle, the system should handle lower-value routine work so people can focus their undivided attention on higher-value work." },
  { title: "Systemise", text: "Automate predictable processes using clear rules, while keeping the ongoing cost of running the system as low as practical." },
  { title: "Support", text: "Build systems that support people in their daily work and decision-making." },
  { title: "AI", text: "Use Artificial Intelligence where fixed rules and traditional automation are not enough." },
];

const focusAreas = [
  "Finance & Accounting Systems",
  "Manufacturing & Supply Chain",
  "Business Process Automation",
  "AI for Business Operations",
  "Reporting & Decision Support",
  "ERP Implementation & Process Design",
  "System Integrations",
  "Product Experiments",
];

const productsAndPlatforms = [
  "Power BI",
  "Power Apps",
  "Power Automate",
  "Microsoft Dynamics 365 Business Central",
  "Microsoft Dynamics 365 Finance & Operations",
  "Microsoft Dynamics 365 Sales",
  "ESP32 for IoT Data Collection",
  "Microsoft Copilot",
  "Claude & ChatGPT",
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Akshay Gatkal | Finance, ERP, AI & Automation</title>
        <meta name="description" content="The personal website of Akshay Gatkal — exploring finance, ERP, AI, automation and practical business systems." />
        <meta property="og:title" content="Akshay Gatkal | Finance, ERP, AI & Automation" />
        <meta property="og:description" content="Projects, notes and ideas from Akshay Gatkal." />
        <meta property="og:type" content="website" />
        <style>{`
          html, body { overflow-x: hidden; }

          .hero-grid > section {
            width: 100%;
            box-sizing: border-box;
            padding: 1.5rem !important;
            flex-direction: column !important;
            gap: 1.25rem !important;
          }

          .hero-grid > section > div {
            flex: none !important;
            width: 100% !important;
            min-width: 0 !important;
          }

          .hero-grid > section img {
            width: 150px !important;
            height: 150px !important;
          }

          .hero-grid > section h2,
          .hero-grid > section p,
          .hero-grid > section a {
            overflow-wrap: anywhere;
          }

          @media (max-width: 760px) {
            .hero-grid {
              display: block !important;
              grid-template-columns: 1fr !important;
            }

            .hero-grid > section {
              margin-top: 2.5rem !important;
              padding: 2rem 1rem !important;
            }

            .hero-grid > section img {
              width: min(190px, 65vw) !important;
              height: min(190px, 65vw) !important;
            }

            .about-grid {
              display: block !important;
            }

            .about-grid > div,
            .about-grid > section {
              width: 100% !important;
              max-width: 100% !important;
              min-width: 0 !important;
              box-sizing: border-box;
            }

            .about-grid > section {
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
              padding: 2rem 1rem !important;
              margin-top: 2rem !important;
              gap: 1.5rem !important;
              overflow: hidden;
            }

            .about-grid > section > div {
              flex: none !important;
              width: 100% !important;
              min-width: 0 !important;
            }

            .about-grid > section img {
              width: min(220px, 70vw) !important;
              height: min(220px, 70vw) !important;
            }

            .about-grid > section h2,
            .about-grid > section p,
            .about-grid > section a {
              max-width: 100%;
              overflow-wrap: anywhere;
            }

            .about-grid > section > div:last-child {
              text-align: center !important;
            }

            .about-grid > section > div:last-child > div:last-child {
              justify-content: center;
              flex-wrap: wrap;
            }
          }

          @media (max-width: 760px) {
            header {
              position: sticky !important;
              top: 0;
              padding: .65rem 0 !important;
            }

            header nav.container {
              display: grid !important;
              grid-template-columns: minmax(0, 1fr) auto;
              gap: .55rem .75rem;
              padding: 0 .75rem !important;
              max-width: none !important;
            }

            header nav.container > a {
              white-space: nowrap;
              font-size: .95rem !important;
            }

            header nav.container > div {
              grid-column: 1 / -1;
              display: flex !important;
              justify-content: space-between;
              gap: .35rem !important;
              width: 100%;
            }

            header nav.container > div a {
              font-size: .76rem;
              white-space: nowrap;
            }

            header nav.container > div a:last-child {
              padding: 5px 9px !important;
            }

            main .container {
              max-width: none;
              padding-left: 1rem;
              padding-right: 1rem;
            }

            section[style*="padding: 5.5rem"] {
              padding: 3.5rem 1rem 3rem !important;
            }

            section[style*="padding: 5.5rem"] > .container {
              display: block !important;
              grid-template-columns: 1fr !important;
            }

            section[style*="padding: 5.5rem"] > .container > div:first-child {
              min-width: 0;
              width: 100%;
              padding-right: 0;
            }

            section[style*="padding: 5.5rem"] h1 {
              font-size: clamp(2.75rem, 15vw, 4rem) !important;
              overflow-wrap: anywhere;
            }

            section[style*="padding: 5.5rem"] p {
              max-width: 100%;
            }


            [style*="grid-template-columns: minmax(0, 1fr) minmax(300px"] {
              grid-template-columns: 1fr !important;
            }

            [style*="grid-template-columns: repeat(auto-fit"] {
              grid-template-columns: 1fr !important;
            }

            [style*="grid-template-columns: repeat(auto-fit, minmax(280px"] {
              grid-template-columns: 1fr !important;
            }

            [style*="grid-template-columns: repeat(auto-fit, minmax(260px"] {
              grid-template-columns: 1fr !important;
            }

            [style*="grid-template-columns: repeat(auto-fit, minmax(210px"] {
              grid-template-columns: 1fr !important;
            }

            [style*="padding: 5rem 1rem"] {
              padding: 3.5rem 1rem !important;
            }
          }
        `}</style>
      </Head>

      <Navbar />

      <main>
        <section style={heroSection}>
          <div className="container hero-grid" style={heroGrid}>
            <div>
              <p style={eyebrowStyle}>Finance • ERP • AI • Automation</p>
              <h1 style={heroHeading}>Akshay Gatkal</h1>
              <p style={heroLead}>I work where business processes, technology and decision-making meet.</p>
              <p style={heroBody}>
                My work spans ERP implementation, finance, automation, AI and operational systems —
                with a focus on solving practical problems that businesses actually face.
              </p>
              <div style={buttonRow}>
                <Link href="/projects" style={primaryButton}>Explore my work <span aria-hidden="true">↗</span></Link>
                <Link href="/learn" style={secondaryButton}>Read my notes <span aria-hidden="true">↗</span></Link>
              </div>
              <p style={locationLine}>Based in Pune • Building, consulting and learning in public.</p>
            </div>
            <PersonalBranding
              name="Akshay Gatkal"
              tagline="I work at the intersection of Finance, ERP, AI & Automation."
              organization="Sr. Business Analyst at Advaiya Solutions, Inc."
              organizationLink="https://www.linkedin.com/company/advaiya-inc/posts/?feedView=all"
              email="akshaytax2014@gmail.com"
              photoUrl="https://media.licdn.com/dms/image/v2/D4D35AQGMXgO4FLuqpw/profile-framedphoto-shrink_400_400/B4DaC6jlxoHsAY-/0/1789836287568?e=1790442000&v=beta&t=kVijMSx10niHuV-l-VUG8ojtL-LhYioLV5Xhlw1fqaE"
              linkedin="https://www.linkedin.com/in/akshaygatkal/"
              github="https://github.com/akshaygatkal"
              website="https://marathifinancial.com"
            />
          </div>
        </section>

        <section style={currentlySection} aria-labelledby="currently-heading">
          <div className="container">
            <p id="currently-heading" style={eyebrowStyle}>Currently</p>
            <div style={currentlyGrid}>
              <div><strong style={smallTitle}>Building</strong><p style={mutedText}>Business systems, ERP tools and automation.</p></div>
              <div><strong style={smallTitle}>Exploring</strong><p style={mutedText}>AI applied to finance, operations and ERP.</p></div>
              <div><strong style={smallTitle}>Writing</strong><p style={mutedText}>Notes from projects, experiments and learning.</p></div>
            </div>
          </div>
        </section>

        <Section title="Explore" background="#ffffff">
          <div style={exploreGrid}>
            {exploreItems.map((item) => (
              <Link href={item.href} key={item.href} style={exploreCard}>
                <span style={exploreNumber}>{item.number}</span>
                <span>
                  <strong style={exploreTitle}>{item.title}</strong>
                  <span style={exploreDescription}>{item.description}</span>
                </span>
                <span style={exploreArrow} aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </Section>

        <Section title="How I think about systems — PROGRESS AI" background="#f8fafc">
          <p style={sectionIntro}>
            Good systems should reduce confusion, make decisions easier and reflect how a business actually works.
          </p>
          <div style={principlesGrid}>
            {principles.map((principle) => (
              <article key={principle.title} style={principleCard}>
                <span style={principleMark}>—</span>
                <h3 style={principleTitle}>{principle.title}</h3>
                <p style={mutedText}>{principle.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section title="About me" background="#ffffff">
          <div className="about-grid" style={aboutGrid}>
            <div>
              <p style={aboutHighlight}>Finance background. Technology mindset. Business-first approach.</p>
              <p style={aboutText}>My background began in finance and accounting, which naturally led me into ERP and business systems.</p>
              <p style={aboutText}>Over time, my work expanded across Microsoft Dynamics 365 Business Central, manufacturing, supply chain, reporting, integrations, automation and AI.</p>
              <p style={aboutText}>I’m particularly interested in the gap between what software is designed to do and how businesses actually operate.</p>
              <p style={aboutText}>This website is where I document projects, ideas, experiments and things I’m learning along the way.</p>
              <Link href="/about" style={inlineLink}>More about me →</Link>
            </div>
          </div>
        </Section>

        <Section title="Selected focus" background="#f8fafc">
          <div style={focusGrid}>
            {focusAreas.map((area, index) => (
              <div key={area} style={focusItem}>
                <span style={focusIndex}>{String(index + 1).padStart(2, "0")}</span>
                <span>{area}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Products & platforms" background="#ffffff">
          <div style={focusGrid}>
            {productsAndPlatforms.map((product, index) => (
              <div key={product} style={focusItem}>
                <span style={focusIndex}>{String(index + 1).padStart(2, "0")}</span>
                <span>{product}</span>
              </div>
            ))}
          </div>
        </Section>

        <section style={closingSection}>
          <div className="container" style={closingInner}>
            <p style={eyebrowStyle}>Get in touch</p>
            <h2 style={closingHeading}>Let’s keep the conversation simple.</h2>
            <p style={closingText}>
              If you are exploring ERP, business systems, automation, AI or simply trying to make a complicated process work better, leave a message through the channel that works best for you.
            </p>
            <div style={contactOptions}>
              <a href="mailto:akshaytax2014@gmail.com" style={contactOption}>
                <strong style={contactOptionTitle}>Email me</strong>
                <span>akshaytax2014@gmail.com</span>
              </a>
              <a href="tel:+917083148500" style={contactOption}>
                <strong style={contactOptionTitle}>Call me</strong>
                <span>+91 70831 48500</span>
              </a>
              <a href="https://wa.me/917083148500" target="_blank" rel="noreferrer" style={contactOption}>
                <strong style={contactOptionTitle}>WhatsApp me</strong>
                <span>Start a direct conversation ↗</span>
              </a>
              <a href="https://www.linkedin.com/in/akshaygatkal/" target="_blank" rel="noreferrer" style={contactOption}>
                <strong style={contactOptionTitle}>Message me on LinkedIn</strong>
                <span>Connect or send a direct message ↗</span>
              </a>
              <Link href="/contact" style={contactOption}>
                <strong style={contactOptionTitle}>Leave your details</strong>
                <span>I’ll get back to you personally →</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

const heroSection: React.CSSProperties = {
  background: "#ffffff",
  borderBottom: "1px solid #e5e7eb",
  padding: "5.5rem 1rem 5rem",
};

const heroGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, .6fr)",
  gap: "4rem",
  alignItems: "center",
  maxWidth: "1120px",
  position: "relative",
};

const eyebrowStyle: React.CSSProperties = {
  color: "#0E4D92",
  fontSize: ".76rem",
  fontWeight: 700,
  letterSpacing: ".14em",
  textTransform: "uppercase",
  margin: 0,
};

const heroHeading: React.CSSProperties = {
  color: "#111827",
  fontSize: "clamp(3rem, 7vw, 5rem)",
  lineHeight: 1,
  letterSpacing: "-.055em",
  margin: "1.2rem 0 1.3rem",
};

const heroLead: React.CSSProperties = {
  color: "#111827",
  fontSize: "clamp(1.35rem, 2.5vw, 2rem)",
  lineHeight: 1.25,
  maxWidth: "650px",
  margin: "0 0 1.2rem",
};

const heroBody: React.CSSProperties = { color: "#4b5563", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "610px", margin: 0 };
const buttonRow: React.CSSProperties = { display: "flex", flexWrap: "wrap", gap: ".8rem", marginTop: "2rem" };
const primaryButton: React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: ".55rem", background: "#0E4D92", color: "#fff", padding: ".8rem 1.1rem", borderRadius: "7px", textDecoration: "none", fontWeight: 700 };
const secondaryButton: React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: ".55rem", color: "#0E4D92", border: "1px solid #cbd5e1", padding: ".8rem 1.1rem", borderRadius: "7px", textDecoration: "none", fontWeight: 700, background: "#fff" };
const locationLine: React.CSSProperties = { color: "#6b7280", fontSize: ".85rem", marginTop: "2rem" };
const currentlySection: React.CSSProperties = { background: "#f8fafc", borderBottom: "1px solid #e5e7eb", padding: "1.5rem 1rem" };
const currentlyGrid: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", marginTop: "1rem" };
const smallTitle: React.CSSProperties = { color: "#111827", fontSize: ".95rem" };
const mutedText: React.CSSProperties = { color: "#6b7280", fontSize: ".92rem", lineHeight: 1.7, margin: ".35rem 0 0" };
const exploreGrid: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "0 2rem" };
const exploreCard: React.CSSProperties = { display: "grid", gridTemplateColumns: "42px 1fr auto", gap: "1rem", alignItems: "start", borderTop: "1px solid #e5e7eb", padding: "1.6rem 0", textDecoration: "none" };
const exploreNumber: React.CSSProperties = { color: "#9ca3af", fontSize: ".8rem", fontWeight: 700, letterSpacing: ".08em" };
const exploreTitle: React.CSSProperties = { display: "block", color: "#111827", fontSize: "1.15rem", marginBottom: ".35rem" };
const exploreDescription: React.CSSProperties = { display: "block", color: "#6b7280", fontSize: ".92rem", lineHeight: 1.6 };
const exploreArrow: React.CSSProperties = { color: "#0E4D92", fontSize: "1.2rem" };
const sectionIntro: React.CSSProperties = { color: "#4b5563", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "700px", margin: "0 0 2rem" };
const principlesGrid: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" };
const principleCard: React.CSSProperties = { borderTop: "2px solid #0E4D92", paddingTop: "1rem" };
const principleMark: React.CSSProperties = { color: "#0E4D92", fontSize: "1.5rem" };
const principleTitle: React.CSSProperties = { color: "#111827", fontSize: "1.1rem", margin: ".6rem 0 0" };
const aboutGrid: React.CSSProperties = { display: "block", width: "100%" };
const aboutHighlight: React.CSSProperties = { color: "#0E4D92", fontWeight: 700, lineHeight: 1.6, marginTop: 0 };
const aboutText: React.CSSProperties = { color: "#4b5563", lineHeight: 1.8, width: "100%" };
const inlineLink: React.CSSProperties = { color: "#0E4D92", fontWeight: 700, textDecoration: "none" };
const focusGrid: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", borderTop: "1px solid #e5e7eb" };
const focusItem: React.CSSProperties = { display: "flex", gap: "1rem", alignItems: "baseline", borderBottom: "1px solid #e5e7eb", padding: "1rem 0", color: "#374151" };
const focusIndex: React.CSSProperties = { color: "#9ca3af", fontSize: ".78rem", fontWeight: 700 };
const closingSection: React.CSSProperties = { background: "#ffffff", borderTop: "1px solid #e5e7eb", padding: "5rem 1rem" };
const closingInner: React.CSSProperties = { maxWidth: "760px" };
const closingHeading: React.CSSProperties = { color: "#111827", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", margin: ".8rem 0 1rem" };
const closingText: React.CSSProperties = { color: "#4b5563", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "680px", margin: 0 };
const contactOptions: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "1rem", marginTop: "2rem" };
const contactOption: React.CSSProperties = { display: "flex", flexDirection: "column", gap: ".35rem", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "1.1rem", color: "#4b5563", textDecoration: "none", background: "#fff" };
const contactOptionTitle: React.CSSProperties = { color: "#111827", fontSize: ".98rem" };
