const images = ['images/üks.webp', 'images/kaks.jpg', 'images/lolm.webp', 'images/neli.webp'];
const currentImage = document.querySelector(".image-container img");
const button = document.querySelector("button");

button.addEventListener('click', changeImage);

function getRandomImage() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * images.length);
    } while (images[randomIndex] === currentImage.src);
    return images[randomIndex];
}

function changeImage() {  /* This function changes the image. */
    currentImage.src = getRandomImage(); /* This line changes the image. */
}