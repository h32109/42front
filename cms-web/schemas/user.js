const mongoose = require('mongoose')

const { Schema } = mongoose
const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: false
    }
})

module.exports = mongoose.model('User', userSchema)