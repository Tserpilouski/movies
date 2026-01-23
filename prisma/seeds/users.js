import bcrypt from "bcryptjs";

export const users = [
    {
        id: "0d097560-3f72-4935-b5ba-165e76d1daed",
        name: "Admin User",
        email: "admin@example.com",
        password: "admin123",
        role: "ADMIN",
    },
    {
        id: "1a2b3c4d-5e6f-7890-abcd-ef1234567890",
        name: "Test User",
        email: "user@example.com",
        password: "user123",
        role: "USER",
    },
];

export const seedUsers = async (prisma) => {
    console.log("Seeding users...");

    for (const user of users) {
        const passwordHash = await bcrypt.hash(user.password, 10);

        await prisma.user.create({
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
                passwordHash,
                role: user.role,
            },
        });
        console.log("Created user:", user.email);
    }
};
