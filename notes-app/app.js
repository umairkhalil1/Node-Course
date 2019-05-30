const validator = require('validator')
const chalk = require('chalk')
const notes= require('./notes.js')
const yargs = require('yargs')

// Create an add command 
yargs.command({
    command: 'add',
    describe: 'Adding a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true, 
            type: 'string', // Only accepts value of a string
        },
        body:{
            describe: 'Adding Detail',
            demandOption: true, // will not add a new note unless the title and body is defined
            type: 'string',
        },
    },
    handler: function(argv) { // contains the arguements within the handler
        notes.addNote(argv.title, argv.body)
        console.log('Title: ' + argv.title), // matches up to the title command within builder
        console.log('Detail: ' + argv.body) // matches up to the body command within builder
    } 
})

// Create a remove command 
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder:{
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
        //console.log('Removing the note: ' + argv.title) // matches up to remove the title within builder
    },
})

// Create a list command 
yargs.command({
    command: 'list',
    describe: 'Listing all the notes',
    handler: function() {
        console.log('Listing the notes')
    }
})

// Create a read command 
yargs.command({
    command: 'read',
    describe: 'Reading all the notes',
    handler: function() {
        console.log('Reading the notes')
    }
})
yargs.parse() // acts the same as console.log(yargs.argv)

/*
run command for the above - node app.js add --title="shopping list" --body="eggs and bread"

const fs = require('fs')
fs.appendFileSync('notes.txt', 'This is a new line')
fs.writeFileSync('notes.txt','This file was created by Node.js')

Exercises in section 4

const msg = getNotes()
console.log(msg)

console.log(validator.isEmail('Umair@example.com'))
console.log(validator.isURL('https://www.google.com'))
console.log(chalk.green.bold('error'))
*/