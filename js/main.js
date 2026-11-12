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
imgElement.src = './assets/image/Gemini_Generated_Image_pzlfispzlfispzlf.jpg';