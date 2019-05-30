const fs = require('fs')
const chalk = require('chalk')

const getNotes = () =>{
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note){ // empty array to hold duplicate notes
        return note.title === title // checks if new note is in the array of duplicate notes
    }) 

    if (duplicateNotes.length === 0){ // No duplicates found 
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added'))
    } else {
        console.log(chalk.bgRed('Note title already taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note){ // empty array to hold all notes
        return note.title !== title // if false, the title is not added to the array and is deleted
    })

    if (notes.length > notesToKeep.length){ //
        console.log(chalk.bgGreen('Note removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.bgRed('Note not found'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes) // returns the notes object as JSON
    fs.writeFileSync('notes.json', dataJSON) // Save the notes object into the JSON file
}

const loadNotes = () => { // Loads the notes in existence from the JSON file
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString() // converts the binary data into JSON
        return JSON.parse(dataJSON) // Parses the JSON data into an object
    } catch (e) {
        return []
    }
}

// property of the same functions within this file are exported for later use
module.exports = {
    getNotes: getNotes, 
    addNote: addNote,
    removeNote: removeNote
}