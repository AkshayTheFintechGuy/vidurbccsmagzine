import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Vidur Tech Magazine</title>
        <meta
          name="description"
          content="Learn about Vidur Tech Magazine — a collective of professionals exploring ERP, CRM, Finance, and Business Automation."
        />
      </Head>
      <main className="container mx-auto p-8 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
          Vidur Tech Magazine is a collaborative platform where professionals and enthusiasts
          share deep insights about <strong>Technology, Finance, Analytics, ERP, CRM,</strong> and
          evolving business processes.
        </p>
        <p className="mb-4">
          Founded by <strong>Akshay Gatkal</strong> and a network of friends, the magazine serves as
          a knowledge hub — blending practical ERP implementation experiences with financial and
          automation insights.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">Our Contributors</h2>
        <p className="mb-2">
          Each contributor brings their domain knowledge — from AI to Supply Chain Automation — and
          publishes real-world learnings and opinions.
        </p>
        <ul className="list-disc ml-6">
          <li>ERP & Business Central Specialists</li>
          <li>Financial Analysts & Automation Consultants</li>
          <li>CRM and Digital Strategy Experts</li>
          <li>Tech Enthusiasts and Industry Learners</li>
        </ul>
        <p className="mt-6 text-gray-600">
          Our purpose is simple: to make technology and business systems more understandable and
          approachable for small and medium businesses.
        </p>
      </main>
    </>
  );
};

export default About;
