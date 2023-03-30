import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import userRepository from "../Repositories/userRepository.js";

async function create({ name, email, password }) {
  const { rowCount } = await userRepository.findUserByEmail(email);
  if (rowCount) return "Este email já está cadastrado";

  const hashPassword = await bcrypt.hash(password, 10);
  await userRepository.create({ name, email, password: hashPassword });
}

export default { create };
