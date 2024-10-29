document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    alert("Obrigado por entrar em contato! Responderemos em breve.");
});

document.querySelectorAll("#galeria img").forEach(function(img) {
    img.addEventListener("click", function() {
        this.style.border = this.style.border === '2px solid lightyellow' ? '' : '2px solid lightyellow';
    });
});