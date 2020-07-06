
// console.log('document.documentElement.clientHeight: ', document.documentElement.clientHeight)
// console.log('window.innerHeight: ', window.innerHeight)
// console.log('window.pageYOffset: ',window.pageYOffset)
// console.log('document.documentElement.scrollTop: ', document.documentElement.scrollTop)

// висота видимої частини екрану
const height = document.documentElement.clientHeight;

// усі елементи, які мають бути анімовані
const elements = document.querySelectorAll('.levus-animate');

window.addEventListener('scroll', () => elements.forEach(item => item.getBoundingClientRect().top < height && item.classList.add('show')));
