const images = ["0.webp", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);
//prepend를  하면 가장 위에 오게 할 수 있음.
