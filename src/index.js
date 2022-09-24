const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express();
const auth_router = require('./routes/auth.route.js')
const user_route = require('./routes/user.route.js')
const PORT = 3000
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 1000,
    serverSelectionTimeoutMS: 1000}).then((result) =>console.log('connected mongodb')).catch((err) => console.log(err))
//bodyparser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//route
app.get('/', (req, res) => {
    res.json({"message": "Server is running "});
});
app.use('/api/', user_route)
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
