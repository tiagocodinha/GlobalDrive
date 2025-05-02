// Falrui.pt clonagem - script.js
// ------------------------------
// Para gerir interações do menu e slider

// Menu mobile hamburger toggle
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// TODO: Slider funcionalidade (caso o site tenha slides múltiplos)

// Outras interações poderão ser colocadas aqui...
