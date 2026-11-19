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

const burgerBtn = document.getElementById('burgerBtn');
const menuTemplate = document.getElementById('mobileMenuTemplate');

function openMenu() {
    if (document.getElementById('mobileMenu')) return;

    const clone = menuTemplate.content.cloneNode(true);

    const closeBtn = clone.querySelector('#closeBtn');
    closeBtn.addEventListener('click', closeMenu);

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