import express from "express";
import { pool } from "./db";
import { geocode } from "./services/geocode";
import { displacementInKm } from "./services/distance";

const router = express.Router();

router.get("/nearest", async (req, res) => {
  try {
    const rawQuery = req.query.query?.toString();
    const userInput = `${rawQuery}, England`;

    const user = await geocode(userInput);

    const shops = await pool.query(
      "SELECT name, latitude, longitude FROM locations"
    );

    const nearest = shops.rows
    .map((shop) => ({
        name: shop.name,
        distanceKm: Number(
        displacementInKm(
            user.latitude,
            user.longitude,
            shop.latitude,
            shop.longitude
        ).toFixed(1)
        )
    }))
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, 5);
    res.json(nearest);
  } catch (err: any) {
    console.error(err.message);
  }
});

export default router;