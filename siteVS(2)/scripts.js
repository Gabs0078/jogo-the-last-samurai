document.addEventListener('DOMContentLoaded', function () {
    console.log('Site carregado com sucesso!');

    const jogarBtns = document.querySelectorAll('.jogar-btn, .jogar-link');
    jogarBtns.forEach(btn => {
        btn.addEventListener('click', function (event) {
            console.log('Redirecionando para o jogo...');
        });
    });

    // Amplia as imagens da galeria
    const modal = document.getElementById("imagemModal");
    const modalImg = document.getElementById("imgExpandida");
    const fecharBtn = document.querySelector(".fechar");

    // Adiciona click para as imagens
    document.querySelectorAll('.img-preview img').forEach(img => {
        img.addEventListener('click', function () {
            modal.style.display = "block";  
            modalImg.src = this.src;       
        });
    });

    // Fecha no X
    fecharBtn.addEventListener("click", function () {
        modal.style.display = "none"; 
    });

    // Fecha ao clicar fora da imagem
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none"; 
        }
    });

    // Fecha o modal com ESC
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none"; 
        }
    });
});
