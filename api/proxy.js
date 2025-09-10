import fetch from "node-fetch";

export default async function handler(req, res) {
  const url = req.query.url;
  if (!url) {
    res.status(400).send("URL required");
    return;
  }

  try {
    const response = await fetch(url);
    const html = await response.text();
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(html);
  } catch (err) {
    res.status(500).send("Failed to fetch URL");
  }
}
