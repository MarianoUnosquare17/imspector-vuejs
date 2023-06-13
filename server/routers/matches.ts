import { Router } from "express";
import { check } from "express-validator";
import validate from "../utils/validation";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const matchesRouter = Router();


matchesRouter.route("/matches").get(async (req, res) => {
    const {
        map,
        agent,
        player_id
    } = req.query
    const config = { where: {} }

    if (map) {
        config.where.map = map
    } else if (agent) {
        config.where.agent = agent
    } else if (player_id) {
        config.where.player_id = player_id
    } else res.send("Couldnt get match")

    await prisma.player_matches.findMany(config)
});
matchesRouter.route("/:matchId").get(async (req, res) => {
    const match = await prisma.player_matches.findUnique({
        where: {
            player_match_id: parseInt(req.params.matchId)
        }
    })
    if (match) {
        return res.status(200).json(match)
    } else {
        res.status(400)
    }
});
matchesRouter.route("/:playerId").post(
    async (req, res) => {
        const { score,
            date_played,
            kills,
            deaths,
            assists,
            money_spent,
            bodyshots,
            headshots,
            legshots,
            map_id,
            agent_id,
            player_id,
            player_match_mode_id } = req.body
        await prisma.player_matches.create({
            where: {
                player_match_id: parseInt(req.params.player_id)
            },
            data: {
                score,
                date_played,
                kills,
                deaths,
                assists,
                money_spent,
                bodyshots,
                headshots,
                legshots,
                map_id,
                agent_id,
                player_id,
                player_match_mode_id
            }
        })
        res.sendStatus(200)
    });
matchesRouter.route("/:playerId").put(async (req, res) => {
    const { score,
        date_played,
        kills,
        deaths,
        assists,
        money_spent,
        bodyshots,
        headshots,
        legshots,
        map_id,
        agent_id,
        player_id,
        player_match_mode_id } = req.body
    await prisma.player_matches.update({
        where: {
            player_match_id: parseInt(req.params.player_id)
        },
        data: {
            score,
            date_played,
            kills,
            deaths,
            assists,
            money_spent,
            bodyshots,
            headshots,
            legshots,
            map_id,
            agent_id,
            player_id,
            player_match_mode_id
        }
    })
    res.sendStatus(200)
});

matchesRouter.route("/:playerId").delete(async(req, res) => {
    const { score,
        date_played,
        kills,
        deaths,
        assists,
        money_spent,
        bodyshots,
        headshots,
        legshots,
        map_id,
        agent_id,
        player_id,
        player_match_mode_id } = req.body
    await prisma.player_matches.delete({
        where: {
            player_match_id: parseInt(req.params.player_id)
        },
    })
    res.sendStatus(200)
});

export { matchesRouter };
