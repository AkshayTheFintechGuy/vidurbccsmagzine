import React from "react";

interface Project {
  id: string;
  title: string;
  summary: string;
  impact: string;
  tech: string[];
  image?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: "10px",
        padding: "1rem",
        boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
        transition: "transform 0.2s ease",
      }}
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            borderRadius: "8px",
            marginBottom: "0.75rem",
          }}
        />
      )}
      <h3 style={{ margin: "0 0 0.3rem" }}>{project.title}</h3>
      <p style={{ color: "#374151", fontSize: "0.95rem" }}>{project.summary}</p>
      <p
        style={{
          color: "#0E4D92",
          marginTop: "0.5rem",
          fontSize: "0.9rem",
        }}
      >
        Impact: {project.impact}
      </p>
      <p
        style={{
          color: "#6b7280",
          fontSize: "0.85rem",
          marginTop: "0.25rem",
        }}
      >
        {project.tech.join(" • ")}
      </p>
    </article>
  );
}
