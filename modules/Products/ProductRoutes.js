const { addProduct } = require('./Controller/addProduct')
const { deleteProduct } = require('./Controller/deleteProduct')
const {
  getAllProducts,
  getAllProductsForUser
} = require('./Controller/getAllProducts')
const { updateProduct } = require('./Controller/updateProduct')

const router = require('express').Router()

router.post('/addproduct', addProduct)
router.put('/updateProduct/:id', updateProduct)
router.delete('/deleteProduct', deleteProduct)
router.get('/products', getAllProducts)
router.get('/products/:id', getAllProductsForUser)

module.exports = router
