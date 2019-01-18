const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const CoinRouter = require('./routes/CoinRouter')


app.listen(port, function(){
    console.log('Node js Express js Tutorial')
})

app.use(express.static('public'))

app.set('view engine','ejs')

app.get('/', function(req, res){
    res.sendFile(path.json(__dirname,'public','index.html'))
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.Promise = global.Promise
mongoose.connect('mongodb://test:root101@ds233551.mlab.com:33551/coin')

app.use('/coins', CoinRouter)