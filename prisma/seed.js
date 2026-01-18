import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createId = "0d097560-3f72-4935-b5ba-165e76d1daed";

const movies = [
    {
        title: "Начало",
        overview:
            "Профессиональный вор, который крадёт секреты через использование технологии совместного сна.",
        releaseYear: 2010,
        genres: ["Sci-Fi", "Thriller", "Action"],
        runtime: 148,
        posterUrl: "https://example.com/posters/inception.jpg",
        createdBy: createId,
    },
    {
        title: "Интерстеллар",
        overview:
            "Группа исследователей использует червоточину для путешествия за пределы нашей галактики.",
        releaseYear: 2014,
        genres: ["Sci-Fi", "Drama", "Adventure"],
        runtime: 169,
        posterUrl: "https://example.com/posters/interstellar.jpg",
        createdBy: createId,
    },
    {
        title: "Бойцовский клуб",
        overview:
            "История офисного работника и харизматичного мыльного торговца.",
        releaseYear: 1999,
        genres: ["Drama", "Thriller"],
        runtime: 139,
        posterUrl: "https://example.com/posters/fight-club.jpg",
        createdBy: createId,
    },
    {
        title: "Матрица",
        overview: "Хакер узнаёт, что реальность — это симуляция.",
        releaseYear: 1999,
        genres: ["Sci-Fi", "Action"],
        runtime: 136,
        posterUrl: "https://example.com/posters/matrix.jpg",
        createdBy: createId,
    },
    {
        title: "Форрест Гамп",
        overview: "История жизни простого человека с большим сердцем.",
        releaseYear: 1994,
        genres: ["Drama", "Romance"],
        runtime: 142,
        posterUrl: "https://example.com/posters/forrest-gump.jpg",
        createdBy: createId,
    },
];

const main = async () => {
    console.log("Seeding movies...");

    for (const movie of movies) {
        await prisma.movie.create({
            data: movie,
        });
        console.log("Created movie:", movie.title);
    }

    console.log("Seeding completed!");
};

main()
    .catch((err) => {
        console.error(err);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
