$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
    
    $("form").on("submit", function(event) {
        event.preventDefault();
        alert("Envio realizado!");
        $(this).unbind();
        $(this).submit();
    });
});