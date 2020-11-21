var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderTodos() {
  // clear existing todos
todoList.innerHTML = ""
  // rerender todos
  for(var i = 0; i < todos.length; i++) {
    // create li element
    var li = document.createElement('li')
    //  add todo text to li
    li.innerText = todos[i]
    // append li to todoList
    todoList.appendChild(li)
  }
}

function addTodos(event) {
  event.preventDefault()
// todoInput get input value
var newTodo = todoInput.value;
if(newTodo !== "") {
  // push the text into todoes
  todos.push(newTodo);
  // clear input after user pressed enter
  todoInput.value = ""
  // call renderTodos ()
  renderTodos();
}};

todoForm.addEventListener('submit', addTodos)

renderTodos()