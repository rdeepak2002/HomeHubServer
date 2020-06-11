const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const nocache = require('nocache')
const { exec } = require("child_process")

const app = express()
const server = require('http').createServer(app)
const port = 8080

app.use(express.static(__dirname))
app.use(nocache())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) =>  {
  res.sendFile(path.join(__dirname, 'home.html'))
})

app.post('/command', (req, res) => {
  const command = req.body.command

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      res.send({ message: error.message })
      return
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      res.send({ message: stderr })
      return
    }
    res.send({ message: stdout })
  })
})

app.listen(port, () => {
  console.log('server listening on port ' + port)
})
