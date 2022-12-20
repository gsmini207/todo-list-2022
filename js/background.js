const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
// console.log(bgImage.src);

//append 요소 html에 넣기 append는 가장 뒤에 오게 함
//prepend도 사용 가능. prepend는 가장 위에 오게 하는것
document.body.appendChild(bgImage);
