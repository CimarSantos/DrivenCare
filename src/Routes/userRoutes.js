import { Router } from "express";
import userController from "../Controllers/userController.js";

const userRouter = Router();

userRouter.post("/signup", userController.create);

export default userRouter;
