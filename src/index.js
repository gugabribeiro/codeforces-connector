require('dotenv').config()
const cors = require('cors')
const express = require('express')

const routes = require('./routes')

const server = express()
const port = process.env.PORT || 3000

server.use(cors())
server.use(routes)

server.listen(port, () => {
  console.log(`Server running: http://localhost:${port}`)
})
