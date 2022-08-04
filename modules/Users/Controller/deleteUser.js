const UserModel = require('../../../DB/models/UserModel')


// ................ delete user ..................
exports.deleteUser = async (req, res) => {
  try {
    const { email } = req.body
    const deleted = await UserModel.destroy({
      where: {
        email
      }
    })
    if (deleted > 0) {
      res.status(200).json({ message: 'deleted done' })
    } else {
      res.status(404).json({ message: 'there is no user with this email' })
    }
  } catch (error) {
    res.json({ message: 'fail' })
  }
}
