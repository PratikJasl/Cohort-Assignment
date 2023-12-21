/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/
let todo = [];
class TodoList {
  constructor() {
    this.todo = [];
  }

  AddTodo(str){
    this.todo.push(str);
  }

  RemoveTodo(index){
    this.todo.splice(index, 1);
  }

  UpdateTodo(index, str){
    this.todo[index] = str;
  }

  getAll(){
    console.log(this.todo);
  }

  getTodo(index){
    console.log(this.todo[index]);
  }

  clear(){
    this.todo.length = 0;
  }
}

let List = new TodoList();
List.AddTodo("Task 1");
List.AddTodo("Task 2");
List.RemoveTodo(0);
List.clear();
List.getAll();




