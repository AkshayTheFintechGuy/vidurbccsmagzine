import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";

interface ProductFrontmatter {
  title: string;
  date?: string;
  summary?: string;
  benefit?: string;
  tech?: string[];
}

interface ProductProps {
  id: string;
  frontmatter: ProductFrontmatter;
  content: string;
}

export async function getStaticPaths() {
  const directory = path.join(process.cwd(), "content", "products");
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
    "products",
    `${params.id}.md`
  );
  const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return { props: { id: params.id, frontmatter, content } };
}

export default function ProductPost({
  id,
  frontmatter,
  content,
}: ProductProps) {
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
        <title>{frontmatter.title} | Products | Vidur</title>
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

        {frontmatter.benefit && (
          <p style={{ marginTop: "2rem", color: "#0E4D92", fontWeight: 600 }}>
            💡 Key Benefit: {frontmatter.benefit}
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
