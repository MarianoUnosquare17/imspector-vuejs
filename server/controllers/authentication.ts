import { prisma } from '../utils/prisma'
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// const prisma = new PrismaClient()

async function authenticate(req, res) {

    console.log('Request method:', req.method);
    console.log('Request URL:', req.url);

    const { username, email, password } = req.body
    console.log('Request body:', req.body);

    const users = await prisma.accounts.findMany({
        where: {
            username,
            email,
        }
    })

    console.log('Users:', users);

    const user = users && users.length > 0 && users[0]
    if (user) {
        console.log('User found:', user);

        const passwordCorrect = await bcrypt.compare(password, user.password)
        console.log('Password comparison:', passwordCorrect);

        if (passwordCorrect) {
            
            const accessToken = jwt.sign({ sub: user.account_id }, process.env.JWT_SECRET, {
                expiresIn: 600
            })
            console.log('Access token:', accessToken);

            return res.status(200).json({ accessToken })
        }
    }

    console.log('Authentication failed');
    return res.sendStatus(401)
}

module.exports = {
    authenticate
};
