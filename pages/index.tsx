import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Link from "next/link";
import PersonalBranding from "../components/PersonalBranding"; // 👈 ensure casing matches the filename
import Contributors from "../components/Contributors";
import ImpactStats from "../components/ImpactStats";
import { FaProjectDiagram, FaCertificate, FaCogs, FaFileInvoiceDollar } from "react-icons/fa";



export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <Section background="#ffffff">
          <div
            style={{
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            <h1 style={{ fontSize: "2.2rem", marginBottom: "0.5rem" }}>
              VIDUR Business Control & Compliance
            </h1>
            <p style={{ color: "#6b7280", fontSize: "1.05rem" }}>
              Technology • Finance • Management — Building intelligent systems
              for real results.
            </p>
          </div>
        </Section>

        {/* Explore Our Work */}
        <Section title="Explore Our Work">
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              textAlign: "center",
            }}
          >
            <Link href="/products" style={cardLinkStyle}>
              Software Products →
            </Link>
            <Link href="/concepts" style={cardLinkStyle}>
              Software Concepts →
            </Link>
            <Link href="/projects" style={cardLinkStyle}>
              Projects & Case Studies →
            </Link>
            <Link href="/learn" style={cardLinkStyle}>
              Learn & Courses →
            </Link>
          </div>
        </Section>

        {/* ✨ Personal Branding Section (After Explore) */}
<Section title="About the Creator" background="#f9fafb">
  <PersonalBranding
    name="Akshay Gatkal"
    tagline="I design intelligent systems that connect Finance, AI & Automation."
    organization="Vidur Business Control Compliance Pvt. Ltd."
    email="akshay@vidurcontrol.com"
    photoUrl="https://media.licdn.com/dms/image/v2/D4D03AQFTldhUrOC7Hg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728628768107?e=1763596800&v=beta&t=jM_5w3uxmtvcTQiuBwjiO--N7uxWRZlf-2TcfSfYHHU"
    linkedin="https://linkedin.com/in/akshay-gatkal"
    github="https://github.com/akshaygatkal"
    website="https://marathifinancial.com"
  />
</Section>

        {/* ✨ Coauthor section after personal branding */}
      <Section title="Contributors & Authors" background="#ffffff">
  <Contributors
    authors={[
      {
        name: "Alpesh Patil",
        role: "Sr. Busienss central functional consultant",
        bio: "Certified Microsoft Business Central Functional Consultant.",
        photoUrl: "https://media.licdn.com/dms/image/v2/D4D03AQE9WeuT_Eatiw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698037034030?e=1763596800&v=beta&t=LTD8QQMON6AWXfbycNkiib8nh0qVOAxhqYh0XicQElo",
        linkedin: "https://www.linkedin.com/in/alpesh-patil-342739b7/",
      },
      {
        name: "Kalyan Jadhav",
        role: "Sr. Technical Consultant",
        bio: "Technical Consultant | Dynamics 365 Business Central & NAV | ERP Implementation | Workflow Automation | API Integration | Power BI | AL Developer",
        photoUrl: "https://media.licdn.com/dms/image/v2/C4D03AQHgy4AsjPwOCw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1640436885424?e=1763596800&v=beta&t=SDGzv6HLBSkDhRr8ct7JnzX_WFhGdJXYBjyaYhuaqvg",
        linkedin: "https://www.linkedin.com/in/kalyan-j-41b7a1229/",
      },
          {
        name: "Chandrakesh Singh Rathore",
        role: "CTO At Stratergic Alliance",
        bio: "Currently serving as a Dynamics Practice Head, I bring a decade of hands-on experience in project leadership, functional consulting, and solution architecture. My strengths include",
        photoUrl: "https://media.licdn.com/dms/image/v2/D4D03AQGhU5eWf3rCZw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1685967481630?e=1763596800&v=beta&t=QJpvuJewWxRjyUSpkY4mbGXW8bOIR_iEFedpluHmTtM",
        linkedin: "https://www.linkedin.com/in/chandrakesh-singh-rathore/",
      },
                {
        name: "Shivaji Kapse",
        role: "General Manager at AGSA SPRINGS PVT LTD",
        bio: "Working as General Manager at AGSA Springs Private Limited. Have experiance in Industrial machine. I help business choose right machine at right work",
        photoUrl: "https://media.licdn.com/dms/image/v2/D4D03AQE5DHS-pa30Kg/profile-displayphoto-shrink_400_400/B4DZS929XpHkAg-/0/1738352090353?e=1763596800&v=beta&t=Jwk2Odb8lzeIyhcFd5j72wT2G8a8fuyrZ6KPbgV-5Hs",
        linkedin: "https://www.linkedin.com/in/shivaji-kapse-94a79932b/",
      },
    ]}
  />
</Section>
{/* ✨ Impact analysis */}
<Section title="Impact Highlights" background="#ffffff">
  <ImpactStats
    stats={[
      {
        icon: <FaProjectDiagram size={28} color="#0E4D92" />,
        value: "25+",
        label: "ERP Projects Delivered",
      },
      {
        icon: <FaCogs size={28} color="#0E4D92" />,
        value: "95%",
        label: "Automation Efficiency",
      },
      {
        icon: <FaCertificate size={28} color="#0E4D92" />,
        value: "8",
        label: "Professional Certifications",
      },
      {
        icon: <FaFileInvoiceDollar size={28} color="#0E4D92" />,
        value: "1500+",
        label: "Financial Reports Automated",
      },
    ]}
  />
</Section>
{/* ✨ Contact form */}






      </main>

      <Footer />
    </>
  );
}

const cardLinkStyle: React.CSSProperties = {
  border: "1px solid #e5e7eb",
  borderRadius: "10px",
  padding: "2rem 1rem",
  background: "#fff",
  fontSize: "1rem",
  fontWeight: 600,
  textDecoration: "none",
  color: "#0E4D92",
  transition: "all 0.2s ease",
};
