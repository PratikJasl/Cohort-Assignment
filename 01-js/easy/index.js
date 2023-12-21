// Removes Special Characters
const stringWithSpecialChars = "Hello, @World! 123";
const stringWithoutSpecialChars = stringWithSpecialChars.replace(/[^a-zA-Z0-9\s]/g, "");
console.log(stringWithoutSpecialChars); // Outputs: "Hello World 123"

//Removes WhiteSpace
const stringWithSpaces = "  Hello,   World!  ";
const stringWithoutSpaces = stringWithSpaces.replace(/\s/g, "");
console.log(stringWithoutSpaces); // Outputs: "Hello,World!"
