import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: "8e42ac925e8fccfbc75ee7362ba140de",
    databaseId: "4e408754-db4c-4123-bdd2-9c5e618596f8",
    token: "dD-JhbTPd8ZHXeLEyAa2DSCrDCVri1KQVLGsT17n",
  },
});
