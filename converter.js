// add 'file system' module for use of fs methods()
const fs = require('fs');

// use readFile method for later use of input.md data information
// readFile method reads and takes 
fs.readFile('input.md', function(err, data){
    // create variables needed for program
    // showdown is the module that this package uses
    const showdown = require('showdown'),
        converter = new showdown.Converter(),
        // reference the data from the readFile() method previously called 
        // convert the data to a string and give that value to the 'text' variable 
        text = data.toString(),
        // with the text from the input file, use the package method 'makeHtml' to convert the 'text' data into html syntax
        html = converter.makeHtml(text);
    // use appendFile to add the converted text into the output file
    fs.appendFile('output.html', html, function(err){
        // checking for errors
        if(err) console.log(err);
        // affirmation of whether conversion is complete
        else console.log("Conversion Completed."); 
    });
});
