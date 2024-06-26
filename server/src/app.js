const express = require('express')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const planetRouter = require('./routes/planets/planets.router')
const launchesRouter = require('./routes/launches/launches.router')
const app = express()

app.use(express.json())

app.use(express.static(path.join(__dirname,'..','public')))


app.use(cors({ 
    origin: 'http://localhost:9000'
}))

app.use(morgan('combined'))

app.use('/planets',planetRouter)
app.use('/launches',launchesRouter)


app.use('/*', (req,res) => {
    res.sendFile(path.join(__dirname,'..','public','index.html'))
})
module.exports = app;