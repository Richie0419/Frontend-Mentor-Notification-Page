const readBtn = document.querySelector('.read');
const number = document.getElementById('num');
const notification = document.querySelectorAll('.notification-box');
const dot = document.querySelectorAll('.dot');

readBtn.addEventListener('click', () => {
    notification.forEach((notify) => {
        notify.classList.remove('unseen');
    })

    dot.forEach((dotColor) => {
        dotColor.classList.remove('dot');
    })

    number.innerText = '0';
})