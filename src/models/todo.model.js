const { Schema, model} = require('mongoose')

const TodoSchema = new Schema({
  taskTitle: {
    type: String,
    required: [true, "The title is required"]
  },
  taskDate: {
    type: String,
  },
  taskDesc: {
    type: String,
    required: [true, "The description is required"]
  }
})

const TodoModel = model('Todo', TodoSchema)

module.exports = TodoModel