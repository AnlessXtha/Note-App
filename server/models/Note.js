const mongoose = require('mongoose')

const Notes = new mongoose.Schema({
    title: {
        type : String,
        required: [true, 'must provide a title'],
        trim: true,
        maxlength: [20, 'title can not be more than 20 characters']
    },
    note: {
        type : String,
        required: [true, 'must provide a context'],
    }
})

const noteModel = mongoose.model('NoteDate', Notes)

module.exports = noteModel