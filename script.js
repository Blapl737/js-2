document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function (event) {
        document.querySelectorAll('.submenu').forEach(submenu => {
            if (submenu !== this.querySelector('.submenu')) {
                submenu.style.display = 'none';
            }
        });
        const submenu = this.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            event.stopPropagation();
        }
    });
});
document.addEventListener('click', () => {
    document.querySelectorAll('.submenu').forEach(submenu => {
        submenu.style.display = 'none';
    });
});
