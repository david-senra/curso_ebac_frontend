const imagensAnimais = document.querySelectorAll('.clickable-image');
for (let i = 0; i < imagensAnimais.length; i++) {
    imagensAnimais[i].addEventListener("click", function() {
        for (let i = 0; i < imagensAnimais.length; i++) {
            imagensAnimais[i].classList.remove("select");;
        }
        this.classList.add("select");
        denominador = parseInt(this.id);
        showAttributes();
    });
}

function showAttributes() {
    object = animais[denominador];
    const functionNames = [];

    Object.getOwnPropertyNames(object).forEach(function(property) {
        if(typeof object[property] === 'function') {
            functionNames.push(property);
        }
    });

    const textosValores = [];
    for (let i = 0; i < functionNames.length; i++) {
        textosValores.push(document.getElementById(`texto-valor-${i}`));
    }

    for (let i = 0; i < textosValores.length; i++) {
        textosValores[i].innerHTML = object[`${functionNames[i]}`]();
    }

    document.getElementById('texto-atributo-1').innerHTML = 'Possui glândulas mamárias:';
    document.getElementById('texto-atributo-2').innerHTML = 'Regulação de temperatura:';
    document.getElementById('texto-atributo-3').innerHTML = 'Ordem:';
    const textoAtributo4 = document.getElementById('texto-atributo-4');
    const textoAtributo5 = document.getElementById('texto-atributo-5');
    document.getElementById('texto-atributo-6').innerHTML = 'Família:';
    const textoAtributo7 = document.getElementById('texto-atributo-7');
    document.getElementById('texto-atributo-8').innerHTML  = Object.getOwnPropertyNames(object)[12].charAt(0).toUpperCase() + Object.getOwnPropertyNames(object)[12].slice(1) + ':';
    document.getElementById('texto-atributo-9').innerHTML  = 'Espécie:';

    if (denominador < 4) {
        textoAtributo4.innerHTML = 'Alimentação:';
        textoAtributo5.innerHTML = 'Possui garras retráteis?';
        textoAtributo7.innerHTML = 'É domesticado?';
    }
    else {
        textoAtributo4.innerHTML = 'É rastejante?';
        textoAtributo5.innerHTML = 'Velocidade:';
        textoAtributo7.innerHTML = 'Ambiente:';
        document.getElementById('texto-atributo-8').innerHTML = 'Peso da carapaça:';
        if (denominador < 6) {
            document.getElementById('texto-atributo-8').innerHTML = 'Venenosa:';
        }
    }

    for (let i = 0; i < functionNames.length; i++) {
        textosValores[i].innerHTML = textosValores[i].innerHTML.charAt(0).toUpperCase() + textosValores[i].innerHTML.slice(1);
        if (textosValores[i].innerHTML == "False") {
            textosValores[i].innerHTML = "Não";
        }
        if (textosValores[i].innerHTML == "True") {
            textosValores[i].innerHTML = "Sim";
        }
    }
}
