document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let novoTexto = "Olá, Mundo";
        if (document.getElementById('texto-mudar').innerText == novoTexto) {
            document.getElementById('texto-mudar').innerText = "Hello, World";
        }
        else {
            document.getElementById('texto-mudar').innerText = novoTexto;
        }
    })
})