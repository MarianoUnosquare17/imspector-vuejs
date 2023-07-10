const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    const { authorization } = req.headers;
    
    if (authorization) {
        const splitToken = authorization.split(' ')[1];

        if (splitToken) {
            const tokenVerified = jwt.verify(splitToken, 'ValorantSecret');
            if (tokenVerified) {
                return next();
            }
        }
    }
    
    return res.sendStatus(401);
};

module.exports = {
    verifyToken
};





