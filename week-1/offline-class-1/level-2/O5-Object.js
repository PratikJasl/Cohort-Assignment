// Object Methods Explanation
function objectMethods(obj) {
  
  // 1) Object.keys just returns the keys present in the object.
  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  // 2) Object.values just returns the values inside a object.
  let values = Object.values(obj);
  console.log("After Object.values():", values);

  // 3) Object.entries converts each key-value pair into an array element.
  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);
  // [ [ 'key1', 'value1' ], [ 'key2', 'value2' ], [ 'key3', 'value3' ] ]

  // 4) hasOwnProperty check whether a specific property is present inside an 
  // object or not and returns true or false.
  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  // 5) Object.assign is used to add a new key-value pair inside the object.
  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);

}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
