const config = require('./config').config()
const express = require('express')
const cors = require('cors')
const app = require('express')()
const http = require('http').Server(app)
const path = require('path')

app.use(cors())

app.get('/bundle.js', function(req, res){
  res.sendFile(__dirname + '/bundle.js');
  res.json({msg: 'This is CORS-enabled for all origins!'})
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

http.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port)
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
