const jwt = require('jsonwebtoken')
const User = require('../model/UserSchema')


const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        const verify = jwt.verify(token, process.env.SECRET_KEY)
        const user = await User.findOne({ _id: verify._id, 'tokens.token': token })
        if (!user) throw new Error('User not found')
        req.token = token
        req.user = user
        req.userID = user._id
        next()
    } catch (err) {
        console.log(err);
        res.status(401).json('Unauthorised: No token provided')
    }
}

module.exports = authenticate