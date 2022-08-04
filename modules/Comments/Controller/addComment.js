const commnetModel = require('../../../DB/models/commentsModel')

exports.addcomment = async (req, res) => {
  try {
    const { UserId, ProductId, commentbody } = req.body
    const comment = await commnetModel.create({
      UserId,
      ProductId,
      commentbody
    })
    res.status(201).json({ message: 'done', comment })
  } catch (error) {
    res.status(400).json({ message: 'fail' })
  }
}
