const express = require('express')
const router = express.Router()

const {
    createNote,
    getAllNotes,
    getNote,
    deleteNote,
    updateNote,

} = require('../controllers/notes')

router.route('/notes/create').post(createNote)
router.route('/getnotes').get(getAllNotes)

router.route('/:id')
    .get(getNote)
    .delete(deleteNote)
    .patch(updateNote)

module.exports = router