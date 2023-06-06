import { Router } from "express";
import { check } from "express-validator";
import validate from "../utils/validation";

const matchesRouter = Router();



matchesRouter.route("/:playerId/matches").get((req, res) => {
    const {
        map,
        agent
    } = req.query

    if(map){
        res.send("Get matches given the map " + map)
    } else if(agent && map){
        res.send("Get matches given the agent and map " + agent + map)
    } else if(agent){
        res.send("Get matches given the agent " + agent)
    } else res.send("Get all matches")
    });
matchesRouter.route("/:playerId/matches/:matchId").get((req, res) => { res.send("Get a match given the match id " + req.params.matchId ) });
matchesRouter.route("/:playerId/matches").post( (req, res) => { res.send("Created match" )});
matchesRouter.route("/:playerId/matches/:matchId").put((req, res) => { res.send("Updated match with the match id " + req.params.matchId)});
matchesRouter.route("/:playerId/matches:matchId").delete((req, res) => { res.send("Deleted match with the match id" + req.params.matchId)});

export { matchesRouter};
