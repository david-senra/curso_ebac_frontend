$(document).ready(function() {
    
    $('form').on('submit', function (e) {
        e.preventDefault();
        $('ul h2').css("display", "block");
        $('#limpar-lista').css("display", "inline");
        const atividadeEscrita = $('#tarefa-definida').val();
        const novoitem = $(`<li></li>`);
        $(`<p>${atividadeEscrita}</p>`).appendTo(novoitem);
        novoitem.appendTo($('.listagem'));
        $(novoitem).fadeIn(1500);
        $(novoitem).attr('onClick', `rabiscar($(this))`);
        $('#tarefa-definida').val('');
    })

    $('#limpar-lista').click(function () {
        $('ul h2').css("display", "none");
        $('#limpar-lista').css("display", "none");
        $('.listagem').html('');
    })
    
})

function rabiscar(x) {
    if (x.css('text-decoration-line') == 'line-through') {
        x.css('text-decoration-line', 'none');
    }
    else {
        x.css('text-decoration-line', 'line-through');
    }
}
