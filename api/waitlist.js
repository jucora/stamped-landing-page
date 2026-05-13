export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [2], // default list ID, update if needed
        updateEnabled: true,
      }),
    });

    // 204 = already exists but updated, 201 = created
    if (response.status === 201 || response.status === 204) {
      return res.status(200).json({ message: "Success" });
    }

    const data = await response.json();

    // Brevo returns 400 with code "duplicate_parameter" if contact already exists
    if (data.code === "duplicate_parameter") {
      return res.status(200).json({ message: "Success" });
    }

    throw new Error(data.message || "Brevo error");
  } catch (err) {
    console.error("Waitlist error:", err);
    return res.status(500).json({ message: "Something went wrong. Try again." });
  }
}