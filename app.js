const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

mongoose.Promise = global.Promise
mongoose.connect("mongodb://127.0.0.1:27017/NodeJS", {
    useNewUrlParser: true
})
.then(() => console.log("Connected successfully to db."))
.catch((err) => {
    console.log(err)
    process.exit()
})


const app = express()
const port = 3000

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.get('/', (req, res) => {
    res.json("server is running")
})

require("./routes/appRoute.js")(app)

app.listen(port, ()=> console.log(`server running on ${port}`))

