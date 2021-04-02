const mobileBtn = document.getElementById('open-menu');
nav = document.querySelector('nav');
mobileBtnExit = document.getElementById('close-menu');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})
