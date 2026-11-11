 const themeToggleBtn = document.getElementById('themeToggle');
        const bodyElement = document.body;

        themeToggleBtn.addEventListener('click', function() {
            bodyElement.classList.toggle('dark-theme');
            if (bodyElement.classList.contains('dark-theme')) {
                themeToggleBtn.textContent = 'Увімкнути світлу тему';
            } else {
                themeToggleBtn.textContent = 'Увімкнути темну тему';
            }
        });