const { Router } = require('express')
const { StatusCodes } = require('http-status-codes')

// const Judge = require('../clients/Judge')

const routes = Router()
// const judge = new Judge()

routes.use('/users/:user/submissions', async (req, res) => {
  const { user } = req.params
  // try {
  //   const submissions = await judge.submissions(user)
  //   res.status(StatusCodes.OK).json(submissions)
  // } catch (err) {
  //   res
  //     .status(StatusCodes.INTERNAL_SERVER_ERROR)
  //     .json({ message: 'Internal server error' })
  // }
  res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: 'Not implemented yet' })
})

module.exports = routes
