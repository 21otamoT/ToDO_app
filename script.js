const form = document.querySelector('#form');
const input = document.querySelector('#input');
const ul = document.querySelector('#ul');
const howTo = document.querySelector('#howto'); 
const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
  todos.forEach(todo => {
    add(todo);
  });
}

form.addEventListener('click',(event)=> {
  event.preventDefault();
  add();
  });

howTo.addEventListener('click',() => {
  alert('1.入力欄に入力します。\n2.追加を押します。\n3.リストをクリックすると完了線を引けます。\n4.リストを右クリックで削除できます。\nスマホならロングタップです。');
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

//時計
window.onload = function()
{
    var width   = 100;
    var height  = 100;
    var centerX = Math.floor(width / 2);
    var centerY = Math.floor(height / 2);
    var canvas  = document.getElementById('clock');
    var context = canvas.getContext('2d');
     
    setInterval(drawClock, 1000);
    drawClock();
         
    function drawClock() {
         
        var date   = new Date();
        var hour   = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
 
         
        // 色の指定
        context.strokeStyle = '#666666';
 
        context.clearRect(0, 0, canvas.width, canvas.height);
         
        // 文字盤の描画
        context.beginPath();
        context.arc(centerX, centerY, centerX - 1, 0, Math.PI*2, false);
        context.stroke();
             
        context.save();
        context.translate(width/2, height/2);
        for(var i=0;i < 360; i+= 30){
            context.rotate( 30 * Math.PI / 180);
            context.beginPath();
            context.moveTo(0, centerY * 0.8);
            context.lineTo(0, centerY * 0.9);
            context.stroke();
        }
        context.translate(-width/2, -height/2);
        context.restore();
         
        context.strokeStyle = '#333333';
         
        drawHand(centerY * 0.5, hour * 30 + minute / 60 * 30);
        drawHand(centerY * 0.8, minute * 6 + second / 60 * 6);
         
        context.strokeStyle = '#EE0000';
         
        drawHand(centerY * 0.8, second * 6);
    }
     
    // 針の描画
    function drawHand(length, angle){
        context.save();
        context.translate(centerX, centerY);
        context.rotate( angle * Math.PI / 180);
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(0, -length);
        context.stroke();
        context.translate(-centerX, -centerY);
        context.restore();
    }
}