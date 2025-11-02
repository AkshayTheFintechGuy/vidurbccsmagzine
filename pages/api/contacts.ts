import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    console.log("Contact form submission:", { name, email, message });
    res.status(200).json({ success: true, message: "Form received successfully!" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
