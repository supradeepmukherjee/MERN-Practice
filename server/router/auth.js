const express = require('express')
const User = require('../model/UserSchema')
const router = express.Router()

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authenticate = require('../middleware/authenticate')
require('../db/conn')

// PROMISES
// router.post('/register', (req, res) => {
//     const { name, email, phone, work, password, cpassword } = req.body
//     if (!name || !email || !phone || !password || !work || !cpassword) {
//         return res.status(422).json()
//     }
//     User.findOne({ email: email })
//         .then((userExists) => {
//             if (userExists) {
//                 return res.status(422).json()
//             }
//             const user = new User({ name, email, phone, work, password, cpassword })
//             user.save().then(() => {
//                 res.status(201).json()
//             }).catch((err) => res.status(500).json())
//         }).catch((err) => { console.log(err); })
// })


router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body
    if (!name || !email || !phone || !password || !work || !cpassword) {
        return res.status(422).json()
    }
    try {
        const userExists = await User.findOne({ email: email })
        if (userExists) {
            return res.status(422).json()
        } else if (password != cpassword) {
            return res.status().json()
        } else {
            const user = new User({ name, email, phone, work, password, cpassword })
            await user.save()
            console.log(user);
            res.status(201).json()
        }
    } catch (err) {
        console.log(err);
    }
})

// login route
router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(422).json()
        }
        const userLogin = await User.findOne({ email })
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)
            const token = await userLogin.generateAuthToken()

            res.cookie('jwt', token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })
            if (!isMatch) {
                res.status(400).json('error')
            } else {
                res.json('success')
            }
        } else {
            res.status(400).json()
        }
    } catch (err) {
        console.log(err);
    }
})

// About me
router.get('/about', authenticate, (req, res) => {
    res.send(req.user)
})

// get user data for contact us and home page
router.get('/getDetails', authenticate, (req, res) => {
    res.send(req.user)
})

router.put('/contact', authenticate, async (req, res) => {
    try {
        const { name, email, phone, msg } = req.body
        if (!name || !email || !phone || !msg) {
            console.log('missing fields')
            return res.json({ error: 'plz fill the required fields' })
        }
        const userContact = await User.findOne({ _id: req.userID })
        if (userContact) {
            const userMsg = await userContact.addMsg(name, email, phone, msg)
            await userContact.save()
            res.status(201).json({ msg: 'user contacted' })
        }
    } catch (err) {
        console.log('error in backend');
    }
})

router.get('/logout', (req, res) => {
    res.clearCookie('jwt', { path: '/' })
    res.status(200).send('logged out')
})

module.exports = router