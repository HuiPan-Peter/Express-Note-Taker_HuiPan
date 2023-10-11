const fs = require('fs');
const notes = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

const addNote = (note) => {
    // Add unique ID to note
    note.id = uuidv4();   
    // Create note array  
    newArr = (notes) ? newArr = notes : newArr = [];      
    // Add new note to array 
    newArr.push(note);  
    // Create a new json file with array   
    fs.writeFile('./db/db.json', JSON.stringify(newArr), err => {    
        if (err) throw err;
        console.log('Note has been added!');
    });
    return;
};

const deleteNote = (note) => {
    // Loop through notes array
    for (let i = 0; i < notes.length; i++) {    
        // When target note matches ID in array, delete that note。
        if (notes[i].id === note.id) {      
            notes.splice(i, 1);    
            console.log('Note has been deleted!')
        }
    };
    return;
};

module.exports = { addNote, deleteNote }