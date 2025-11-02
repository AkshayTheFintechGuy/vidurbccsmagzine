import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface MarkdownFrontmatter {
  title: string;
  date?: string;
  summary?: string;
  impact?: string;
  tech?: string[];
}

export interface MarkdownPost {
  id: string;
  frontmatter: MarkdownFrontmatter;
  content: string;
}

export function getAllMarkdownPosts(folder: string): MarkdownPost[] {
  const directory = path.join(process.cwd(), "content", folder);
  if (!fs.existsSync(directory)) return [];

  const files = fs.readdirSync(directory);
  const posts = files.map((filename) => {
    const filePath = path.join(directory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter, content } = matter(fileContent);
    return {
      id: filename.replace(".md", ""),
      frontmatter: frontmatter as MarkdownFrontmatter,
      content,
    };
  });

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date || "").getTime() -
      new Date(a.frontmatter.date || "").getTime()
  );
}

export function getMarkdownById(folder: string, id: string): MarkdownPost {
  const filePath = path.join(process.cwd(), "content", folder, `${id}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(fileContent);
  return { id, frontmatter: frontmatter as MarkdownFrontmatter, content };
}
