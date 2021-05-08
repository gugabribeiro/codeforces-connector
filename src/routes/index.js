const { Router } = require('express')
const { StatusCodes } = require('http-status-codes')

const Codeforces = require('../clients/Codeforces')

const routes = Router()
const codeforces = new Codeforces()

routes.get('/users/:user', async (req, res) => {
  const { user } = req.params
  try {
    const { handle, rating } = await codeforces.profile(user)
    return res.status(StatusCodes.OK).json({
      name: handle,
      level: rating || 0,
    })
  } catch (err) {
    console.error(err)
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' })
  }
})

routes.get('/users/:user/submissions', async (req, res) => {
  const { user } = req.params
  try {
    const submissions = await codeforces.submissions(user)
    return res.status(StatusCodes.OK).json(
      submissions.map(
        ({ verdict, creationTimeSeconds, problem: { contestId, index } }) => ({
          id: `codeforces_${contestId}/${index}`,
          momentInSeconds: creationTimeSeconds,
          verdict: verdict === 'OK' ? 'SOLVED' : 'TRIED',
        })
      )
    )
  } catch (err) {
    console.error(err)
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' })
  }
})

module.exports = routes
