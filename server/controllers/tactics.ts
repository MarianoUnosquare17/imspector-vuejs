import { Request, Response } from "express";
import { prisma } from '../utils/prisma'

async function getTactics(req: Request, res: Response) {

}

async function getTactic(req: Request, res: Response) {
    await prisma.tactics.findUnique({
        where: {
            tactic_id: parseInt(req.params.tacticId)
        }
    })
    return res.sendStatus(200)
}


async function postTactic(req: Request, res: Response) {

    const { tactic, map_id, agent_id, created_by } = req.body
    await prisma.tactics.create({
        data: {
            tactic,
            map_id,
            agent_id,
            created_by
        }
    })
    return res.sendStatus(200)

}

async function updateTactic(req: Request, res: Response) {

    const { tactic, map_id, agent_id, created_by } = req.body
    await prisma.tactics.update({
        where: {
            tactic_id: parseInt(req.params.tacticId)
        },
        data: {
            tactic,
            map_id,
            agent_id,
            created_by
        }
    })
    return res.sendStatus(200)
}


async function deleteTactic(req: Request, res: Response) {

    const { tactic, map_id, agent_id, created_by } = req.body
    await prisma.tactics.update({
        where: {
            tactic_id: parseInt(req.params.tacticId)
        },
        data: {
            tactic,
            map_id,
            agent_id,
            created_by
        }
    })
    return res.sendStatus(200)
}


const tacticsController = {
    getTactic,
    getTactics,
    postTactic,
    updateTactic,
    deleteTactic
}

export { tacticsController }