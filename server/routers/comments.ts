import { Router } from "express";
import { check } from "express-validator";
import validate from "../utils/validation";

const commentRouter = Router();
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
commentRouter.route("/tactics/:commentId").get((req, res) => { res.send("Get comment details given the id " + req.params.commentId ) });
commentRouter.route("/").post(
    [
        check('account_comment')
        .trim()
        .isLength({max: 120})
        .withMessage('Comment must be no longer than 120 characters'),

        ],
        validate,
    (req, res) => { res.send("Created comment" )});
commentRouter.route("/tactics/:commentId").put((req, res) => { res.send("Updated comment with the id " + req.params.commentId )});
commentRouter.route("/tactics/:commentId").delete((req, res) => { res.send("Deleted comment with the id" + req.params.commentId) });

export { commentRouter };
