import express from "express";
import {
  getJoin,
  getLogin,
  postJoin,
  postLogin,
} from "../controllers/userController";
import { getSearch, home } from "../controllers/videoController";

const rootRouter = express.Router();

app.get("/", home);
app.get("/search", getSearch);
app.route("/login").get(getLogin).post(postLogin);
app.route("/join").get(getJoin).post(postJoin);

export default rootRouter;
