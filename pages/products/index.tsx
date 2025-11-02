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
  // Read all markdown files from /content/products
  const directory = path.join(process.cwd(), "content", "products");
  const files = fs.readdirSync(directory);

  // Parse frontmatter
  const products = files.map((filename) => {
    const filePath = path.join(directory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter } = matter(fileContent);

    return {
      id: filename.replace(".md", ""),
      frontmatter,
    };
  });

  // Sort by date (newest first)
  const sortedProducts = products.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );

  return { props: { products: sortedProducts } };
}

export default function ProductsPage({
  products,
}: {
  products: { id: string; frontmatter: any }[];
}) {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Software Products"
        subtitle="Explore our tools and applications that solve real-world business challenges."
      />
      <Section>
        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {products.map(({ id, frontmatter }) => (
            <Link
              key={id}
              href={`/products/${id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ProjectCard
                project={{
                  id,
                  title: frontmatter.title,
                  summary: frontmatter.summary,
                  impact: frontmatter.benefit || frontmatter.impact || "",
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
