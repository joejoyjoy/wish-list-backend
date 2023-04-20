const UserModel = require('../models/user.model');

const signUp = async (req, res) => {
  const { name, password, email } = req.body

  try {
    const user = await UserModel.create({name, password, email});
    
    res.status(200).send({ message: 'Sign Up' })
  } catch (error) {
    res.status(200).send({ message: error.message })
  }

}

const checkUser = async (req, res) => {
  const { name, email, picture } = req.body

  try {
    const user = await UserModel.findOne({ email })

    if (user) {
      return res.status(200).send({msg: "Exists", id: user._id})
    }

    const newUser = await UserModel.create({
      name,
      email,
      picture
    })

    res.status(201).send({ data: newUser })

  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

module.exports = {
  signUp, checkUser
}