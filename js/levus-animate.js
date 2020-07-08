// висота видимої частини екрану
const height = document.documentElement.clientHeight;

// усі елементи, які мають бути анімовані
const elements = document.querySelectorAll('.levus-animate');

// робимо батьківський елемент оверфлоу:хідден, щоб сторінку не рвало
elements.forEach(element => element.parentElement.classList.add('hidden'));

window.addEventListener('scroll', () => elements.forEach(item => item.getBoundingClientRect().top < height && item.classList.add('show')));
