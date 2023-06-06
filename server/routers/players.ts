import { Router } from "express";
import { check } from "express-validator";
import validate from "../utils/validation";



const playersRouter = Router();
playersRouter.route("/accounts/:accountId/players").get((req, res) => { res.send("Get player linked to account Id" + req.params.accountId) });
playersRouter.route("/accounts/:accountId/players/:playerId").get((req, res) => { res.send("Get Single player with player id" + req.params.playerId) });
playersRouter.route("/accounts/:accountId/players").post(
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
    validate, 
(req, res) => { res.send(" Player created") });
playersRouter.route("/accounts/:accountId/players/:playerId").put(
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
        validate, 
    (req, res) => { res.send("Update User" + req.params.userId) });
playersRouter.route("/accounts/:accountId/players/:playerId").delete((req, res) => { res.send("Deleted User" + req.params.playerId) });

export { playersRouter };
