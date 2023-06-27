import { PrismaClient } from "@prisma/client";
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const prisma = new PrismaClient()

async function authenticate(req, res) {

    console.log('Request method:', req.method);
    console.log('Request URL:', req.url);


    const { username, email, password } = req.body
    const users = await prisma.accounts.findMany({
        where: {
            username,
            email,
        }
    })

    const user = users && users.length > 0 && users[0]
    if (user) {
        const passwordCorrect = await bcrypt.compare(password, user.password)
        if (passwordCorrect) {
            const accessToken = jwt.sign({ sub: user.account_id }, 'ValorantSecret', {
                expiresIn: 600
            })
            res.status(200).json({ accessToken })
        }
    }
    res.sendStatus(401)
}

module.exports = {
    authenticate
};