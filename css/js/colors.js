const myButton = document.querySelector(`button`);
const myBox = document.querySelector(`.box`);
const colors = ["red", "green", "blue", "yellow"];

myButton.addEventListener(`click`,changecolor);

function changecolor(){
    


    let randomIndex = Math.floor(Math.random()* colors.length);
    console.log(randomIndex)
    myBox.style.backgroundColor = colors [randomIndex];
}