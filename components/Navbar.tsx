import Link from "next/link";
import React from "react";

interface NavbarProps {
  theme?: "light" | "dark";
}

export default function Navbar({ theme = "light" }: NavbarProps) {
  const textColor = theme === "dark" ? "#0f172a" : "#0f172a";
  const bgColor = "#ffffff";
  const borderColor = "#e5e7eb";

  return (
    <header
      style={{
        background: bgColor,
        borderBottom: `1px solid ${borderColor}`,
        padding: "1rem 0",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <nav
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <Link
          href="/"
          style={{
            fontWeight: 700,
            fontSize: "1.1rem",
            textDecoration: "none",
            color: textColor,
          }}
        >
          Akshay Gatkal
        </Link>

        <div style={{ display: "flex", gap: "1.2rem" }}>
          <Link href="/products" style={{ color: textColor, textDecoration: "none" }}>
            Products
          </Link>
          <Link href="/concepts" style={{ color: textColor, textDecoration: "none" }}>
            Concepts
          </Link>
          <Link href="/projects" style={{ color: textColor, textDecoration: "none" }}>
            Projects
          </Link>
          <Link href="/learn" style={{ color: textColor, textDecoration: "none" }}>
            Learn
          </Link>
          <Link
            href="/contact"
            style={{
              color: "#fff",
              background: "#0E4D92",
              padding: "6px 12px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
