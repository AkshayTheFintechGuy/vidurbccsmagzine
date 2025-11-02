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
  const directory = path.join(process.cwd(), "content", "concepts");
  const files = fs.readdirSync(directory);

  const concepts = files.map((filename) => {
    const filePath = path.join(directory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter } = matter(fileContent);

    return {
      id: filename.replace(".md", ""),
      frontmatter,
    };
  });

  const sortedConcepts = concepts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );

  return { props: { concepts: sortedConcepts } };
}

export default function ConceptsPage({
  concepts,
}: {
  concepts: { id: string; frontmatter: any }[];
}) {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Software Concepts"
        subtitle="Ideas, frameworks, and design systems behind our innovations."
      />
      <Section>
        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {concepts.map(({ id, frontmatter }) => (
            <Link
              key={id}
              href={`/concepts/${id}`}
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
