export const genres = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Horror",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "Fantasy",
    "Documentary",
];

export const seedGenres = async (prisma) => {
    console.log("Seeding genres...");

    for (const name of genres) {
        await prisma.genre.upsert({
            where: { name },
            update: {},
            create: { name },
        });
        console.log("Created genre:", name);
    }
};
