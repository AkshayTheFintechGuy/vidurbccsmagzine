import React from "react";
import Head from "next/head";

const Works = () => {
  return (
    <>
      <Head>
        <title>Our Work | Vidur Tech Magazine</title>
        <meta
          name="description"
          content="Explore featured work and projects by Vidur Tech Magazine contributors — from ERP implementations to automation case studies."
        />
      </Head>
      <main className="container mx-auto p-8 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Our Work</h1>
        <p className="mb-6">
          We showcase projects that merge technology with business value — featuring automation,
          reporting, and ERP implementations across industries.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">ERP Implementation for SMEs</h2>
            <p>
              Microsoft Dynamics 365 Business Central setup for manufacturing and retail clients,
              covering financials, purchasing, and supply chain.
            </p>
          </div>
          <div className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Automation of Financial Reports</h2>
            <p>
              Automated multi-company P&L and cash flow statements using Power BI and Business
              Central data integration.
            </p>
          </div>
          <div className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Educational Tech Videos</h2>
            <p>
              YouTube and blog-based tutorials simplifying finance, ERP implementation, and
              automation concepts for students and entrepreneurs.
            </p>
          </div>
          <div className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">AI-driven Business Insights</h2>
            <p>
              Applied analytics and AI models for decision-making support and predictive financial
              planning for clients.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Works;
