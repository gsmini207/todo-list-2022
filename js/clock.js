const clock = document.querySelector("#clock");

//시간 호출
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); //getHours는 숫자라 바로 팟스탓 못함. 그래서 String으로 변환하는 것임
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
  //clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); // 웹사이트가 load 되자마자 getclock 먼저 실행되고 그다음에 매초마다 실행되게 해줌
setInterval(getClock, 1000);
//interval 매번 일어나는 무언가 5000이면 5초임
//setInterval(sayHello, 5000);
//timeout 5초뒤에 나오게 함수가 해줌
//setTimeout(sayHello, 5000);
