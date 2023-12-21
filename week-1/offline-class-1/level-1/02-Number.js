function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
//parseInt converts a string to an integer.
//It will convert decimal string into a integer
explainParseInt("42");   //42
explainParseInt("42px"); //42
explainParseInt("3.14");  //3

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
//parsefloat converts a string to a float.
//It will convert decimal string into a float.
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");
