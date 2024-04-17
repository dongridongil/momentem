const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const choseImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");

bgImage.src = `img/${choseImage}`
bgImage.classList.add("background=image");

document.body.style.backgroundImage = `url(${bgImage.src})`;


// document.body.appendChild(bgImage);