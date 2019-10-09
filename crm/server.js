const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
// const path = require("path")
const PORT = 8000
const api = require("./server/routes/api")
const app = express()

mongoose.connect("mongodb://localhost/CRM", {useNewUrlParser:true}, ()=> console.log("Connected to DB"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})
//app.use(express.static(path.join(__dirname, "build")))
app.use("/", api)


// =====================================================
app.listen(PORT, function(){console.log("Running on port " + PORT)})