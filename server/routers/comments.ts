import { Router } from "express";
import { check } from "express-validator";
import validate from "../utils/validation";
import { commentController } from "../controllers/comments";

const commentRouter = Router();

/**
 * @openapi
 * /comments:
 *   get:
 *     summary: Get all comments
 *     responses:
 *       200:
 *         description: Successful response
 */

commentRouter.route("/").get(commentController.getAllComments);
//Match

/**
 * @openapi
 * /comments/matches/{matchId}:
 *   get:
 *     summary: Get comments for a specific match
 *     parameters:
 *       - in: path
 *         name: matchId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the match
 *     responses:
 *       200:
 *         description: Successful response
 */
commentRouter.route("/matches/:matchId").get(commentController.getMatchComment);
/**
 * @openapi
 * /comments/matches/{matchId}:
 *   post:
 *     summary: Create a new comment for a specific match
 *     parameters:
 *       - in: path
 *         name: matchId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the match
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               account_comment:
 *                 type: string
 *             required:
 *               - account_comment
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 */
commentRouter.route("/matches/:matchId").post(
    [
        check('account_comment')
            .trim()
            .isLength({ max: 120 })
            .withMessage('Comment must be no longer than 120 characters'),

    ],
    validate, commentController.getMatchComment);

/**
 * @openapi
 * /comments/matches/{commentId}:
 *   put:
 *     summary: Update a comment for a specific match
 *     parameters:
 *       - in: path
 *         name: commentId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the comment
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 */
commentRouter.route("/matches/:commentId").put(commentController.updateMatchComment);
/**
 * @openapi
 * /comments/matches/{commentId}:
 *   delete:
 *     summary: Delete a comment for a specific match
 *     parameters:
 *       - in: path
 *         name: commentId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the comment
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 */
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
