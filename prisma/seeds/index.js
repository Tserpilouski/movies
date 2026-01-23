import { PrismaClient } from "@prisma/client";
import { seedUsers } from "./users.js";
import { seedGenres } from "./genres.js";
import { seedMovies } from "./movies.js";

const prisma = new PrismaClient();

const main = async () => {
    console.log("🌱 Starting seed...\n");

    // Order matters! Users and Genres first, then Movies
    await seedUsers(prisma);
    console.log("Added users");

    await seedGenres(prisma);
    console.log("Added genres");

    await seedMovies(prisma);
    console.log("Added movies");

    console.log("✅ Seeding completed!");
};

main()
    .catch((err) => {
        console.error("❌ Seed failed:", err);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
