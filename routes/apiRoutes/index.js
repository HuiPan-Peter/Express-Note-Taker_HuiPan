const router = require('express').Router();
const data = require('../../db/db.json');
const { addNote, deleteNote } = require('../../lib/data.js');

// GET Route for retrieving all data
router.get('/notes', (req, res) => {
    res.send(data);
});
router.get('/', (req, res) => {
    res.send('API HERE!');
});

// POST Route for a new update
router.post('/notes', (req, res) => {
    addNote(req.body);
    res.json();
});

// DELETE route for handling HTTP DELETE requests 
router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params);
    res.json();
});

module.exports = router;