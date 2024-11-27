document.getElementById('menu-toggle').onclick = function () {
    const menu = document.getElementById('menu-links');
    menu.classList.toggle('active');
};
const menuToggle = document.getElementById('menu-toggle');
const menuLinks = document.getElementById('menu-links');

menuToggle.addEventListener('click', () => {
    menuLinks.style.display = menuLinks.style.display === 'flex' ? 'none' : 'flex';
});
btn.onclick = function(event) {
    event.preventDefault();
    modal.style.display = 'flex';
    closeBtn.focus(); // Устанавливаем фокус на кнопку закрытия
};
