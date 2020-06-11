const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const nocache = require('nocache')

const app = express()
const server = require('http').createServer(app)

app.use(express.static(__dirname))
app.use(nocache())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) =>  {
  res.sendFile(path.join(__dirname, 'home.html'))
})

app.post('/command', (req, res) => {
  console.log('received request')
  const command = req.body.command
  console.log(command)
  const response = { message: command }
  res.send(response)
})

server.listen(8080)
