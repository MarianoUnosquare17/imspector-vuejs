import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function getAccounts (req: Request, res: Response){
    const accounts = await prisma.accounts.findMany({})
    return res.status(200).json(accounts)
}

async function getAccount (req: Request, res: Response){
    const account = await prisma.accounts.findUnique({
        where: {
            account_id: parseInt(req.params.accountId)
        }
    })
    if (account) {
        return res.status(200).json(account)
    } else {
        res.status(400)
    }
}

async function postAccount (req: Request, res: Response){
    const { username, email, password } = req.body
    await prisma.accounts.create({
        data: {
            username,
            email,
            password
        }
    })
    res.sendStatus(200)
}

async function updateAccount (req: Request, res: Response){
    const { username, email, password } = req.body
    await prisma.accounts.update({
        where: {
            account_id: parseInt(req.params.userId)
        },
        data: {
            username,
            email,
            password
        },
    })
    res.sendStatus(200)
}

async function deleteAccount (req: Request, res: Response){
    await prisma.accounts.delete({
        where: {
            account_id: parseInt(req.params.userId)
        },
    })
    res.sendStatus(200)
}

const accountController = {
    getAccounts, getAccount, postAccount, updateAccount, deleteAccount
}


export{accountController}