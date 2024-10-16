import express from "express";
import rootRouter from "./router/rootRouter.js";
import userRouter from "./router/userRouter.js";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use("/",rootRouter);
app.use("/users", userRouter);


export default app;