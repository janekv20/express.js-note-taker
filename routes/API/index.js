//import express router
const router = require('express').Router();
//import db
const { notes } = require('../../db/db');

//import notes functions
const { createNewNote, validateNote } = require('../../lib/all-notes');

//Get method
router.get('/notes', (req,res) => {
    let results = notes;
    res.json(results);
});

//Post method
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)){
        res.status(400).send('This note is missing information or not formatted properly.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note)
    }
});

module.exports = router;