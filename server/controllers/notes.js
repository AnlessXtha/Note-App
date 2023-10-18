const Note = require("../models/Note")

const createNote = async (req, res) => {
    const { note } = req.body
    if (!note)
        return res.json({ status: "error", message: "Required field is empty" })
    
    try {
        const createdNote = await Note.create({
            title: req.body.title,
            note: req.body.note
        })
        return res.json({ status: "success", message: "The note has been added", createdNote})
        // res.status(201).send('working')
    } catch (error) {
        return res.json({ status: "error", message: {error}})
    }
}

const getAllNotes = async (req, res) => {
    try {
        const note = await Note.find({})
        return res.json({ status:"success", size: note.length, data: note })
    } catch (error) {
        return res.status(500).json({ status: "error", message: "There was an error."})
    }
}

const getNote = async (req, res) => {
    const {id:taskID} = req.params;
    try {
        const note = await Note.findOne({_id:taskID});
    
        if(!note){
        return res.status(404).json({msg:`No task with id: ${taskID}`})
        }

        return res.json({ status:"success", message: "Data Found", data: note })
    } catch (error) {
        return res.status(500).json({ status: "error", message: "There was an error."})
    }
}

const deleteNote = async (req, res) => {
    const {id:taskID} = req.params;
    try {
        const note = await Note.findOneAndDelete({_id:taskID});
        
        if(!note){
            return res.status(404).json({msg:`No task with id: ${taskID}`})
        }

        return res.json({ status:"success", message: "The note has been deleted" })
    } catch (error) {
        return res.status(500).json({ status: "error", message: "There was an error."})
    }
}

const updateNote = async (req, res) => {
    const {id:taskID} = req.params;

    try {
        const note = await Note.findOneAndUpdate({_id:taskID}, req.body, {
            new: true,
            runValidators: true,
        })

    } catch (error) {
        return res.json({ status: "error", message: "There is an error" })
    }
}

module.exports = {createNote, getAllNotes, getNote, deleteNote, updateNote }