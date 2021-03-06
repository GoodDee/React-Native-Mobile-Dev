// The `classNames` variable can be used to link
// any elements you create in js with the associated CSS class names.

const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


// The next 3 lines of code are the HTML elements that you'll need to update when creating new
// TODOs.
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

// This gets executed when
// creating a new TODO. You should replace the `alert()` call with logic to create
// new TODOs.

function newTodo() {
  // When add new item, update item count and unchecked item count.
  const items = document.getElementsByClassName(classNames['TODO_ITEM']).length + 1
  itemCountSpan.innerHTML = items
  uncheckedCountSpan.innerHTML = items
  
  // Create the container of li tag
  var li = document.createElement("li");
  li.setAttribute("class", classNames['TODO_ITEM'])
  li.setAttribute("id", "todo" + items)
  
  // Create a checkbox
  var x = document.createElement("INPUT");
  x.setAttribute("class", classNames['TODO_CHECKBOX'])
  x.setAttribute("id", "check" + items)
  x.setAttribute("type", "checkbox");
  x.addEventListener("change", function(){if (this.checked){uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) - 1; }
										else{uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) + 1;}})
								
  // Prompt user to input the text and it will appear on the screen
  var todo = document.createElement("span");
  const todoText = prompt("TODO text:");
  todo.append(todoText);
  todo.setAttribute('class', 'todo-text');
  
  // Add a delete button
  var y = document.createElement("INPUT");
  y.setAttribute("class", 'todo-delete');
  y.setAttribute("type", "submit");
  y.setAttribute("value", "delete");
  y.addEventListener("click", function(){checkval = document.getElementById("check" + items).checked === false;
										document.getElementById("todo" + items).remove();
										itemCountSpan.innerHTML = document.getElementsByClassName(classNames['TODO_ITEM']).length;
										if (checkval){uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) - 1;}})
  
  // Put everything into the li variable
  li.appendChild(x);
  li.appendChild(todo);
  li.appendChild(y);
  // Append this into the whole list
  list.append(li)
}

