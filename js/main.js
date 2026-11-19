const themeToggleBtn = document.getElementById('themeToggle');
const bodyElement = document.body;

themeToggleBtn.addEventListener('click', function () {
    bodyElement.classList.toggle('dark-theme');
    if (bodyElement.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = 'Сонце';
    } else {
        themeToggleBtn.textContent = 'Місяць';
    }
});

function setCardImage(elementId, imagePath, altText) {
    let container = document.getElementById(elementId);
    if (container) {
        container.style.height = 'auto';
        container.style.border = 'none';
        container.style.backgroundColor = 'transparent';
        container.style.padding = '0';
        container.innerHTML = '<img src="' + imagePath + '" alt="' + altText + '" style="width: 100%; height: auto; border-radius: 8px; display: block;">';
    }
}

setCardImage('myImage', './assets/image/krolik.jpg', 'Зайчик у соціальних мережах');
setCardImage('goodImage', './assets/image/good.jpg', 'Плюси соціальних мереж');
setCardImage('badImage', './assets/image/bad.jpg', 'Небезпека соціальних мереж');
setCardImage('scrollPhone', './assets/image/scroll.jpg', 'Ефект нескінченної стрічки');
setCardImage('logo', './assets/image/лого.png', 'BunnyLog');
setCardImage('pic1', './assets/image/4.jpg', 'Пастка чужих успіхів');
setCardImage('pic2', './assets/image/5.jpg', 'Синдром FOMO');

setCardImage('phantomPic', './assets/image/6.jpg', 'Фантомні вібрації');
setCardImage('hygienePic', './assets/image/7.jpg', 'Цифрова гігієна');
setCardImage('timePic', './assets/image/8.png', 'Контроль часу');
setCardImage('eveningPic', './assets/image/9.jpg', 'Вечори без екранів');