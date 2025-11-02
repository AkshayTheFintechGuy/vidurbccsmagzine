import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface Project {
  id: string;
  frontmatter: {
    title: string;
    date: string;
    summary?: string;
    impact?: string;
    tech?: string[];
  };
  content: string;
}

/**
 * Reads and sorts project markdown files.
 */
function getAllProjects(): Project[] {
  const directory = path.join(process.cwd(), "content", "projects");
  const files = fs.readdirSync(directory);

  const projects = files.map((filename) => {
    const filePath = path.join(directory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter, content } = matter(fileContent);
    return {
      id: filename.replace(".md", ""),
      frontmatter: frontmatter as Project["frontmatter"],
      content,
    };
  });

  // Sort newest first by date
  return projects.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

/**
 * ProjectsLayout – shows all project blogs in continuous sections.
 */
export default function ProjectsLayout() {
  const projects = getAllProjects();

  return (
    <div style={{ background: "#ffffff" }}>
      <Navbar theme="dark" />
      <header
        className="container"
        style={{
          borderBottom: "1px solid #e5e7eb",
          paddingBottom: "1rem",
          marginBottom: "2rem",
        }}
      >
        <h1>Projects & Case Studies</h1>
        <p className="muted">Real implementations with measurable results</p>
      </header>

      <main className="container" style={{ marginTop: "1rem" }}>
        {projects.map((project) => (
          <section
            key={project.id}
            style={{
              marginBottom: "4rem",
              paddingBottom: "2rem",
              borderBottom: "1px solid #f3f4f6",
            }}
          >
            <h2 style={{ marginBottom: "0.5rem" }}>
              {project.frontmatter.title}
            </h2>
            <p style={{ color: "#6b7280", marginBottom: "1rem" }}>
              {new Date(project.frontmatter.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              {project.frontmatter.summary && " — " + project.frontmatter.summary}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: marked(project.content),
              }}
              style={{
                color: "#374151",
                lineHeight: 1.6,
                fontSize: "1rem",
              }}
            />
            {project.frontmatter.impact && (
              <p
                style={{
                  marginTop: "1rem",
                  color: "#0E4D92",
                  fontWeight: 600,
                }}
              >
                📊 Impact: {project.frontmatter.impact}
              </p>
            )}
            {project.frontmatter.tech && (
              <p
                style={{
                  color: "#6b7280",
                  marginTop: "0.25rem",
                  fontSize: "0.9rem",
                }}
              >
                🧩 Tech Stack: {project.frontmatter.tech.join(" • ")}
              </p>
            )}
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
