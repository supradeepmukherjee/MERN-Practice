const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv')

const cookieParser = require("cookie-parser");
const app = express()
dotenv.config({ path: './config.env' })

require('./db/conn')
app.use(cors({ credentials: true, origin: 'http://localhost:3001' }));
app.use(cookieParser())
app.use(express.json())

const user = require('./model/UserSchema')
app.use(require('./router/auth'))

const port = process.env.PORT

// Middleware
const middleware = (req, res, next) => next()

app.listen(port, '', () => {

})