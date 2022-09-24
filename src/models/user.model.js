const mongoose = require('mongoose'),
UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    code: String
}),

User = mongoose.model('User', UserSchema)

module.exports = User