import express from "express";
import { config } from "dotenv";
import { connectDB, disconnectDB } from "./config/db.js";

// Routes
import movieRouter from "./routes/movie.routes.js";
import authRoutes from "./routes/auth.routes.js";
import watchListRoutes from "./routes/watchlist.routes.js";

config();
connectDB();

const app = express();
//Parsing middlware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5001;

app.use("/movies", movieRouter);
app.use("/auth", authRoutes);
app.use("/watchlist", watchListRoutes);

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Handle unhandle promise rejections (database connection errors)
process.on("unhandledRejection", (error) => {
    console.error("Unhandle Rejection:", error);
    server.close(async () => {
        await disconnectDB();
        process.exit(1);
    });
});

// Handle uncaught exceptions
process.on("uncaughtException", async (error) => {
    console.error("Uncaught Exception:", error);
    await disconnectDB();
    process.exit(1);
});

// Graceful shutdown
process.on("SIGTERM", async () => {
    console.log("SIGTERM received, shutting down gracefully");
    server.close(async () => {
        await disconnectDB();
        process.exit(0);
    });
});
