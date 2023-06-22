import { Router } from "express";
import { check } from "express-validator";
import validate from "../utils/validation";
import { playersController } from "../controllers/players";

const playersRouter = Router();

playersRouter.route("/accounts/:accountId").get(playersController.getPlayerAccountId);
playersRouter.route("/:playerId").get(playersController.getPlayerPlayerId);
playersRouter.route("/:accountId").post(
    [
    check('valorant_account')
    .trim()
    .isLength({min: 3})
    .withMessage('Account must be at least 3 characters'),
    check('valorant_tag')
    .trim()
    .isLength({max: 4})
    .withMessage('Please enter a valid Tag'),
    ],
    validate, playersController.postPlayers
);
playersRouter.route("/accounts/:accountId").put(
    [
        check('valorant_account')
        .trim()
        .isLength({min: 3})
        .withMessage('Account must be at least 3 characters'),
        check('valorant_tag')
        .trim()
        .isLength({max: 4})
        .withMessage('Please enter a valid Tag'),
        ],
        validate, playersController.updatePlayer);
playersRouter.route("/accounts/:accountId").delete(playersController.deletePlayer);

export { playersRouter };
