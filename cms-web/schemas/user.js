const mongoose = require('mongoose')

const { Schema } = mongoose
const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: false
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    id: {
        type: String,
        require: true,
        unique: false
    },
    password: {
        type: String,
        require: true,
        unique: false
    }
})

module.exports = mongoose.model('User', userSchema)