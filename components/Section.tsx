import React from "react";

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  background?: string;
  maxWidth?: string;
  id?: string;
}

export default function Section({
  title,
  children,
  background = "#fafafa",
  maxWidth = "1100px",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      style={{
        background,
        padding: "3rem 1rem",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth,
          margin: "0 auto",
        }}
      >
        {title && (
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
