"use strict";

var formulario = document.getElementById("formulario-inputs");
var headTabela = document.getElementById("tr-head");
var footTabela = document.getElementById("foot-tabela");
var botaoClear = document.getElementById("botao-limpar");
var tableBody = document.getElementById("table-body");
var inputs = document.querySelectorAll('.input');
var errorWarning = document.getElementById("error-warning");
var corpoTabela = [];
var linhas = "";
var linha = "";
var alunosCadastrados = [];
var notasCadastradas = [];
var objetosAlunos = [];
var arrayAlunos = [];
var arrayAlunosAprovados = [];
var nomesAlunosAprovados = [];
var aprovadosListagem = [];
var displayNumeroAprovados = [];
var displayAlunosAprovados = [];
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  var inputNomeAluno = document.getElementById("nome-aluno");
  var inputNotaAluno = document.getElementById("nota-aluno");
  if (alunosCadastrados.includes(inputNomeAluno.value)) {
    errorWarning.classList.add("show");
    errorWarning.innerHTML = 'Esse usuário já foi inserido!';
  } else if (inputNomeAluno.value.length === 0) {
    errorWarning.classList.add("show");
    errorWarning.innerHTML = 'O campo de nome é obrigatório!';
  } else if (inputNotaAluno.value.length === 0) {
    errorWarning.classList.add("show");
    errorWarning.innerHTML = 'O campo de nota é obrigatório!';
  } else {
    headTabela.classList.add("show");
    footTabela.classList.add("show");
    adicionaLinha();
    atualizaTabela();
    verificaAprovados();
  }
});
botaoClear.addEventListener("click", limparResultados);
function adicionaLinha() {
  var inputNomeAluno = document.getElementById("nome-aluno");
  var inputNotaAluno = document.getElementById("nota-aluno");
  errorWarning.classList.remove("show");
  alunosCadastrados.push(inputNomeAluno.value);
  notasCadastradas.push(parseFloat(inputNotaAluno.value));
  linha = "<tr class='tr-notas'>";
  linha += "<td class=\"td-nome\">".concat(inputNomeAluno.value, "</td>");
  linha += "<td class=\"td-notas\">".concat(inputNotaAluno.value, "</td>");
  linha += "</tr>";
  linhas += linha;
  inputNomeAluno.value = "";
  inputNotaAluno.value = "";
}
function atualizaTabela() {
  corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
  var notasAlunos = document.querySelectorAll(".td-notas");
  notasAlunos.forEach(function (item) {
    if (parseInt(item.innerHTML) < 6) {
      item.classList.add("reprovado");
      item.classList.remove("aprovado");
    } else {
      item.classList.add("aprovado");
      item.classList.remove("reprovado");
    }
  });
}
function verificaAprovados() {
  objetosAlunos = document.querySelectorAll('.tr-notas');
  displayNumeroAprovados = document.querySelector('#numero-aprovados');
  displayAlunosAprovados = document.querySelector('#relacao-aprovados');
  objetosAlunos.forEach(function (item) {
    arrayAlunos.push({
      nome: item.children[0].innerHTML,
      nota: item.children[1].innerHTML
    });
  });
  arrayAlunosAprovados = arrayAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
  arrayAlunosAprovados.forEach(function (item) {
    nomesAlunosAprovados.push(item.nome);
  });
  function adicionaAprovados() {
    aprovadosListagem = document.querySelector('#tr-footer2');
    aprovadosListagem.innerHTML = '';
    aprovadosListagem.innerHTML += "<td id=\"relacao-titulo\">Alunos Aprovados:</td>";
    nomesAlunosAprovados.forEach(function (item) {
      var linha1 = "<td id=\"relacao-aprovados\">".concat(item, "</td>");
      aprovadosListagem.innerHTML += linha1;
    });
  }
  arrayAlunosAprovados.length == 0 ? displayNumeroAprovados.innerHTML = '---' : displayNumeroAprovados.innerHTML = arrayAlunosAprovados.length;
  arrayAlunosAprovados.length == 0 ? displayAlunosAprovados.innerHTML = '---' : adicionaAprovados();
  arrayAlunos = [];
  arrayAlunosAprovados = [];
  nomesAlunosAprovados = [];
  aprovadosListagem = [];
}
function limparResultados() {
  headTabela.classList.remove("show");
  footTabela.classList.remove("show");
  var corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = '';
  aprovadosListagem = document.querySelector('#tr-footer2');
  aprovadosListagem.innerHTML = '<td id="texto-aprovados">Relação de Aprovados:</td>';
  aprovadosListagem.innerHTML += '<td id="relacao-aprovados">---</td>';
  displayNumeroAprovados.innerHTML = "";
  displayAlunosAprovados.innerHTML = '---';
  linha = "";
  linhas = "";
  alunosCadastrados = [];
}
inputs.forEach(function (item) {
  item.addEventListener("focus", function (event) {
    errorWarning.classList.remove("show");
  });
});