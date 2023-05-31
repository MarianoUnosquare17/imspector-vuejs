import { Router } from "express";

const tacticsRouter = Router();
tacticsRouter.route("/").get((req, res) => { res.send("Get all tactics") });
tacticsRouter.route("/map/:map").get((req, res) => { res.send("Get tactics for a given map" + req.params.map ) });
tacticsRouter.route("/agent/:agent").get((req, res) => { res.send("Get tactics for a given agent" + req.params.agent ) });
tacticsRouter.route("/account/:valorantAcc").get((req, res) => { res.send("Get tactics for a given account" + req.params.valorantAcc ) });
tacticsRouter.route("/account/:valorantAcc/map/:map").get((req, res) => { res.send("Get tactic for a specific map" + req.params.valorantAcc + req.params.map) });
tacticsRouter.route("/account/:valorantAcc/agent/:agent").get((req, res) => { res.send("Get tactic for a specific agent" + req.params.valorantAcc + req.params.agent) });
tacticsRouter.route("/account/:valorantAcc/map/:map/id/:tacticId").get((req, res) => { res.send("Get tactic for a specific map given its id" + req.params.valorantAcc + req.params.map + req.params.tacticId) });
tacticsRouter.route("/account/:valorantAcc/agent/:agent/id/:tacticId").get((req, res) => { res.send("Get tactic for a specific agent given its id" + req.params.valorantAcc + req.params.agent + req.params.tacticId) });
tacticsRouter.route("/account/:valorantAcc/map/:map").post((req, res) => { res.send("Create tactic for a specific map" + req.params.valorantAcc + req.params.map) });
tacticsRouter.route("/account/:valorantAcc/agent/:agent").post((req, res) => { res.send("Create tactic for a specific agent" + req.params.valorantAcc + req.params.agent) });
tacticsRouter.route("/account/:valorantAcc/map/:map/id/:tacticId").put((req, res) => { res.send("Update tactic for a specific map given its id" + req.params.valorantAcc + req.params.map + req.params.tacticId) });
tacticsRouter.route("/account/:valorantAcc/agent/:agent/id/:tacticId").put((req, res) => { res.send("Update tactic for a specific agent given its id" + req.params.valorantAcc + req.params.agent + req.params.tacticId) });
tacticsRouter.route("/account/:valorantAcc/map/:map/id/:tacticId").delete((req, res) => { res.send("Delete tactic for a specific map given its id" + req.params.valorantAcc + req.params.map + req.params.tacticId) });
tacticsRouter.route("/account/:valorantAcc/agent/:agent/id/:tacticId").delete((req, res) => { res.send("Delete tactic for a specific agent given its id" + req.params.valorantAcc + req.params.agent + req.params.tacticId) });


export { tacticsRouter };