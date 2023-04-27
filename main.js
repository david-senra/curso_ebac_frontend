$(document).ready(function() {

    $('#telefone-contato').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });
    //para strings, é "S" ao invés de "0"
    
    $('#cpf-contato').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    });
    
    $('#cep-contato').mask('00000-000', {
        placeholder: '_____-___'
    });

    $("#formulario-inputs").validate({
        rules: {
            nome: {
                required: true,
            },
            mail: {
                required: true,
                email: true,
            },
            cpf: {
                required: true,
                minlength: 11
            },
            cep: {
                required: true,
                minlength: 8
            },
            endereco: {
                required: true,
            },
            telefone: {
                required: true,
                minlength: 11
            },
        },
        errorElement: "div",
        messages: {
            nome:  "Por favor, digite o seu nome.",
            mail: "Por favor, digite um e-mail válido.",
            telefone: "Por favor, digite um telefone válido.",
            cep: "Por favor, digite um CEP válido.",
            endereco: "Por favor, digite um CEP válido.",
            cpf: "Por favor, digite um CPF válido."
        },
        highlight: function (errorElement) {
            $(errorElement).addClass('error')
            $('input').removeClass('error');
        },
        unhighlight: function (errorElement) {
            $(errorElement).removeClass('error');
        },
        submitHandler: function(form) {
            alert("Dados cadastrados com sucesso!");
            form.submit();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    });
})

