import { Router } from "express";
import { check } from "express-validator";
import validate from "../utils/validation";
import { PrismaClient } from "@prisma/client";

const commentRouter = Router();
const prisma = new PrismaClient()
/**
* @openapi
* /Comments:
*   get:
*     tags: [
*        Comments
*     ]
*     parameters:
*       - name: map
*         in: query
*         type: string
*         description: filter maps.
*       - name: matchId
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
*                          { "id": 1, "made_by": "DonBarre", "date": "01-01-2023", "comment": "example"}]'
*       204:
*         description: No comment found
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "Comment not found" }'
*   post:
*     tags: [
*        Comments
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
*                          { "id": 1, "made_by": "DonBarre", "date": "01-01-2023", "comment": "example"}]'
*       400:
*         description: Failed
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "Failed to create comment" }'
* /comments/{commentId}:
*   get:
*     tags: [
*        Comments
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
*                          { "id": 1, "made_by": "DonBarre", "date": "01-01-2023", "comment": "example"}]'
*       204:
*         description: No comment found
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "Comment not found" }'
*   put:
*     tags: [
*        Comments
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
*   delete:
*     tags: [
*        Comments
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
 */


commentRouter.route("/").get((req, res) => {
    //Doubt how do i work with query params
    const {
        valorant_account,
        map,
        matchId
    } = req.query

    if(valorant_account){
        res.send("Get comments given the valorant account " + valorant_account)
    } else if(map){
        res.send("Get comments given the map  " + map)
    } else if(valorant_account && map){
        res.send("Get comments given the valorant account and map " + valorant_account + map)
    } else if(matchId){
        res.send("Get comments given the match id " + matchId)
    } else res.send("Get all comments")
    });
 commentRouter.route("/matches/:matchId").get(async(req, res) => {
     const comments = await prisma.player_match_comments.findMany({
         where:{
             player_matches: {
                player_match_id: parseInt(req.params.matchId)
             }
         }
     })
     if(comments){
         return res.status(200).json(comments)
     } else {
         res.status(400)
     }
 });
commentRouter.route("/matches/:matchId").post(
    [
        check('account_comment')
        .trim()
        .isLength({max: 120})
        .withMessage('Comment must be no longer than 120 characters'),

        ],
        validate,
    async (req, res) => {
        const { comment } = req.body
        await prisma.player_match_comments.create({
            where:{
                player_match_id: parseInt(req.params.matchId)
            },
            data: {
                comment
            }
        })
        res.sendStatus(200)
    });
commentRouter.route("/matches/:commentId").put( async(req, res) => {
    const { comment } = req.body
    await prisma.player_match_comments.update({
        where:{
            player_match_id: parseInt(req.params.commentId)
        },
        data: {
            comment
        }
    })
    res.sendStatus(200)
});
commentRouter.route("/matches/:commentId").delete(async(req, res) => {
    const { comment } = req.body
    await prisma.player_match_comments.delete({
        where:{
            player_match_id: parseInt(req.params.matchId)
        },
        data: {
            comment
        }
    })
    res.sendStatus(200)
});

export { commentRouter };
