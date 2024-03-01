
const dayNightButton = document.querySelector('.day-night');
const body = document.querySelector('body');

dayNightButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});


const styleSwitcher = document.querySelector('.style-switcher');
const styleSwitcherToggler = document.querySelector('.sytle-switcher-toggler');

styleSwitcherToggler.addEventListener('click', () => {
    styleSwitcher.classList.toggle('open');
});


const colors = document.querySelectorAll('.colors span');
const alternateStyles = document.querySelectorAll('.alternate-style');

colors.forEach(color => {
    color.addEventListener('click', () => {
        const colorName = color.classList[0];
        setActiveStyle(colorName);
    });
});

function setActiveStyle(styleName) {
    alternateStyles.forEach(style => {
        if (style.getAttribute('title') === styleName) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', true);
        }
    });
}