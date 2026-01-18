Describe how migrate new tables wich will create localy do Neon. Tables create in prisma folder. The prisma/migration folder containes information about all migration.

First step:

`npx prisma migrate dev --name add_users_table` - migrate tables from local to Neon

Second step:

`npx prisma generate` - Generated types for tables

Generate a random secrate which can use:

`openssl rand -base64 32`
