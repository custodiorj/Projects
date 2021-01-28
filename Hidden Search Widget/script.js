const searchActive = document.querySelector('.search');
const button = document.querySelector('.btn');
const input = document.querySelector('.input');

button.addEventListener('click', () => {
    searchActive.classList.toggle('active');
    input.focus();
})