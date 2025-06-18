// Script para trocar as imagens entre campo e cidade
const swapButton = document.getElementById('swap-button');
const currentImage = document.getElementById('current-image');

const images = [
  { field: 'images/campo1.jpg', city: 'images/cidade1.jpg' },
  { field: 'images/campo2.jpg', city: 'images/cidade2.jpg' }
];

let currentIndex = 0;

swapButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  currentImage.src = images[currentIndex].field;
});
