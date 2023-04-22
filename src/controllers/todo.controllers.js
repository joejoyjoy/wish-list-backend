const TodoModel = require('../models/todo.model')
const UserModel = require('../models/user.model')

const saveTodo = async (req, res) => {
  const { taskTitle, taskDate, taskDesc, taskState } = req.body
  const { userID } = req.params
  console.log(userID);

  try {
    const createdTodo = await TodoModel.create({ taskTitle, taskDate, taskDesc, taskState })
    const user = await UserModel.findById(userID)

    user.todos.push(createdTodo._id)
    await user.save()

    res.status(201).send({ data: createdTodo })

  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

const getTodosOfUser = async (req, res) => {
  const { userID } = req.params

  try {
    const user = await UserModel.findById(userID).populate("todos")

    res.status(200).send({ data: user.todos })
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

const changeTodoState = async (req, res) => {
  const { taskState } = req.body
  const { taskID } = req.params

  try {
    const updateTodo = await TodoModel.findByIdAndUpdate(
      { _id: taskID }, { $set: { taskState: taskState }}, {new: true, runValidators: true}
    );
    
    res.status(200).json(updateTodo);
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

module.exports = {
  saveTodo,
  getTodosOfUser,
  changeTodoState
}