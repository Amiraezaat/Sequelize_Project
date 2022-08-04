const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const UserRouter = require('./modules/Users/UserRoutes')
const ProductRouter = require('./modules/Products/ProductRoutes')
const CommentsRouter = require('./modules/Comments/CommentsRouts')
const { firedatabase } = require('./DB/connection')

app.use(express.json())
firedatabase()
app.use(UserRouter, ProductRouter, CommentsRouter)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
