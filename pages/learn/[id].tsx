import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";

interface LearnFrontmatter {
  title: string;
  date?: string;
  summary?: string;
  duration?: string; // For courses
  level?: string; // Beginner, Intermediate, Advanced
  tech?: string[];
}

interface LearnProps {
  id: string;
  frontmatter: LearnFrontmatter;
  content: string;
}

// Generate all paths
export async function getStaticPaths() {
  const directory = path.join(process.cwd(), "content", "learn");
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
    "learn",
    `${params.id}.md`
  );
  const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return { props: { id: params.id, frontmatter, content } };
}

// Render page
export default function LearnPost({ id, frontmatter, content }: LearnProps) {
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
        <title>{frontmatter.title} | Learn | Vidur</title>
        <meta
          name="description"
          content={
            frontmatter.summary ||
            "Learn practical business and technology skills with Vidur."
          }
        />
        <link
          rel="canonical"
          href={`https://yourdomain.com/learn/${id}`}
        />
      </Head>

      <Navbar />
      <PageHeader
        title={frontmatter.title}
        subtitle={frontmatter.summary || ""}
      />

      <Section>
        {/* Course Meta */}
        <div style={{ color: "#6b7280", marginBottom: "1rem" }}>
          {formattedDate && <>📅 {formattedDate} • </>}
          {frontmatter.duration && <>⏱️ Duration: {frontmatter.duration} • </>}
          {frontmatter.level && <>🎓 Level: {frontmatter.level}</>}
        </div>

        {/* Markdown Content */}
        <article
          dangerouslySetInnerHTML={{ __html: marked(content) }}
          style={{
            lineHeight: 1.6,
            color: "#374151",
            marginTop: "1rem",
          }}
        />

        {/* Tech Stack */}
        {frontmatter.tech && (
          <p
            style={{
              color: "#6b7280",
              marginTop: "1.5rem",
            }}
          >
            🧩 Topics Covered: {frontmatter.tech.join(" • ")}
          </p>
        )}
      </Section>

      <Footer />
    </>
  );
}
