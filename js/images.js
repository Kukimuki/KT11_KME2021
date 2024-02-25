const currentImage = document.querySelector(".gallery-image4 img");
const imagesToChooseFrom = document.querySelectorAll(".gallery img");

imagesToChooseFrom.forEach(img => img.addEventListener('click', imageClick));

function imageClick(e){

    imagesToChooseFrom.forEach(img => img.style.opacity = 1);/* This line makes all the images opaque. */
    currentImage.src = e.target.src;
    e.target.style.opacity = 0.5;
}