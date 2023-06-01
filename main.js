function Vertebrados (nome, glandulasMamarias, regTemperatura, ordem) {
    this.nome = nome;
    let _glandulasMamarias = glandulasMamarias;
    let _regTemperatura = regTemperatura;
    let _ordem = ordem;
    this.getNome = function () {
        return nome;
    }
    this.getGlandulasMamarias = function () {
        return _glandulasMamarias;
    }
    this.getRegTemperatura = function () {
        return _regTemperatura;
    }
    this.getOrdem = function () {
        return _ordem;
    }
}

function Mamiferos (nome, alimentacao, garrasRetrateis, familia) {
    Vertebrados.call(this, nome, true, "homeotermo", "mamífero");
    this.alimentacao = alimentacao;
    this.garrasRetrateis = garrasRetrateis;
    this.familia = familia;
    this.getFeeding = function () {
        return this.alimentacao;
    }
    this.getClaws = function() {
        return this.garrasRetrateis;
    }
    this.getFamily = function() {
        return this.familia;
    }
}

function Repteis (nome, rastejante, velocidade, familia) {
    Vertebrados.call(this, nome, false, "heterotermo", "réptil");
    this.nome = nome;
    this.rastejante = rastejante;
    this.velocidade = velocidade;
    this.familia = familia;
    this.getCrawling = function () {
        return this.rastejante;
    }
    this.getSpeed = function() {
        return this.velocidade;
    }
    this.getFamily = function() {
        return this.familia;
    }
}

function Canideos (nome, domesticado, porte, especie) {
    Mamiferos.call(this, nome, 'onívoro', false, "canídeos");
    this.nome = nome;
    this.domesticado = domesticado;
    this.porte = porte;
    this.especie = especie;
    this.getDomestication = function () {
        return this.domesticado;
    }
    this.getSize = function() {
        return this.porte;
    }
    this.getSpecies = function() {
        return this.especie;
    }
}

function Felinos (nome, domesticado, porte, especie) {
    Mamiferos.call(this, nome, 'carnívoro', true, "felinos");
    this.nome = nome;
    this.domesticado = domesticado;
    this.porte = porte;
    this.especie = especie;
    this.getDomestication = function () {
        return this.domesticado;
    }
    this.getSize = function() {
        return this.porte;
    }
    this.getSpecies = function() {
        return this.especie;
    }
}

function Serpentes (nome, ambiente, venenoso, especie) {
    Repteis.call(this, nome, true, 'rápida', "serpentes");
    this.nome = nome;
    this.ambiente = ambiente;
    this.venenoso = venenoso;
    this.especie = especie;
    this.getEnvironment = function () {
        return this.ambiente;
    }
    this.getPoison = function() {
        return this.venenoso;
    }
    this.getSpecies = function() {
        return this.especie;
    }
}

function Tartarugas (nome, ambiente, carapaca, especie) {
    Repteis.call(this, nome, false, 'lenta', "tartarugas");
    this.nome = nome;
    this.ambiente = ambiente;
    this.carapaca = carapaca;
    this.especie = especie;
    this.getEnvironment = function () {
        return this.ambiente;
    }
    this.getPoison = function() {
        return this.carapaca;
    }
    this.getSpecies = function() {
        return this.especie;
    }
}

const gato = new Felinos('Gato', true, 'pequeno', 'felis catus');
const cachorro = new Canideos("Cachorro", true, "variado", "canis familiaris");
const lobo = new Canideos("Lobo", false, "grande", "canis lupus");
const leao = new Felinos("Leão", false, "grande", "panthera leo");
const cascavel = new Serpentes("Cascavel", 'terrestre', true, "crotalus durissus");
const cobra_dagua = new Serpentes("Cobra d'Água", 'aquático', false, "liophis miliaris");
const tartaruga_marinha = new Tartarugas("Tartaruga Marinha", 'aquático', 'leve', "chelonia mydas");
const jabuti = new Tartarugas("Jabuti", 'terrestre', 'pesado', "chelonoidis carbonaria");

const animais = [cachorro, lobo, leao, gato, cascavel, cobra_dagua, tartaruga_marinha, jabuti];
let denominador = 0;



