import React from "react";
import Head from "next/head";

const Services = () => {
  return (
    <>
      <Head>
        <title>Services | Vidur Tech Magazine</title>
        <meta
          name="description"
          content="Explore services offered by Vidur Tech Magazine — ERP implementation, automation, analytics, and digital transformation consulting."
        />
      </Head>
      <main className="container mx-auto p-8 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Our Services</h1>
        <p className="mb-4">
          While Vidur Tech Magazine serves as a publication, our contributors also provide
          professional consulting and implementation services.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">ERP Implementation</h2>
            <p>
              End-to-end setup of ERP systems like Microsoft Dynamics 365 Business Central for
              finance, inventory, and manufacturing operations.
            </p>
          </div>
          <div className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Automation & Power BI Reporting</h2>
            <p>
              Automate your reporting, reconciliation, and workflow processes using Power BI and
              low-code tools to increase efficiency.
            </p>
          </div>
          <div className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Business Analytics</h2>
            <p>
              Data-driven analysis for better financial forecasting, budgeting, and
              performance-measurement dashboards.
            </p>
          </div>
          <div className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Learning & Collaboration</h2>
            <p>
              Join our learning programs or collaborate with us on technology, ERP, or finance-based
              product ideas.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;
