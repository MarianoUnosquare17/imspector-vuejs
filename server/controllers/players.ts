import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function getPlayerAccountId(req: Request, res: Response) {
    const player = await prisma.players.findUnique({
        where: {
            player_id: parseInt(req.params.accountId)
        }
    })
    if (player) {
        return res.sendStatus(200).json(player)
    } else {
        res.sendStatus(400)
    }

}

async function getPlayerPlayerId(req: Request, res: Response) {
    const player = await prisma.players.findUnique({
        where: {
            player_id: parseInt(req.params.playerId)
        }
    })
    if (player) {
        return res.status(200).json(player)
    } else {
        res.status(400)
    }

}

async function getAllPlayers(req: Request, res: Response) {

}

async function postPlayers(req: Request, res: Response) {
    const { player_id, valorant_account, valorant_tag, region, level, account_id } = req.body
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

}

async function updatePlayer(req: Request, res: Response) {
    const { player_id, valorant_account, valorant_tag, region, level, account_id } = req.body
    await prisma.players.update({
        where: {
            player_id: parseInt(req.params.accountId)
        },
        data: {
            valorant_account,
            valorant_tag,
            region,
            level
        }
    })
    res.sendStatus(200)
}


async function deletePlayer(req: Request, res: Response) {
        await prisma.players.deleteMany({
            where: {
                account_id: parseInt(req.params.accountId)
            }
        })
        res.sendStatus(200)
    }




const playersController = {
    getPlayerAccountId,
    getPlayerPlayerId,
    getAllPlayers,
    postPlayers,
    updatePlayer,
    deletePlayer
}

export { playersController }