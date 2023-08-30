/* Dark Mode Functionality
--------------------------- */
const userHasDarkMode = localStorage.getItem('dark-mode') === 'enabled';

// Check if user has dark mode enabled
if (userHasDarkMode) {
    document.body.classList.add('dark-mode-variables');
    setTimeout(function () {
        const darkMode = document.querySelector('.dark-mode');
        darkMode.querySelector('span:nth-child(1)').classList.remove('active');
        darkMode.querySelector('span:nth-child(2)').classList.add('active');
    }, 40);
} else {
    setTimeout(function () {
        const darkMode = document.querySelector('.dark-mode');
        darkMode.querySelector('span:nth-child(1)').classList.add('active');
        darkMode.querySelector('span:nth-child(2)').classList.remove('active');
    }, 40);
}

function setDarkMode() {
    const darkMode = document.querySelector('.dark-mode');
    document.body.classList.add('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.remove('active');
    darkMode.querySelector('span:nth-child(2)').classList.add('active');
    localStorage.setItem('dark-mode', 'enabled');
}

function setLightMode() {
    const darkMode = document.querySelector('.dark-mode');
    document.body.classList.remove('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.add('active');
    darkMode.querySelector('span:nth-child(2)').classList.remove('active');
    localStorage.setItem('dark-mode', 'disabled');
}