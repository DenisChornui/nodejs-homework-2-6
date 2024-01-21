import express from "express";

import { authenticate, isEmptyBody, isValidId } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { userLoginSchema, userRegisterSchema } from "../../models/User.js";
import authController from "../../controllers/auth-controller.js";

const authRouter = express.Router();

authRouter.post("/register", isEmptyBody, validateBody(userRegisterSchema), authController.register);

authRouter.post("/login", isEmptyBody, validateBody(userLoginSchema), authController.login);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/logout", authenticate, authController.logout);

export default authRouter;
