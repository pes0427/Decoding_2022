init();//실행

function init(){
    document.querySelector('form').addEventListener('submit', addTodo);
    document.getElementById('clearAll').addEventListener('click', clearAll);
    document.querySelector('ul').addEventListener('click', delOrDoneTodo);
}

function addTodo(e){
    e.preventDefault(); //자동 실행 될 때 버튼이 눌려 함수가 실행되는 것 방지
    let toDoValue = document.getElementById('todo');
    if(toDoValue.value == ''){
        alert('내용을 입력해주세요.');
    } else {
        addTask(toDoValue.value);
        toDoValue.value = '';
    }
}

function delOrDoneTodo(e){
    if(e.target.className == 'del'){
        delTodo(e);
    } else {
        doneTodo(e);
    }
}

function addTask(value){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<button class="del">X</button><label id="val">${value}</label><button class="done">DONE</button>`;
    ul.appendChild(li); //리스트 내용 추가
}

function delTodo(e){
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}

function doneTodo(e){
    let done = e.target.previousSibling;
    if(e.target.className == 'done'){
        done.style.textDecoration = "line-through";
    }
}

function clearAll(e){
    let ul = document.querySelector('ul').innerHTML = '';
}
