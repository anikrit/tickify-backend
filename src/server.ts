import { PrismaClient } from "@prisma/client";
import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Movie Booking API is running ✅");
});

// Movies route (initial test)
app.get("/api/movies", async (req: Request, res: Response) => {
  const movies = await prisma.movie.findMany();
  res.json(movies);
});

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
