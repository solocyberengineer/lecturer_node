// Exercise 1
// Create a node application to perform the following tasks:

// Import a fs module to work with a text file called data.txt

const fs  = require('fs');

// Write content to a data.txt file

const filename = 'data.txt';
const filecontent = 'This is the file content';
fs.writeFile(filename, filecontent, (error)=>{
    if( error ) throw error;
    console.log(`file ${filename} created`);
})

// Write a second content to data.txt

fs.writeFile(filename, `\nyeah i guess this is on the second line`, (error, file)=>{
    if (error) throw error;
    console.log(`Overwriting ${filename}`);
})

// Tell me, did the second content override the previous one or was it placed on the next line.

// yes

// Append new content to data.txt

fs.appendFile(filename, '\nnew content appended to the 3rd line i assume', (error)=>{
    if (error) throw error;
    console.log(`Appended data to ${filename}`)
});

// Let’s see who will create a perfect Node application without any bugs

// not me T-T

// NB: Save your work to GitHub and email your lecturer the link. You need to write a professional email and don’t forget to start by greeting