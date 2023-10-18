const Note = require("../models/Note")

const createNote = async (req, res) => {
    const { note } = req.body
    if (!note)
        return res.json({ status: "error", message: "Required field is empty" })
    
    try {
        await Note.create({
            title: req.body.title,
            note: req.body.note
        })
        return res.json({ status: "success", message: "The note has been added"})
        // res.status(201).send('working')
    } catch (error) {
        return res.json({ status: "error", message: {error}})
    }
}

const getAllNotes = async (req, res) => {
    try {
        res.status(200).send('All Notes')
    } catch (error) {
        res.status(500).send(error)
    }
}

const getNote = async (req, res) => {
    try {
        res.status(200).send('A Notes')
    } catch (error) {
        res.status(200).send(error)
    }
}

const deleteNote = async (req, res) => {
    try {
        res.status(200).send('All Notes')
    } catch (error) {
        res.status(200).send(error)
    }
}

const updateNote = async (req, res) => {
    try {
        res.status(200).send('All Notes')
    } catch (error) {
        res.status(200).send(error)
    }
}

module.exports = {createNote, getAllNotes, getNote, deleteNote, updateNote }