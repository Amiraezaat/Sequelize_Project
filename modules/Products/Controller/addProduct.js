const productModel = require("../../../DB/models/ProductModel")

exports.addProduct = async (req, res) => {
  try {
    const { title, desc, UserId, price } = req.body
    const addProduct = await productModel.create({
      title,
      desc,
      UserId,
      price
    }) 
    res.status(201).json({ message: 'added done'})
  } catch (error) {
     res.status(400).json({ message: 'added fail', error })
  }
}
