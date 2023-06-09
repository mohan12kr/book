
const express = require('express')
const bodyParser = require('body-parser')
const route = require('./route/route')
const mongoose = require('mongoose')
const app = express()
const multer = require("multer");
const AppConfig = require('aws-sdk');
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(multer().any())

app.use(cors())


mongoose.connect("mongodb+srv://vivek:vivek@cluster0.vnga7l6.mongodb.net/project-b", {
    useNewUrlParser: true
})
    .then(() => console.log('mongoDb is connected'))
    .catch((error) => console.log(error))


app.use('/', route)

app.listen(process.env.PORT || 3000, function () {
    console.log("Express app running on port " + (process.env.PORT || 3000));
});
