import express from "express";
import {
  deleteVideo,
  getUpload,
  getVideoEdit,
  postUpload,
  postVideoEdit,
  watch,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get("/:id", watch);
videoRouter.route("/:id/edit").get(getVideoEdit).post(postVideoEdit);
videoRouter.get("/:id/delete ", deleteVideo);

export default videoRouter;
