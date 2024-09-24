// Alerta de envio do formulário
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    alert("Obrigado por entrar em contato! Em breve retornarei.");
});
