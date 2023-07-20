import { Request, Response } from "express";
import { prisma } from '../utils/prisma'
const bcrypt = require('bcrypt')

// const prisma = new PrismaClient()

async function getAccounts(req: Request, res: Response) {
    const accounts = await prisma.accounts.findMany({})
    if (accounts) {
        return res.status(200).json(accounts)
    }
    return res.status(400)
}

async function getAccount(req: Request, res: Response) {
    const account = await prisma.accounts.findUnique({
        where: {
            account_id: parseInt(req.params.accountId)
        }
    })
    if (account) {
        return res.status(200).json(account)
    } else {
        return res.status(400)
    }
}

async function postAccount(req: Request, res: Response) {
    const { username, email, password } = req.body
    const hashPassword = await bcrypt.hash(password, 10)
    await prisma.accounts.create({
        data: {
            username,
            email,
            password: hashPassword
        }
    })
    return res.sendStatus(200)
}

async function updateAccount(req: Request, res: Response) {
    const { username, email, password } = req.body
    const hashPassword = await bcrypt.hash(password, 10)
    await prisma.accounts.update({
        where: {
            account_id: parseInt(req.params.userId)
        },
        data: {
            username,
            email,
            password: hashPassword
        },
    })
    return res.sendStatus(200)
}

async function deleteAccount(req: Request, res: Response) {
    await prisma.accounts.delete({
        where: {
            account_id: parseInt(req.params.userId)
        },
    })
    return res.sendStatus(200)
}

const accountController = {
    getAccounts, getAccount, postAccount, updateAccount, deleteAccount
}


export { accountController }