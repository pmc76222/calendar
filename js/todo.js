const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');



const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event) {
   const li = event.target.parentElement;
   li.remove();
   const log = document.querySelector('.log');   
   const key = log.innerText;
   const indate = document.getElementById(key); 
   const p = indate.querySelector('p');
   p.remove();    
   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
   saveToDos();
}

function paintToDo(newTodo) { 

    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.innerText = '❌';
    button.addEventListener('click',deleteToDo);
    li.appendChild(span);
    li.appendChild(button);    
    todoList.prepend(li);  
    
    const log = document.querySelector('.log');   
    const key = log.innerText;      
    const indate = document.getElementById(key);
    const p = document.createElement('p');
    p.id = newTodo.id;
    p.innerText = newTodo.text;
    indate.append(p);     

}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = "";
    const log = document.querySelector('.log'); 
    const key = log.innerText;              
    const newTodoObj = {
        text: newTodo,
        id:Date.now(),
        key: key
    }  
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener('submit',handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}