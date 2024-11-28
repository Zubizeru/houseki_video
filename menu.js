// Selecionar elementos
const menuToggle = document.getElementById('menu-toggle'); // Botão hamburguer
const menu = document.getElementById('menu'); // Menu
const menuClose = document.getElementById('menu-close'); // Botão "X"

// Abrir o menu ao clicar no botão hamburguer
menuToggle.addEventListener('click', () => {
    menu.classList.remove('hidden'); // Remove a classe que oculta o menu
});

// Fechar o menu ao clicar no botão "X"
menuClose.addEventListener('click', () => {
    menu.classList.add('hidden'); // Garantir que o menu seja escondido
});