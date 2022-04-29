const express = require('express')
const panelAdmin = require('./Routes/admin-panel')
const mongoose = require('mongoose')
const app = express()
const cors = require("cors");
app.use(cors())

app.use(express.json())
app.use('/api',panelAdmin)

mongoose.connect('mongodb://127.0.0.1:27017/adminPanel').then(()=>{ //without any problem
    app.listen(8000)
    console.log("connected")
})
.catch((err) => {// has problem
    console.log(err)
})