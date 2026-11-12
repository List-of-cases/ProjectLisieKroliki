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

let container = document.getElementById('myImage');

container.style.height = 'auto';
container.style.border = 'none';
container.style.backgroundColor = 'transparent';
container.style.padding = '0';
container.innerHTML = '<img src="./assets/image/krolik.jpg" style="width: 100%; height: auto; border-radius: 8px; display: block;">';