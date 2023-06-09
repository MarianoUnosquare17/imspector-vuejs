import { Router } from "express";
import { check } from "express-validator";
import validate from "../utils/validation";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const playersRouter = Router();
playersRouter.route("/accounts/:accountId/players").get(async(req, res) => {
    const player = await prisma.players.findUnique({
        where:{
            player_id: parseInt(req.params.accountId)
        }
    })
    if(player){
        return res.status(200).json(player)
    } else {
        res.status(400)
    }
});
playersRouter.route("/:playerId").get(async(req, res) => {
    const player = await prisma.players.findUnique({
        where:{
            player_id: parseInt(req.params.playerId)
        }
    })
    if(player){
        return res.status(200).json(player)
    } else {
        res.status(400)
    }
});
playersRouter.route(":accountId/players").post(
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
