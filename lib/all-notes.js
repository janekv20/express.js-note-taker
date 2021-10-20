//import fs module
const fs = require('fs');
//always import path module
const path = require('path');

//create a note function
function createNewNote (body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return note;
}