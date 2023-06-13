import { Router } from "express";
import { check } from "express-validator";
import validate from "../utils/validation";
import { PrismaClient } from "@prisma/client";
const tacticsRouter = Router();
const prisma = new PrismaClient()

/**
* @openapi
* /Tactics:
*   get:
*     tags: [
*        Tactics
*     ]
*     parameters:
*       - name: map
*         in: query
*         type: string
*         description: filter maps.
*       - name: agent
*         in: query
*         type: string
*         description: filter agents.
*       - name: valorant_account
*         in: query
*         type: string
*         description: filter valorant_accounts.
*     responses:
*       200:
*         description: OK
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '[
*                          { "id": 1, "made_by": "DonBarre", "map": "split", "agent": "Raze", "tactic": "example tactic"}]'
*       204:
*         description: No tactic found
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "Tactic not found" }'
* /map/{mapId}/tactics:
*   post:
*     tags: [
*        Tactics
*     ]
*     responses:
*       200:
*         description: OK
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '[
*                          { "id": 1, "made_by": "DonBarre", "map": "split", "agent": "Raze", "tactic": "example tactic"}]'
*       204:
*         description: No user found
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "User not found" }'
*       401:
*         description: Unauthorized
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "Unauthorized" }'
* /agent/{agentId}/tactics:
*   post:
*     tags: [
*        Tactics
*     ]
*     responses:
*       200:
*         description: OK
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '[
*                          { "id": 1, "made_by": "DonBarre", "map": "split", "agent": "Raze", "tactic": "example tactic"}]'
*       204:
*         description: No user found
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "User not found" }'
*       401:
*         description: Unauthorized
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "Unauthorized" }'
* /tactics/{tactic_id}:
*   put:
*     tags: [
*        Tactics
*     ]
*     responses:
*       200:
*         description: OK
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '[
*                          { "id": 1, "made_by": "DonBarre", "map": "split", "agent": "Raze", "tactic": "example tactic"}]'
*       204:
*         description: No tactic found
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "Tactic not found" }'
*       401:
*         description: Unauthorized
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "Unauthorized" }'
* 
*   delete:
*     tags: [
*        Tactics
*     ]
*     responses:
*       200:
*         description: OK
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '[
*                          { "id": 1, "made_by": "DonBarre", "map": "split", "agent": "Raze", "tactic": "example tactic"}]'
*       204:
*         description: No tactic found
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "Tactic not found" }'
*       401:
*         description: Unauthorized
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "Unauthorized" }'
*
 */


tacticsRouter.route("/").get( async(req, res) => {
    const {
        map,
        agent,
    } = req.query
    const config = {where:{}}

    if(map){
        config.where.map = map
    } else if(agent){
        config.where.agent = agent
    } else res.send("Couldnt get tactic")

    await prisma.tactics.findMany(config)
    });
    
    tacticsRouter.route('/').post(
        [
            check('tactic')
            .trim()
            .isLength({max: 120})
            .withMessage('Tactic must be no longer than 120 characters'),

            ],
            validate,
        async (req, res) => {
            const { tactic, map_id, agent_id, created_by } = req.body
            await prisma.tactics.create({
                data: {
                    tactic,
                    map_id,
                    agent_id,
                    created_by
                }
            })
            res.sendStatus(200)
        });

    tacticsRouter.route("/:tacticId").get(async(req, res) => {
        await prisma.tactics.findUnique({
            where:{
                tactic_id: parseInt(req.params.tacticId)
            }
        })
        res.sendStatus(200)
    });
    tacticsRouter.route("/:tacticId").put(async(req, res) => {
        const { tactic, map_id, agent_id, created_by } = req.body
        await prisma.tactics.update({
            where:{
                tactic_id: parseInt(req.params.tacticId)
            },
            data: {
                tactic,
                map_id,
                agent_id,
                created_by
            }
        })
        res.sendStatus(200)
    });

    tacticsRouter.route("/:tacticId").delete(async(req, res) => {
        const { tactic, map_id, agent_id, created_by } = req.body
        await prisma.tactics.update({
            where:{
                tactic_id: parseInt(req.params.tacticId)
            },
            data: {
                tactic,
                map_id,
                agent_id,
                created_by
            }
        })
        res.sendStatus(200)
    });


export { tacticsRouter };