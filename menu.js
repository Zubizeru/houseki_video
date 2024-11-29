// Selecionar elementos
const menuToggle = document.getElementById('menu-toggle'); // Botão hamburguer
const menu = document.getElementById('menu'); 
const menuClose = document.getElementById('menu-close');

// Abrir o menu ao clicar no botão hamburguer
menuToggle.addEventListener('click', () => {
    menu.classList.remove('hidden'); // Remove a classe que oculta o menu
});

// Fechar o menu ao clicar no botão "X"
menuClose.addEventListener('click', () => {
    menu.classList.add('hidden'); // Garantir que o menu seja escondido
});