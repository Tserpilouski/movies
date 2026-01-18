import express from "express";
import {
    addToWatchlist,
    removeFromWatchlist,
    updateFromWatchlist,
} from "../controllers/watchlist.controler.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { addToWatchlistSchema } from "../validators/watchlist.validator.js";

const router = express.Router();
router.use(authMiddleware);

router.post("/", validateRequest(addToWatchlistSchema), addToWatchlist);
router.delete("/:id", removeFromWatchlist);
router.put("/:id", updateFromWatchlist);

export default router;
