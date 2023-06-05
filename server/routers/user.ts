import { Router } from "express";
import { check } from "express-validator";
import validate from "../utils/validation";
/**
* @openapi
* /Users:
*   get:
*     tags: [
*        Users
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
*                          { "id": 1, "username": "DonBarre", "user_email": "email@email.com", "user_password": "Password1", "valorant_account": "Mikenugget", "valorant_tag": "1313"}]'
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
*   post:
*     tags: [
*        Users
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
*                          { "id": 0, "username": "String", "user_email": "String", "user_password": "String", "valorant_account": "String", "valorant_tag": "String"}]'
*       400:
*         description: Invalid username or password
*         content:
*             application/json:
*                 examples:
*                     jsonObject:
*                         summary: An example JSON response
*                         value: '{ "message": "Invalid username or password" }'
* 
* /Users{valorant_account}:
*   get:
*     tags: [
*        Users
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
*                          { "id": 1, "username": "DonBarre", "user_email": "email@email.com", "user_password": "Password1", "valorant_account": "Mikenugget", "valorant_tag": "1313"}]'
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
* 
*
* /Users/{id}:
*   put:
*     tags: [
*        Users
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
*                          { "id": 1, "username": "DonBarre", "user_email": "email@email.com", "user_password": "Password1", "valorant_account": "Mikenugget", "valorant_tag": "1313"}]'
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
*
*   delete:
*     tags: [
*        Users
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
*                          { "id": 1, "username": "DonBarre", "user_email": "email@email.com", "user_password": "Password1", "valorant_account": "Mikenugget", "valorant_tag": "1313"}]'
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
* 
*
 */


const userRouter = Router();
userRouter.route("/").get((req, res) => { res.send("Get all users") });
userRouter.route("/:userId").get((req, res) => { res.send("Get Single User" + req.params.userId) });
userRouter.route("/").post(
    [
    check('username')
    .trim()
    .isLength({min: 3})
    .withMessage('Username must be at least 3 characters'),
    check('user_email')
    .trim()
    .isLength({min: 3})
    .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    .withMessage('Please enter a valid email address'),
    check('user_password')
    .isLength({min: 8, max: 15})
    .withMessage('Password must be at least 8 characters')
    .matches(/\d/)
    .withMessage("Your password should have at least one number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Your password should have at least one special character"),
    check('valorant_account')
    .trim()
    .isLength({min: 3})
    .withMessage('Please enter a valid valorant account must be at least 3 characters'),
    check('valorant_account')
    .trim()
    .isLength({min: 3})
    .withMessage('Please enter a valid valorant account'),
    check('valorant_tag')
    .trim()
    .isLength({min: 3, max: 4})
    .withMessage('Please enter a valid valorant tag')
    ],
    validate, 
(req, res) => { res.send("Create User") });
userRouter.route("/:userId").put((req, res) => { res.send("Update User" + req.params.userId) });
userRouter.route("/:userId").delete(
    [
        check('username')
        .trim()
        .isLength({min: 3})
        .withMessage('Username must be at least 3 characters'),
        check('user_email')
        .trim()
        .isLength({min: 3})
        .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
        .withMessage('Please enter a valid email address'),
        check('user_password')
        .isLength({min: 8, max: 15})
        .withMessage('Password must be at least 8 characters')
        .matches(/\d/)
        .withMessage("Your password should have at least one number")
        .matches(/[!@#$%^&*(),.?":{}|<>]/)
        .withMessage("Your password should have at least one special character"),
        ],
    (req, res) => { res.send("Delete User" + req.params.userId) });

export { userRouter };
