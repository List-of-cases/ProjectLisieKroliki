const themeToggleBtn = document.getElementById('themeToggle');
const bodyElement = document.body;

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
        bodyElement.classList.toggle('dark-theme');
        if (bodyElement.classList.contains('dark-theme')) {
            themeToggleBtn.textContent = 'Сонце';
        } else {
            themeToggleBtn.textContent = 'Місяць';
        }
    });
}

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
setCardImage('pic1', './assets/image/4.jpg', 'Пастка чужих успіхів');
setCardImage('pic2', './assets/image/5.jpg', 'Синдром FOMO');

const logoContainer = document.getElementById('logo');
if (logoContainer) {
    logoContainer.innerHTML = '<img src="./assets/image/лого.png" alt="BunnyLog" style="width: 100%; height: 100%; object-fit: contain; border-radius: 8px; display: block;">';
}

const burgerBtn = document.getElementById('burgerBtn');
const menuTemplate = document.getElementById('mobileMenuTemplate');

function openMenu() {
    if (document.getElementById('mobileMenu')) return;

    const clone = menuTemplate.content.cloneNode(true);

    const closeBtn = clone.querySelector('#closeBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }

    const links = clone.querySelectorAll('.mobile-nav a');
    links.forEach(link => link.addEventListener('click', closeMenu));

    document.body.appendChild(clone);
}

function closeMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.remove();
    }
}

if (burgerBtn && menuTemplate) {
    burgerBtn.addEventListener('click', openMenu);

    document.addEventListener('click', (event) => {
        const mobileMenu = document.getElementById('mobileMenu');

        if (
            mobileMenu &&
            !mobileMenu.contains(event.target) &&
            !burgerBtn.contains(event.target)
        ) {
            closeMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}
setCardImage('phantomPic', './assets/image/6.jpg', 'Фантомні вібрації');
setCardImage('hygienePic', './assets/image/7.jpg', 'Цифрова гігієна');
setCardImage('timePic', './assets/image/8.png', 'Контроль часу');
setCardImage('eveningPic', './assets/image/9.jpg', 'Вечори без екранів');


const bottomBunny = document.getElementById('bottomBunny');
if (bottomBunny) {
    bottomBunny.innerHTML = '<img src="./assets/gif/заєць1.gif" alt="Піксельний зайчик" style="width: 140px; height: auto; image-rendering: pixelated; display: block;">';
}



// === ЧАРІВНИЙ СЛІД З КУРСОРА (ЗІРОЧКИ ТА КРОЛИКИ) ===
let lastSpawnTime = 0; // Запам'ятовуємо час останньої зірочки

document.addEventListener('mousemove', function (e) {
    const now = Date.now();
    
    // Якщо пройшло менше 150 мілісекунд — нічого не створюємо (щоб сипалось не часто)
    if (now - lastSpawnTime < 150) return;
    lastSpawnTime = now;

    // Створюємо елемент частинки
    const particle = document.createElement('span');
    
    // Вибираємо випадковий символ (зірочки трапляються частіше, кролик — рідше)
    const icons = ['✦', '✨', '⋆', '🐰'];
    particle.textContent = icons[Math.floor(Math.random() * icons.length)];

    // Налаштовуємо вигляд і позицію прямо під курсором
    particle.style.position = 'fixed';
    particle.style.left = (e.clientX + 5) + 'px';
    particle.style.top = (e.clientY + 5) + 'px';
    particle.style.fontSize = '16px';
    particle.style.color = '#A397C4'; // Лавандовий колір під стиль сайту
    particle.style.pointerEvents = 'none'; // Щоб не заважало натискати на кнопки
    particle.style.zIndex = '9999';
    particle.style.transition = 'transform 0.9s ease-out, opacity 0.9s ease-out';

    document.body.appendChild(particle);

    // Запускаємо плавне падіння вниз і зникнення
    setTimeout(function () {
        const randomX = (Math.random() - 0.5) * 30; // Трохи розлітаються вбік
        particle.style.transform = `translate(${randomX}px, 35px) scale(0.5)`;
        particle.style.opacity = '0';
    }, 20);

    // Видаляємо елемент зі сторінки через 0.9 секунди, щоб не засмічувати пам'ять
    setTimeout(function () {
        particle.remove();
    }, 900);
});