document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    menuToggle.addEventListener('click', function () {
        sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
    });
});
