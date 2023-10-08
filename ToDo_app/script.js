const form = document.querySelector('#form');
const input = document.querySelector('#input');
const ul = document.querySelector('#ul');

const todos = JSON.parse(localStorage.getItem('todos'));

bt.addEventListener('click',(event)=> {
  event.preventDefault();
  add();
});
 const add = (todo)=> {
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
    });

    ul.appendChild(li);
    input.value = '';
    saveDate();
  }
};
const saveDate = ()=> {
  const lists = document.querySelectorAll('li');
  let todos = [];

  lists.forEach(list => {
    let todo = {
      text: list.innerText,
      complated: list.classList.contains('text-decoration-line-through')
    } 
    todos.push(list.innerText);
  });
  localStorage.setItem('todos',JSON.stringify(todos));
};
if (todos) {
  todos.forEach(todo => {
    add(todo);
  });
}
