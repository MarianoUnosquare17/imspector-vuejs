import express, { Request, Response } from "express";
import { userRouter } from "./routers/user";
import { commentRouter } from "./routers/comments";
import { tacticsRouter } from "./routers/tactics";


const app = express();
const port = 3001;

app.use('/users', userRouter)
app.use('/comments', commentRouter)
app.use('/tactics', tacticsRouter)

app.listen(port, () => console.log(`Application started on port: ${port}`));
