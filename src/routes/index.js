const { Router } = require('express')
const { StatusCodes } = require('http-status-codes')

const Codeforces = require('../clients/Codeforces')

const routes = Router()
const codeforces = new Codeforces()

routes.use('/users/:user/submissions', async (req, res) => {
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
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' })
  }
})

module.exports = routes
