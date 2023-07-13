const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    status:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
})

mongoose.models = {}
module.exports = mongoose.model('Tasks', todoSchema)