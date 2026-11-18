import express from "express";
import cors from "cors";
import eventRoutes from "./routes/event-routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// GET /health
app.get("/health", (req, res) => {
  return res.json({
    status: "ok",
    time: new Date().toISOString(),
    student: "2416501008",
  });
});

// Event Routes
app.use("/events", eventRoutes);

// 404 Route Not Found Fallback
app.use((req, res) => {
  res.status(404).json({ error: { message: "Route not found" } });
});

// 500 Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: { message: "Server error" } });
});

export default app;