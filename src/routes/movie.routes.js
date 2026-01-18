import express from "express";

const router = express.Router();

router.get("/movie", (req, res) => {
    res.json({ message: "Hello" });
});

export default router;
