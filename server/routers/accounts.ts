import { Router } from "express";
import { check } from "express-validator";
import validate from "../utils/validation";
import { accountController } from "../controllers/accounts";


const accountsRouter = Router();

/**
 * @openapi
 * /accounts:
 *   get:
 *     tags: [
 *        Accounts
 *     ]
 *     summary: Get all accounts
 *     responses:
 *       200:
 *         description: Successful response
 */
accountsRouter.route("/").get(accountController.getAccounts);

/**
 * @openapi
 * /accounts/{accountId}:
 *   get:
 *     summary: Get an account by ID
 *     parameters:
 *       - in: path
 *         name: accountId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response
 */
accountsRouter.route("/:accountId").get(accountController.getAccount);

/**
 * @openapi
 * /accounts:
 *   post:
 *     summary: Create a new account
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 */
accountsRouter.route("/").post(
    [
        check('username')
            .trim()
            .isLength({ min: 3 })
            .withMessage('Username must be at least 3 characters'),
        check('email')
            .trim()
            .isLength({ min: 3 })
            .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            .withMessage('Please enter a valid email address'),
        check('password')
            .isLength({ min: 8, max: 15 })
            .withMessage('Password must be at least 8 characters')
            .matches(/\d/)
            .withMessage("Your password should have at least one number")
            .matches(/[!@#$%^&*(),.?":{}|<>]/)
            .withMessage("Your password should have at least one special character"),
    ],
    validate, accountController.postAccount);
/**
* @openapi
* /accounts/{userId}:
*   put:
*     summary: Update an account by ID
*     parameters:
*       - in: path
*         name: userId
*         required: true
*         schema:
*           type: integer
*     requestBody:
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               username:
*                 type: string
*               email:
*                 type: string
*               password:
*                 type: string
*     responses:
*       200:
*         description: Successful response
*/
accountsRouter.route("/:userId").put(accountController.updateAccount);
/**
 * @openapi
 * /accounts/{userId}:
 *   delete:
 *     summary: Delete an account by ID
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response
 */
accountsRouter.route("/:userId").delete(accountController.deleteAccount);

export { accountsRouter };
