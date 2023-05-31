import { Router } from "express";

const userRouter = Router();
userRouter.route("/").get((req, res) => { res.send("Get all users") });
userRouter.route("/:userId").get((req, res) => { res.send("Get Single User" + req.params.userId) });
userRouter.route("/").post((req, res) => { res.send("Create User") });
userRouter.route("/:userId").put((req, res) => { res.send("Update User" + req.params.userId) });
userRouter.route("/:userId").delete((req, res) => { res.send("Delete User" + req.params.userId) });

export { userRouter };
