const formulario = document.getElementById("form-numbers")
const primeiroNumero = document.getElementById("primeiro-numero")
const segundoNumero = document.getElementById("segundo-numero")
const containerMensagem = document.querySelector(".result-message")
let primeironumeroValido = false;
let segundonumeroValido = false;

function resultado(numeroUm, numeroDois) {
    return numeroDois > numeroUm
}

formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    const mensagemSucesso = `Sucesso! De fato, <b>${segundoNumero.value}</b> é maior do que <b>${primeiroNumero.value}</b>!`;
    const mensagemErro = `Erro! <b>${segundoNumero.value}</b> <i>NÃO</i> maior do que <b>${primeiroNumero.value}</b>!`;

    verificaNumeros = resultado(primeiroNumero.value, segundoNumero.value)
    if (verificaNumeros) {
        containerMensagem.style.display = "block"
        document.querySelector(".result-message").innerHTML = mensagemSucesso
        containerMensagem.style.backgroundColor = "#27ae60";
    }
    else {
        containerMensagem.style.display = "block"
        document.querySelector(".result-message").innerHTML = mensagemErro
        containerMensagem.style.backgroundColor = "red"
    }
    primeiroNumero.value = "";
    segundoNumero.value = "";
})

console.log(formulario)
