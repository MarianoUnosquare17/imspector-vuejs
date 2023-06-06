import { Router } from "express";

const commentRouter = Router();
commentRouter.route("/").get((req, res) => { res.send("Get all comments") });
commentRouter.route("/account/:valorantAcc/map/:map/id/:idMatch").get((req, res) => { res.send("Get Single comment given the valorant account" + req.params.idMatch + req.params.map + req.params.valorantAcc) });
commentRouter.route("/account/:valorantAcc/map/:map/id/:idMatch").post((req, res) => { res.send("Create comment" + req.params.idMatch + req.params.valorantAcc + req.params.map) });
commentRouter.route("/account/:valorantAcc/map/:map/id/:idMatch").put((req, res) => { res.send("Update comment" + req.params.idMatch + req.params.valorantAcc + req.params.map) });
commentRouter.route("/account/:valorantAcc/map/:map/id/:idMatch").delete((req, res) => { res.send("Delete comment" + req.params.idMatch + req.params.valorantAcc + req.params.map) });

export { commentRouter };
