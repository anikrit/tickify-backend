import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth";
import moviesRoutes from "./routes/movies";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000", // allow frontend origin
    credentials: true, // allow cookies
  }),
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/movies", moviesRoutes);

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
