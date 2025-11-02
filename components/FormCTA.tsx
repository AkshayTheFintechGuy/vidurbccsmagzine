import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface FormCTAProps {
  formUrl: string;
}

export default function FormCTA({ formUrl }: FormCTAProps) {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "4rem 1rem",
        background: "linear-gradient(180deg, #f9fafb, #ffffff)",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        margin: "3rem auto",
        maxWidth: "800px",
      }}
    >
      {/* Header */}
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#0E4D92",
          marginBottom: "1rem",
        }}
      >
        💬 We’d Love to Hear From You
      </h2>

      {/* Description */}
      <p
        style={{
          color: "#374151",
          fontSize: "1.1rem",
          maxWidth: "600px",
          margin: "0 auto 2rem auto",
          lineHeight: 1.6,
        }}
      >
        Your ideas and feedback help us build better systems.
        <br />
        Fill out a quick Microsoft Form to share your thoughts — it only takes a minute.
      </p>

      {/* Button */}
      <a
        href={formUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "#0E4D92",
          color: "#fff",
          textDecoration: "none",
          padding: "0.9rem 2rem",
          fontSize: "1rem",
          fontWeight: 600,
          borderRadius: "10px",
          transition: "all 0.2s ease-in-out",
        }}
        onMouseOver={(e) =>
          ((e.target as HTMLElement).style.background = "#2563EB")
        }
        onMouseOut={(e) =>
          ((e.target as HTMLElement).style.background = "#0E4D92")
        }
      >
        Open Microsoft Form <FaExternalLinkAlt size={16} />
      </a>

      {/* Small note */}
      <p
        style={{
          color: "#6b7280",
          fontSize: "0.9rem",
          marginTop: "1.5rem",
        }}
      >
        Your responses are automatically saved to our secure Microsoft Excel system.
      </p>
    </section>
  );
}
2