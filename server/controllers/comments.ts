import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function getAllComments(req: Request, res: Response) {
    const {
        valorant_account,
        map,
        player_match_id
    } = req.query

    const config: any = { where: {} }

    if (valorant_account) {
        config.where.valorant_account = parseInt(valorant_account as string)
    } else if (map) {
        config.where.map = parseInt(map as string)
    } else if (player_match_id) {
        config.where.player_match_id = parseInt(player_match_id as string)
    } else res.send("Get all comments")

    await prisma.player_match_comments.findMany(config)

}

async function getMatchComment(req: Request, res: Response) {

    const comments = await prisma.player_match_comments.findMany({
        where: {
            player_matches: {
                player_match_id: parseInt(req.params.matchId)
            }
        }
    })
    if (comments) {
        return res.status(200).json(comments)
    } else {
        res.status(400)
    }
}

async function postMatchComment(req: Request, res: Response) {
    const { comment } = req.body
    await prisma.player_match_comments.create({
        data: {
            comment,
            player_match_id: parseInt(req.params.matchId)
        }
    })
    res.sendStatus(200)
}

async function updateMatchComment(req: Request, res: Response) {

    const { comment } = req.body
    await prisma.player_match_comments.updateMany({
        where: {
            player_match_id: parseInt(req.params.commentId)
        },
        data: {
            comment
        }
    })
    res.sendStatus(200)
}


async function deleteMatchComment(req: Request, res: Response) {
    await prisma.player_match_comments.deleteMany({
        where: {
            player_match_id: parseInt(req.params.commentId)
        }
    })
    res.sendStatus(200)
}

const commentController = {
    getAllComments,
    getMatchComment,
    postMatchComment,
    updateMatchComment,
    deleteMatchComment
}

export {commentController}