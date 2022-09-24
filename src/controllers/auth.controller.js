const User = require('../models/user.model.js')

const login = (req ,res) => {
    
}

const users = (req, res) => {
    User.find()
    .then(result => res.status(200).json({result}))
    .catch(error => res.status(500).json({msg: error}))
}
module.exports = {
    login,
    users
}