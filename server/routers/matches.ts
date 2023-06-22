import { Router } from "express";
import { check } from "express-validator";
import validate from "../utils/validation";
import { matchesController } from "../controllers/matches";


const matchesRouter = Router();


matchesRouter.route("/").get(matchesController.getMatches);
matchesRouter.route("/:matchId").get(matchesController.getMatch);
matchesRouter.route("/:playerId").post(matchesController.postMatch);
matchesRouter.route("/:playerId").put(matchesController.updateMatch);
matchesRouter.route("/:playerId").delete(matchesController.deleteMatch);

export { matchesRouter };
