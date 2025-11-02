import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";

interface ConceptFrontmatter {
  title: string;
  date?: string;
  summary?: string;
  impact?: string;
  tech?: string[];
}

interface ConceptProps {
  id: string;
  frontmatter: ConceptFrontmatter;
  content: string;
}

export async function getStaticPaths() {
  const directory = path.join(process.cwd(), "content", "concepts");
  const files = fs.readdirSync(directory);
  const paths = files.map((filename) => ({
    params: { id: filename.replace(".md", "") },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const filePath = path.join(
    process.cwd(),
    "content",
    "concepts",
    `${params.id}.md`
  );
  const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return { props: { id: params.id, frontmatter, content } };
}

export default function ConceptPost({
  id,
  frontmatter,
  content,
}: ConceptProps) {
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
        <title>{frontmatter.title} | Concepts | Vidur</title>
        <meta name="description" content={frontmatter.summary || ""} />
      </Head>

      <Navbar />
      <PageHeader
        title={frontmatter.title}
        subtitle={frontmatter.summary || ""}
      />
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
            💭 Concept Impact: {frontmatter.impact}
          </p>
        )}
        {frontmatter.tech && (
          <p style={{ color: "#6b7280", marginTop: "0.5rem" }}>
            🧩 Technologies Mentioned: {frontmatter.tech.join(" • ")}
          </p>
        )}
      </Section>
      <Footer />
    </>
  );
}
