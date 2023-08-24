const form = document.querySelector(".formulario")

function validaFormulario(numeroA, numeroB) {
    if (numeroB.value > numeroA.value) {
        return true
    } else {
        return false
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const numeroA = document.querySelector('.input_A')
    const numeroB = document.querySelector('.input_B')
    let mensagem = document.querySelector('.mensagem_validacao')
    
    let validacao = validaFormulario(numeroA, numeroB)

    if (validacao == true) {
        mensagem.innerHTML = 'O formulario está válido, B é maior que A'

        numeroA.value = ''
        numeroB.value = ''
    } else {
        mensagem.innerHTML = 'O formulario está inválido, B é menor que A'
    }
})