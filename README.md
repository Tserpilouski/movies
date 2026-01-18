Describes how to migrate new tables created locally to Neon. Tables are defined in the prisma folder. The prisma/migration folder contains information about all migrations.

First step:

`npx prisma migrate dev --name add_users_table` - migrate tables from local to Neon

Second step:

`npx prisma generate` - Generate types for tables

Generate a random secret:

`openssl rand -base64 32`
