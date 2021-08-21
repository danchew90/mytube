import express from "express";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();

const PORT = 4000;

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
