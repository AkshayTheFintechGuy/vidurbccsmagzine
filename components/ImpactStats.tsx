import React from "react";
import {
  FaProjectDiagram,
  FaCertificate,
  FaCogs,
  FaFileInvoiceDollar,
} from "react-icons/fa";

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface ImpactStatsProps {
  stats?: Stat[];
}

export default function ImpactStats({ stats }: ImpactStatsProps) {
  // Default stats if none are passed
  const defaultStats: Stat[] = [
    {
      icon: <FaProjectDiagram size={28} color="#0E4D92" />,
      value: "15+",
      label: "Projects Completed",
    },
    {
      icon: <FaCogs size={28} color="#0E4D92" />,
      value: "80%",
      label: "Reporting Automation Achieved",
    },
    {
      icon: <FaCertificate size={28} color="#0E4D92" />,
      value: "6",
      label: "Certificates Earned",
    },
    {
      icon: <FaFileInvoiceDollar size={28} color="#0E4D92" />,
      value: "1000+",
      label: "Processed Invoices",
    },
  ];

  const displayStats = stats && stats.length > 0 ? stats : defaultStats;

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "3rem 1rem",
        borderRadius: "16px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        maxWidth: "1000px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "1.8rem",
          fontWeight: 700,
          color: "#0E4D92",
          marginBottom: "2rem",
        }}
      >
        Impact & Achievements
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {displayStats.map((s, i) => (
          <div
            key={i}
            style={{
              background: "#f9fafb",
              borderRadius: "10px",
              padding: "2rem 1rem",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 4px 12px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 2px 6px rgba(0,0,0,0.05)";
            }}
          >
            <div style={{ marginBottom: "1rem" }}>{s.icon}</div>
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: 700,
                color: "#0E4D92",
                margin: 0,
              }}
            >
              {s.value}
            </h3>
            <p
              style={{
                color: "#374151",
                fontSize: "0.95rem",
                marginTop: "0.25rem",
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
