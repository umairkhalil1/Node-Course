const fs = require('fs')

// Load and parse the JSON data
const dataBuffer = fs.readFileSync('1-json.json') // returns the binary data
const dataJSON = dataBuffer.toString() // converts the binary data into JSON
const newInfo = JSON.parse(dataJSON) // Parses the JSON data into an object

// Change with new properties 
newInfo.name = 'Umair'
newInfo.age = '24' 

/*

A more efficient way of producing this is listed above

newInfo = {
    name: 'Umair',
    planet: 'earth',
    age: '24' 
}
*/


// Stringify the changed object and overwrite original data
const bookJSON = JSON.stringify(newInfo) // returns the book object as JSON
fs.writeFileSync('1-json.json', bookJSON) 

/*
First Exercise 

{"name":"The Kite Runner","author":"Khalid Hosseini"} // JSON data

const book = {
    name: 'The Kite Runner',
    author: 'Khalid Hosseini'
}

const bookJSON = JSON.stringify(book) // returns the book object as JSON
fs.writeFileSync('1-json.json', bookJSON) // creates a new JSON file containing what is in the book object 

const parsedData = JSON.parse(bookJSON) 
console.log(parsedData.author) // returns the field name of the object from JSON
*/


/*
Second Exercise

const dataBuffer = fs.readFileSync('1-json.json') // returns the binary data
const dataJSON = dataBuffer.toString() // converts the binary data into JSON
const data = JSON.parse(dataJSON) // Parses the JSON data into an object
console.log(data.name) // calls the name property from the object
*/
