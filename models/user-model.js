const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: String,
    googleId: String,
    thumbnail: String
})

module.exports = mongoose.model('User', userSchema)

