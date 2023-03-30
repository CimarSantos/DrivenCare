import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const configDataBase = {
  connectionString: process.env.DATABASE_URL,
  ...(process.env.MODE_ENV === "production" && {
    ssl: {
      rejectUnauthorized: false,
    },
  }),
};

const db = new Pool(configDataBase);

export { db };
