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
        return res.sendStatus(200).json(player)
    } else {
        res.sendStatus(400)
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
    validate, 
    async (req, res) => {
        const { player_id, valorant_account, valorant_tag, region, level, account_id} = req.body
        await prisma.players.create({
            data: {
                player_id,
                valorant_account,
                valorant_tag,
                region,
                level,
                account_id: parseInt(req.params.accountId)
            }
        })
        res.sendStatus(200)
});
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
        validate, 
    async (req, res) => { 
        const { player_id, valorant_account, valorant_tag, region, level, account_id} = req.body
        await prisma.players.update({
        where:{
            player_id: parseInt(req.params.accountId)
        },
        data: {
            valorant_account,
            valorant_tag,
            region,
            level
        }
    })
    res.sendStatus(200)});
playersRouter.route("/accounts/:accountId").delete((req, res) => {
    async (req, res) => { 
        await prisma.players.deleteMany({
        where:{
            account_id: parseInt(req.params.accountId)
        }
    })
    res.sendStatus(200)}
});

export { playersRouter };
