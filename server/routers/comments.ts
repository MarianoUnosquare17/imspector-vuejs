import { Router } from "express";
import { check } from "express-validator";
import validate from "../utils/validation";
import { commentController } from "../controllers/comments";

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


commentRouter.route("/").get(commentController.getAllComments);
//Match
commentRouter.route("/matches/:matchId").get(commentController.getMatchComment);
commentRouter.route("/matches/:matchId").post(
    [
        check('account_comment')
            .trim()
            .isLength({ max: 120 })
            .withMessage('Comment must be no longer than 120 characters'),

    ],
    validate, commentController.getMatchComment);
commentRouter.route("/matches/:commentId").put(commentController.updateMatchComment);
commentRouter.route("/matches/:commentId").delete(commentController.deleteMatchComment);
//Profile
//Not sure if ill need this in the future
// commentRouter.route("/profile/:matchId").get();
// commentRouter.route("/profile/:matchId").post(
//     [
//         check('account_comment')
//             .trim()
//             .isLength({ max: 120 })
//             .withMessage('Comment must be no longer than 120 characters'),

//     ],
//     validate,);
// commentRouter.route("/profile/:commentId").put();
// commentRouter.route("/profile/:commentId").delete();

export { commentRouter };
