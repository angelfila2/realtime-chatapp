import express from "express";

const router = express.Router();
router.post("/send", (req, res) => {
  res.send("Message Sent");
});
router.get("/receive", (req, res) => {
  res.send("Messages Received");
});

export default router;
