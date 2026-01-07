import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import path from "path";
import messageRoutes from "./routes/messageRoutes.js";
dotenv.config();
const app = express();
const _dirname = path.resolve();

const PORT = process.env.PORT || 3002;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
