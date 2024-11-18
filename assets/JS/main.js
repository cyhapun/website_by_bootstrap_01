const buttonOpen = document.querySelector('.buttonOpen');
const menuMobile = document.querySelector('.mobile');
const buttonClose = document.querySelector('.buttonClose');

buttonOpen.onclick = () => {
    menuMobile.classList.add('show');
    menuMobile.classList.remove('hidden-item');
    buttonOpen.classList.add('hidden-button');
    buttonClose.classList.add('show-button');
}

buttonClose.onclick = () => {
    menuMobile.classList.remove('show');
    menuMobile.classList.add('hidden-item');
    buttonOpen.classList.remove('hidden-button');
    buttonClose.classList.remove('show-button');
}

menuMobile.onclick = () => {
    menuMobile.classList.remove('show');
    buttonOpen.style.display = 'block';
    buttonClose.style.display = 'none';
}