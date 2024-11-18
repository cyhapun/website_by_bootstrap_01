const buttonOpen = document.querySelector('.buttonOpen');
const menuMobile = document.querySelector('.mobile');
const buttonClose = document.querySelector('.buttonClose');

buttonOpen.onclick = () => {
    menuMobile.classList.add('show');
    menuMobile.classList.remove('hidden-item');
    buttonOpen.style.display = 'none';
    buttonClose.style.display = 'block';
}

buttonClose.onclick = () => {
    menuMobile.classList.remove('show');
    menuMobile.classList.add('hidden-item');
    buttonOpen.style.display = 'block';
    buttonClose.style.display = 'none';
}

menuMobile.onclick = () => {
    menuMobile.classList.remove('show');
    buttonOpen.style.display = 'block';
    buttonClose.style.display = 'none';
}