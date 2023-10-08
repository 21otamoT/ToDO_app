const form = document.querySelector('#form');
const input = document.querySelector('#input');
const ul = document.querySelector('#ul');

const todos = JSON.parse(localStorage.getItem('todos'));
if (todos) {
  todos.forEach(todo => {
    add(todo);
  });
}
bt.addEventListener('click',(event)=> {
  event.preventDefault();
  add();
  });

function add(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }
  if (todoText) {
    const li = document.createElement('li');
    li.innerText = todoText;
    li.classList.add("list-group-item");

    if (todo && todo.complated) {
      li.classList.add('text-decoration-line-through');
      saveDate();
    }

    li.addEventListener('contextmenu',(event)=>{
      event.preventDefault();
      li.remove();
      saveDate();
    });

    li.addEventListener('click',()=>{
      li.classList.toggle('text-decoration-line-through');
      saveDate();
    });

    ul.appendChild(li);
    input.value = '';
    saveDate();
  }
};

function saveDate() {
  const lists = document.querySelectorAll('li');
  let todos = [];

  lists.forEach((li) => {
     todos.push({
      text: li.innerText,
      complated: li.classList.contains('text-decoration-line-through')
     }) 
    
  });
  localStorage.setItem('todos',JSON.stringify(todos));
};
