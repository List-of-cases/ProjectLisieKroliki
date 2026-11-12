const themeToggleBtn = document.getElementById('themeToggle');
const bodyElement = document.body;

themeToggleBtn.addEventListener('click', function () {
    bodyElement.classList.toggle('dark-theme');
    if (bodyElement.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = 'Місяць';
    } else {
        themeToggleBtn.textContent = 'Сонце';
    }
});

let imgElement = document.getElementById('myImage');

imgElement.src = './assets/image/krolik.jpg';
imgElement.style.maxWidth = '100%';
imgElement.style.maxHeight = '100%';
imgElement.style.objectFit = 'contain';