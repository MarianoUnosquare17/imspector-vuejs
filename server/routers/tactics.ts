import { Router } from "express";
const tacticsRouter = Router();

tacticsRouter.route("/tactics").get((req, res) => {
    const {
        map,
        agent,
        valorant_account
    } = req.query

    if(valorant_account){
        res.send("Get tactics given the valorant account " + valorant_account)
    } else if(map){
        res.send("Get tactics given the map  " + map)
    } else if(valorant_account){
        res.send("Get tactics given the valorant account " + valorant_account )
    } else if(agent){
        res.send("Get comments given the agent " + agent)
    } else res.send("Get all tactics")
    });
    tacticsRouter.route("map/:mapId/tactics").post((req, res) => { res.send("Created tactic for the following map " + req.params.mapId )});
    tacticsRouter.route("agents/:agentId/tactics").post((req, res) => { res.send("Created tactic for the following agent " + req.params.agentId )});
    tacticsRouter.route("/tactics/:tacticId").put((req, res) => { res.send("Updated tactic with the id " + req.params.tacticId )});
    tacticsRouter.route("/tactics/:tacticId").delete((req, res) => { res.send("Deleted tactic with the id" + req.params.tacticId) });


export { tacticsRouter };