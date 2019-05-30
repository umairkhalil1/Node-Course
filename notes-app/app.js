const validator = require('validator')
const chalk = require('chalk')
const getNotes= require('./notes.js')
const yargs = require('yargs')

// Create an add command 
yargs.command({
    command: 'add',
    describe: 'Adding a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true, 
            type: 'string', // Only accepts value of a string
        },
        body:{
            describe: 'Adding detail',
            demandOption: true, // will not add a new note unless the title and body is defined
            type: 'string',
        },
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title),
        console.log('Detail: ' + argv.body) // run command - node app.js add --title="shopping list" --body="eggs and bread"
    }
})

// Create a remove command 
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function() {
        console.log('Removing a note')
    }
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