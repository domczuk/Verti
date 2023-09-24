const toggleButton = document.querySelector('.toggle-button')
const navbarMenuLinks = document.querySelector('.navbar__menu-links')

toggleButton.addEventListener('click', () => {
    navbarMenuLinks.classList.toggle('active');
});
