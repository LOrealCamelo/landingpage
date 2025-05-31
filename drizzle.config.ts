import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required. Please check your .env file");
}

export default {
  out: "./migrations",
  schema: "./shared/schema.ts",
  connectionString: process.env.DATABASE_URL
} satisfies Config;
