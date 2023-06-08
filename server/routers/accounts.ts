import { Router } from "express";
import { check } from "express-validator";
import validate from "../utils/validation";
import { PrismaClient } from "@prisma/client";
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


const accountsRouter = Router();
const prisma = new PrismaClient()

accountsRouter.route("/").get(async (req, res) => {
    const accounts = await prisma.accounts.findMany({})
    return res.status(200).json(accounts)
});
accountsRouter.route("/:accountId").get(async (req, res) => {
    const account = await prisma.accounts.findUnique({
        where:{
            id: req.params.accountId
        }
    })
    if(account){
        return res.status(200).json(account)
    } else {
        res.status(400)
    }
});
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
    validate,
    (req, res) => {
        const {username, email, password} = req.body
        prisma.accounts.create({
            data:{
                username,
                email,
                password
            }
        })

        res.status(201)
    });
accountsRouter.route("/:userId").put(
    [
        check('username')
            .trim()
            .isLength({ min: 3 })
            .withMessage('Username must be at least 3 characters'),
        check('user_email')
            .trim()
            .isLength({ min: 3 })
            .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            .withMessage('Please enter a valid email address'),
        check('user_password')
            .isLength({ min: 8, max: 15 })
            .withMessage('Password must be at least 8 characters')
            .matches(/\d/)
            .withMessage("Your password should have at least one number")
            .matches(/[!@#$%^&*(),.?":{}|<>]/)
            .withMessage("Your password should have at least one special character"),
    ],
    validate,
    async(req, res) => {
        const {username, email, password} = req.body
        const {userId} = req.params
       await prisma.accounts.create({
            where:{
                id: parseInt(userId)
            },
            data:{
                username,
                email,
                password
            }
        })

        res.status(204)
    });
accountsRouter.route("/:userId").delete(async (req, res) => {
    
});

export { accountsRouter };
