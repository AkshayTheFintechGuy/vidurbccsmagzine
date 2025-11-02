import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function PageHeader({
  title,
  subtitle,
  align = "center",
}: PageHeaderProps) {
  return (
    <header
      className="container"
      style={{
        textAlign: align,
        padding: "3rem 1rem 2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{title}</h1>
      {subtitle && (
        <p
          style={{
            color: "#6b7280",
            maxWidth: "700px",
            margin: align === "center" ? "0 auto" : "0",
          }}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
