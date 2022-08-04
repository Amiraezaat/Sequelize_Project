const UserModel = require('../../../DB/models/UserModel')

exports.signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password, cpass, age } = req.body
    if (password === cpass) {
      const emailcheck = await UserModel.findOne({
        attributes: ['email'],
        where: {
          email
        }
      })
      
      if (emailcheck) {
        res.status(400).json({ message: 'oppss email is already exist , please choose another email' })
      } else {
        await UserModel.create({
          firstName,
          lastName,
          email,
          password,
          age
        })
        res.status(201).json({ message: 'Done' })
      }
    } else {
      res.status(400).json({ message: 'password mismatch with confirmation pasword' })
    }
  } catch (error) {
    res.status(400).json({ message: 'connection fail to signup', error })
  }
}
