$(document).ready(function() {    
    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('00000-000')

    $('#telefone').mask('(00) 00000-0000')    

    $('form').validade({
        rules: {
            nome: {
                required: true,
                min: 10
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            endereco: {
                required: true
            }
        },
        messages: {
            nome: 'O nome não está completo'
        }
    })
})

