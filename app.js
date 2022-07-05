var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var mongoose = require('mongoose')

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var dburl = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.0'

var Message = mongoose.model('Message', {
    name: String,
    message: String
})
// var messages = [
//     //{name: 'Ritik', message: 'Hi'},
//     //{name: 'Ankur', message: 'Hello'}
// ]

app.get('/messages', (req, res) => {
    Message.find({}, (err, messages) => {
        res.send(messages)
    })
    // res.send(messages)
})

app.post('/messages', (req, res) => {
    //console.log(req.body);
    var message = new Message(req.body)

    message.save((err) => {
        if (err)
            res.sendStatus(500)

        // messages.push(req.body)
        io.emit('message', req.body)
        res.sendStatus(200)
    })

})

io.on('connection', (socket) => {
    console.log('a user connected')


})

mongoose.connect(dburl, (err) => {
    console.log('db connected', err)
})
// var server = server.listen(3000, () => {
var server = http.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})