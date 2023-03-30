import userService from "../Services/userService.js";
import { STATUS_CODE } from "../Enums/statusCode.js";

async function create(req, res) {
  const { name, email, password } = req.body;

  try {
    await userService.create({ name, email, password });
    return res.sendStatus(STATUS_CODE.CREATED);
  } catch (error) {
    return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }
}

export default { create };
