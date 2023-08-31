$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault()

        const nomeTarefa = $('#nome-tarefa').val()
        const listaDeTarefa = $('.lista-de-tarefas')
        const itemDaLista = $(`<li>${nomeTarefa}</li>`)

        itemDaLista.appendTo(listaDeTarefa)

        $('#nome-tarefa').val('')

        $('li').on('click', function() {
            $(this).css("text-decoration", "line-through")
        })
    })


})