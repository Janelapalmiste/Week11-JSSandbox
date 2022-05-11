const myButton = document.querySelector(`button`);
const image = document.querySelector(`img`);
const images = ["img1 (3).jpg", "img2 (3).jpg", "img3 (3).jpg", "img4 (2).jpg"];

myButton.addEventListener(`click`,changeImage);

function changeImage(){

    let randomIndex = Math.floor(Math.random()* images.length);
    image.src = "img/" + images[randomIndex];

}