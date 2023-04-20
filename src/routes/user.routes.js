const userRouter = require('express').Router()

const { signUp, checkUser } = require('../controllers/user.controllers')

userRouter
  .post('/signup', signUp)
  .post('/check', checkUser)

module.exports = userRouter;