const todoRouter = require('express').Router()
const { saveTodo, getTodosOfUser } = require('../controllers/todo.controllers')

todoRouter
  .post('/create/:userID', saveTodo)
  .get('/:userID', getTodosOfUser)

module.exports = todoRouter