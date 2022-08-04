const { addcomment } = require('./Controller/addComment')

const router = require('express').Router()

router.post('/addcomment', addcomment)
module.exports = router
