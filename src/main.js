const formulario = document.getElementById("formulario-inputs");
const headTabela = document.getElementById("tr-head");
const footTabela = document.getElementById("foot-tabela");
const botaoClear = document.getElementById("botao-limpar");
const tableBody = document.getElementById("table-body");
const inputs = document.querySelectorAll('.input');
const errorWarning = document.getElementById("error-warning");

let corpoTabela = [];
let linhas = "";
let linha = "";
let alunosCadastrados = [];
let notasCadastradas = [];

let objetosAlunos = [];
let arrayAlunos = [];
let arrayAlunosAprovados = [];
let nomesAlunosAprovados = [];
let aprovadosListagem = [];
let displayNumeroAprovados = [];
let displayAlunosAprovados = [];

formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    const inputNomeAluno = document.getElementById("nome-aluno");
    const inputNotaAluno = document.getElementById("nota-aluno");
    if (alunosCadastrados.includes(inputNomeAluno.value)) {
        errorWarning.classList.add("show");
        errorWarning.innerHTML = 'Esse usuário já foi inserido!';
    } 
    else if (inputNomeAluno.value.length === 0) {
        errorWarning.classList.add("show");
        errorWarning.innerHTML = 'O campo de nome é obrigatório!';
    }
    else if (inputNotaAluno.value.length === 0) {
        errorWarning.classList.add("show");
        errorWarning.innerHTML = 'O campo de nota é obrigatório!';
    }
    else {
        headTabela.classList.add("show");
        footTabela.classList.add("show");
        adicionaLinha();
        atualizaTabela();
        verificaAprovados();
    }
})

botaoClear.addEventListener("click", limparResultados);

function adicionaLinha() {
    const inputNomeAluno = document.getElementById("nome-aluno");
    const inputNotaAluno = document.getElementById("nota-aluno");
    errorWarning.classList.remove("show");
    alunosCadastrados.push(inputNomeAluno.value);
    notasCadastradas.push(parseFloat(inputNotaAluno.value));
    
    linha = "<tr class='tr-notas'>";
    linha += `<td class="td-nome">${inputNomeAluno.value}</td>`;
    linha += `<td class="td-notas">${inputNotaAluno.value}</td>`;
    linha += `</tr>`;
    linhas += linha;

    inputNomeAluno.value = "";
    inputNotaAluno.value = "";
}

function atualizaTabela() {
    corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
    const notasAlunos = document.querySelectorAll(".td-notas");
    
    notasAlunos.forEach(item => {
        if (parseInt(item.innerHTML) < 6) {
            item.classList.add("reprovado");
            item.classList.remove("aprovado");
        }
        else {
            item.classList.add("aprovado");
            item.classList.remove("reprovado");
        }
    });
}

function verificaAprovados() {
    objetosAlunos = document.querySelectorAll('.tr-notas');
    displayNumeroAprovados = document.querySelector('#numero-aprovados');
    displayAlunosAprovados = document.querySelector('#relacao-aprovados');

    objetosAlunos.forEach(item => {
        arrayAlunos.push({
            nome: item.children[0].innerHTML,
            nota: item.children[1].innerHTML
        })
    });
    
    arrayAlunosAprovados = arrayAlunos.filter((aluno) => aluno.nota >= 6);

    arrayAlunosAprovados.forEach(item => {
        nomesAlunosAprovados.push(item.nome);
    });

    function adicionaAprovados() {
        aprovadosListagem = document.querySelector('#tr-footer2');
        aprovadosListagem.innerHTML = '';
        aprovadosListagem.innerHTML += `<td id="relacao-titulo">Alunos Aprovados:</td>`
        nomesAlunosAprovados.forEach(item => {
            let linha1 = `<td id="relacao-aprovados">${item}</td>`
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
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = '';
    aprovadosListagem = document.querySelector('#tr-footer2');
    aprovadosListagem.innerHTML = '<td id="texto-aprovados">Relação de Aprovados:</td>';
    aprovadosListagem.innerHTML += '<td id="relacao-aprovados">---</td>';
    displayNumeroAprovados.innerHTML = "";
    displayAlunosAprovados.innerHTML = '---'
    linha = "";
    linhas = "";
    alunosCadastrados = [];
}

inputs.forEach(item => {
    item.addEventListener("focus", (event) => {
        errorWarning.classList.remove("show");
    });
});