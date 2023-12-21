//Class are Bacially BluePrints which are used to create objects.
//Think of them like a BluePrint of a Car which you can use to create a Car.

//A class can contain 3 different things.
// 1) CONSTRUCTOR tells what are the inputs a class will take.
// 2) Functions can be defined inside a class. These functions can be called through the object.
// In the below example we have a function call LogAnimals. which is called with the object.
// 3) STACTIC Functions are defined for the class, and does not require an object to call them.
// Below is an exmple of static function and how it can be called without an object. 
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  //METHODS
  LogAnimals(){
    console.log(this.name, this.legCount)
  }
  static MyType(){
      console.log("I am Class Animal")
  }
}
//A new object is created from the Class.
let dog = new Animal('dog', 4);
// We called the function present inside the class using the 'dog' object.
dog.LogAnimals();
// Calling a static funciton of the class. Dosen't require an object.
Animal.MyType();