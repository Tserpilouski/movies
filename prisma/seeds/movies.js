const ADMIN_USER_ID = "0d097560-3f72-4935-b5ba-165e76d1daed";

export const movies = [
    {
        title: "Начало",
        overview:
            "Профессиональный вор, который крадёт секреты через использование технологии совместного сна.",
        releaseYear: 2010,
        genres: ["Sci-Fi", "Thriller", "Action"],
        runtime: 148,
        posterUrl: "https://example.com/posters/inception.jpg",
    },
    {
        title: "Интерстеллар",
        overview:
            "Группа исследователей использует червоточину для путешествия за пределы нашей галактики.",
        releaseYear: 2014,
        genres: ["Sci-Fi", "Drama", "Adventure"],
        runtime: 169,
        posterUrl: "https://example.com/posters/interstellar.jpg",
    },
    {
        title: "Бойцовский клуб",
        overview:
            "История офисного работника и харизматичного мыльного торговца.",
        releaseYear: 1999,
        genres: ["Drama", "Thriller"],
        runtime: 139,
        posterUrl: "https://example.com/posters/fight-club.jpg",
    },
    {
        title: "Матрица",
        overview: "Хакер узнаёт, что реальность — это симуляция.",
        releaseYear: 1999,
        genres: ["Sci-Fi", "Action"],
        runtime: 136,
        posterUrl: "https://example.com/posters/matrix.jpg",
    },
    {
        title: "Форрест Гамп",
        overview: "История жизни простого человека с большим сердцем.",
        releaseYear: 1994,
        genres: ["Drama", "Romance"],
        runtime: 142,
        posterUrl: "https://example.com/posters/forrest-gump.jpg",
    },
];

export const seedMovies = async (prisma) => {
    console.log("Seeding movies...");

    for (const movie of movies) {
        const { genres: genreNames, ...movieData } = movie;

        // Find genre IDs
        const genreRecords = await prisma.genre.findMany({
            where: { name: { in: genreNames } },
        });

        const createdMovie = await prisma.movie.create({
            data: {
                ...movieData,
                createdBy: ADMIN_USER_ID,
                genres: {
                    create: genreRecords.map((genre) => ({
                        genre: { connect: { id: genre.id } },
                    })),
                },
            },
        });

        console.log("Created movie:", createdMovie.title);
    }
};
