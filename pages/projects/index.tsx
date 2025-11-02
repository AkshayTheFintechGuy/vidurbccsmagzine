import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";
import ProjectCard from "../../components/ProjectCard";

export async function getStaticProps() {
  // Read all markdown files from /content/projects
  const directory = path.join(process.cwd(), "content", "projects");
  const files = fs.readdirSync(directory);

  // Parse frontmatter of each file
  const projects = files.map((filename) => {
    const filePath = path.join(directory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter } = matter(fileContent);

    return {
      id: filename.replace(".md", ""),
      frontmatter,
    };
  });

  // Sort projects by date (newest first)
  const sortedProjects = projects.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );

  return {
    props: { projects: sortedProjects },
  };
}

export default function ProjectsPage({
  projects,
}: {
  projects: { id: string; frontmatter: any }[];
}) {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Projects & Case Studies"
        subtitle="Real-world implementations with measurable impact."
      />

      <Section>
        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {projects.map(({ id, frontmatter }) => (
            <Link
              key={id}
              href={`/projects/${id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ProjectCard
                project={{
                  id,
                  title: frontmatter.title,
                  summary: frontmatter.summary,
                  impact: frontmatter.impact || "",
                  tech: frontmatter.tech || [],
                }}
              />
            </Link>
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}
