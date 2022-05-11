const currentMainImage = document.querySelector(".gallery-image4 img");
const imagesToChoosefrom = document.querySelectorAll(".gallery img");

imagesToChoosefrom.forEach(img => img.addEventListener(`click`, imageClick));

function imageClick(e) {

    imagesToChoosefrom.forEach(img => img.getElementsByClassName.opacity = 1)

    console.log(e.target);
    currentMainImage.src = e.target.src;
}