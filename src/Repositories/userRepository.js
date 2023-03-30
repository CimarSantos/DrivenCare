import { db } from "../Config/database.js";
import { TABLES } from "../Enums/tables.js";

async function findUserByEmail({ email }) {
  return await db.query(`SELECT * FROM ${TABLES.USERS} WHERE email = $1`, [
    email,
  ]);
}

async function create({ name, email, password }) {
  return await db.query(
    `INSERT INTO ${TABLES.USERS} (name, email, password) VALUES ($1, $2, $3)`,
    [name, email, password]
  );
}

export default { create, findUserByEmail };
