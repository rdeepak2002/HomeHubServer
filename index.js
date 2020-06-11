const path = require('path')
const express = require('express')
const app = express()
const server = require('http').createServer(app)

app.get('/', (req, res) =>  {
  res.sendFile(path.join(__dirname, 'home.html'))
})

server.listen(8080)
