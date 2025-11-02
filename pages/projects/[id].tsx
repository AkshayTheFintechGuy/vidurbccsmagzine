import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";

interface ProjectFrontmatter {
  title: string;
  date?: string;
  summary?: string;
  impact?: string;
  tech?: string[];
}

interface ProjectProps {
  id: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}

// Generate all paths
export async function getStaticPaths() {
  const directory = path.join(process.cwd(), "content", "projects");
  const files = fs.readdirSync(directory);
  const paths = files.map((filename) => ({
    params: { id: filename.replace(".md", "") },
  }));
  return { paths, fallback: false };
}

// Load markdown data
export async function getStaticProps({ params }: { params: { id: string } }) {
  const filePath = path.join(
    process.cwd(),
    "content",
    "projects",
    `${params.id}.md`
  );
  const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return { props: { id: params.id, frontmatter, content } };
}

// Render page
export default function ProjectPost({ id, frontmatter, content }: ProjectProps) {
  const formattedDate = frontmatter.date
    ? new Date(frontmatter.date).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <>
      <Head>
        <title>{frontmatter.title} | Vidur Projects</title>
        <meta name="description" content={frontmatter.summary || ""} />
      </Head>

      <Navbar />
      <PageHeader title={frontmatter.title} subtitle={frontmatter.summary || ""} />
      <Section>
        {formattedDate && (
          <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>
            📅 {formattedDate}
          </p>
        )}

        <article
          dangerouslySetInnerHTML={{ __html: marked(content) }}
          style={{ lineHeight: 1.6, color: "#374151", marginTop: "1rem" }}
        />

        {frontmatter.impact && (
          <p style={{ marginTop: "2rem", color: "#0E4D92", fontWeight: 600 }}>
            📊 Impact: {frontmatter.impact}
          </p>
        )}
        {frontmatter.tech && (
          <p style={{ color: "#6b7280", marginTop: "0.5rem" }}>
            🧩 Tech Stack: {frontmatter.tech.join(" • ")}
          </p>
        )}
      </Section>
      <Footer />
    </>
  );
}
