import express from "express";
import { pool } from "./db";

const app = express();
const port = 3001;

app.get("/locations", async (_req: express.Request, res: express.Response) => {
  try {
    const result = await pool.query("SELECT * FROM locations");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});