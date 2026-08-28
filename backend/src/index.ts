import express from "express";
import { pool } from "./db";

const app = express();

app.get("/locations", async (_req: express.Request, res: express.Response) => {
  try {
    const result = await pool.query("SELECT * FROM locations");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});