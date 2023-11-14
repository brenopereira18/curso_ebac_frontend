document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario')
    form.addEventListener('submit', function(event) {
        event.preventDefault()
        let numeroMaximo = document.getElementById('numero-maximo').value
        numeroMaximo = parseInt(numeroMaximo)
        
        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1
        document.querySelector('.resultado-valor').innerHTML = numeroAleatorio

        document.querySelector('.resultado').style.display = 'block'
    })
})