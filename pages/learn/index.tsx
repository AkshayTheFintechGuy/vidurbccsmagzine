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
  // Read all markdown files from /content/learn
  const directory = path.join(process.cwd(), "content", "learn");
  const files = fs.readdirSync(directory);

  // Parse frontmatter of each file
  const courses = files.map((filename) => {
    const filePath = path.join(directory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter } = matter(fileContent);

    return {
      id: filename.replace(".md", ""),
      frontmatter,
    };
  });

  // Sort courses by date (newest first)
  const sortedCourses = courses.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );

  return {
    props: { courses: sortedCourses },
  };
}

export default function LearnPage({
  courses,
}: {
  courses: { id: string; frontmatter: any }[];
}) {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Learn with Vidur"
        subtitle="Online courses and tutorials on Business, Technology & Finance."
      />

      <Section>
        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {courses.map(({ id, frontmatter }) => (
            <Link
              key={id}
              href={`/learn/${id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ProjectCard
                project={{
                  id,
                  title: frontmatter.title,
                  summary: frontmatter.summary,
                  impact: frontmatter.level
                    ? `Level: ${frontmatter.level}`
                    : frontmatter.impact || "",
                  tech:
                    frontmatter.tech ||
                    frontmatter.topics ||
                    ["Business", "Technology"],
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
