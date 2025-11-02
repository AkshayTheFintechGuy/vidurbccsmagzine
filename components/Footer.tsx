import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e5e7eb",
        marginTop: "3rem",
        padding: "1.5rem 1rem",
        textAlign: "center",
        color: "#6b7280",
        fontSize: "0.9rem",
        background: "#fff",
      }}
    >
      <p>© {new Date().getFullYear()} Akshay Gatkal — Built for clarity, not noise.</p>
      <p>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0E4D92", textDecoration: "none" }}
        >
          Hosted on Vercel
        </a>
      </p>
    </footer>
  );
}
