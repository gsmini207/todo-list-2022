const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// 위의 식은 이거랑 같음  : document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  //버튼이 타겟되었을때(클릭되었을때) 그 버튼의 부모엘리먼트는 누구인가
  const li = event.target.parentElement;
  li.remove();
  //기존 어레이 toDos에 필터링을 할거야. 그중에서 이번 todo의 id랑 같지 않은 애들만 저장한다는 뜻.
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //삭제된 어레이를 다시 저장
  saveToDos();
}

function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  //li에 아이디를 할당함
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  //span에 text 써주는 작업
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText = "Done";
  button.addEventListener("click", deleteToDo);
  //li에 요소를 넣어주는 작업
  li.appendChild(span);
  li.appendChild(button);
  //스판과 버튼이 들어있는 li를 html의 ul에 넣는 작업
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  // 인풋의 값을 새로운 변수에 저장하기
  const newTodo = toDoInput.value;
  //창에서 기존 인풋 삭제
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/*
function sayHello(item) {
  console.log("hello",item)
}
*/

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  //기존 어레이에 파싱된 구문들을 넣어줌
  toDos = parsedToDos;
  // parsedToDos.forEach(sayHello);
  parsedToDos.forEach(paintToDo);
}
