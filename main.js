$(document).ready(function() {
    
    let contador = 0;
    
    $('form').on('submit', function (e) {
        e.preventDefault();
        $('ul h2').css("display", "block");
        $('#limpar-lista').css("display", "inline");
        contador += 1;
        const atividadeEscrita = $('#tarefa-definida').val();
        const novoitem = $(`<li></li>`);
        console.log(`${atividadeEscrita}`);
        $(`<p id="${contador}">${atividadeEscrita}</p>`).appendTo(novoitem);
        novoitem.appendTo($('.listagem'));
        $(novoitem).fadeIn(1500);
        $(novoitem).attr('onClick', `rabiscar(${contador})`);
        $('#tarefa-definida').val('');
    })

    $('#limpar-lista').click(function () {
        $('ul h2').css("display", "none");
        $('#limpar-lista').css("display", "none");
        $('.listagem').html('');
        contador = 0;
    })
    
})

function rabiscar(x) {
    
    if ($(`#${x}`).css('text-decoration-line') == 'line-through') {
        $(`#${x}`).css('text-decoration-line', 'none');
    }
    else {
        $(`#${x}`).css('text-decoration-line', 'line-through');
    }
    console.log($(`#${x}`).css('text-decoration-line'));
}
