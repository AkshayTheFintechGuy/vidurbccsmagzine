import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaGlobe } from "react-icons/fa";

interface PersonalBrandingProps {
  name: string;
  tagline: string;
  organization: string;
  email: string;
  photoUrl: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export default function PersonalBranding({
  name,
  tagline,
  organization,
  email,
  photoUrl,
  linkedin,
  github,
  website,
}: PersonalBrandingProps) {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "3rem 1rem",
        borderRadius: "16px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        maxWidth: "900px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      {/* Profile Photo */}
      <div
        style={{
          flex: "0 0 220px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={photoUrl}
          alt={name}
          style={{
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
          }}
        />
      </div>

      {/* Info Section */}
      <div style={{ flex: "1 1 400px", textAlign: "left" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#0E4D92",
            marginBottom: "0.25rem",
          }}
        >
          {name}
        </h2>
        <p
          style={{
            color: "#374151",
            fontSize: "1rem",
            marginBottom: "1rem",
            lineHeight: 1.6,
          }}
        >
          {tagline}
        </p>

        <p style={{ color: "#6b7280", fontSize: "0.95rem" }}>
          Currently building at{" "}
          <strong style={{ color: "#0E4D92" }}>{organization}</strong>.
        </p>

        <p style={{ color: "#6b7280", fontSize: "0.95rem" }}>
          Works at the intersection of{" "}
          <strong>Finance, AI, Automation, ERP Implementation,</strong> and{" "}
          <strong>Project Management</strong>.
        </p>

        {/* Contact + Social Icons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          <a
            href={`mailto:${email}`}
            style={{
              color: "#0E4D92",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            <FaEnvelope style={{ marginRight: "0.5rem" }} /> {email}
          </a>

          <div style={{ display: "flex", gap: "0.8rem" }}>
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0077b5" }}
              >
                <FaLinkedin size={20} />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#333" }}
              >
                <FaGithub size={20} />
              </a>
            )}
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0E4D92" }}
              >
                <FaGlobe size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
