document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o botão do menu e a caixa do menu
    const menuToggle = document.querySelector(".menu-toggle");
    const menuBox = document.getElementById("menuBox");

    // Verifica se os elementos existem antes de adicionar o evento
    if (menuToggle && menuBox) {
        menuToggle.addEventListener("click", function () {
            menuBox.classList.toggle("active");
        });
    } else {
        console.error("Erro: Elementos do menu não encontrados.");
    }
});