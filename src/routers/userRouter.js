import express from "express";
import {
  getChangePassword,
  getEdit,
  logout,
  postChangePassword,
  postEdit,
  see,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.route("/logout", logout);
userRouter
  .route("/change-password")
  .get(getChangePassword)
  .post(postChangePassword);
userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter.get("/:id", see);

export default userRouter;
