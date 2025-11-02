import React from "react";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

export interface Contributor {
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface ContributorsProps {
  authors: Contributor[];
}

const Contributors: React.FC<ContributorsProps> = ({ authors }) => {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "3rem 1rem",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#0E4D92" }}>
        Contributors & Authors
      </h2>
      <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
        Amazing people helping to shape our projects and ideas.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "stretch",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {authors.map((a, i) => (
          <div
            key={i}
            style={{
              background: "#f9fafb",
              borderRadius: "10px",
              padding: "1.5rem",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src={a.photoUrl}
              alt={a.name}
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                objectFit: "cover",
                margin: "0 auto",
              }}
            />
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 600,
                marginTop: "1rem",
                color: "#111827",
              }}
            >
              {a.name}
            </h3>
            <p style={{ color: "#0E4D92", fontWeight: 500 }}>{a.role}</p>
            <p
              style={{
                color: "#6b7280",
                fontSize: "0.9rem",
                marginTop: "0.5rem",
                lineHeight: 1.5,
              }}
            >
              {a.bio}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.8rem",
                marginTop: "0.8rem",
              }}
            >
              {a.linkedin && (
                <a
                  href={a.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0077b5" }}
                >
                  <FaLinkedin size={20} />
                </a>
              )}
              {a.github && (
                <a
                  href={a.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#333" }}
                >
                  <FaGithub size={20} />
                </a>
              )}
              {a.website && (
                <a
                  href={a.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0E4D92" }}
                >
                  <FaGlobe size={20} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contributors;
