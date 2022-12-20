//나의openweathermap 사이트 API 키
const API_KEY = "d1248cc9d19ccc88b2f41dbac8462a28";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude; //coords:좌표란 뜻
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //원격 API를 간편하게 호출할 수 있도록 브라우저에서 제공
  //패치하고 기다리고, 응답받음. 응답받으면(then) 그 응답의 json을 받아옴. 그다음에(then) 그 json의 데이터를 얻어옴
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      //weather는 어레이임. 하나밖에 없더라도 어레이임. 그래서 첫번째 즉 0을 입력
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
