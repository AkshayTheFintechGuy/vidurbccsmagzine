import React, { useState } from "react";
import Head from "next/head";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
  };

  return (
    <>
      <Head>
        <title>Contact | Vidur Tech Magazine</title>
        <meta
          name="description"
          content="Reach out to Vidur Tech Magazine for collaborations, project discussions, or learning opportunities."
        />
      </Head>
      <main className="container mx-auto p-8 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="mb-4">
          Whether you’re an entrepreneur, student, or collaborator, we’d love to hear from you. Share
          your thoughts, ideas, or project needs.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto border p-6 rounded-lg shadow-sm bg-white"
        >
          <label className="block mb-3">
            <span className="text-sm font-semibold">Name</span>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1"
              required
            />
          </label>
          <label className="block mb-3">
            <span className="text-sm font-semibold">Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1"
              required
            />
          </label>
          <label className="block mb-3">
            <span className="text-sm font-semibold">Subject</span>
            <input
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1"
            />
          </label>
          <label className="block mb-3">
            <span className="text-sm font-semibold">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1"
              rows={4}
              required
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded mt-3"
          >
            Send Message
          </button>
        </form>
      </main>
    </>
  );
};

export default Contact;
