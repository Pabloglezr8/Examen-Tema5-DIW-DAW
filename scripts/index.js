const formulario = document.querySelector('#formulario')
const nombre = document.querySelector('#nombre')
const mail = document.querySelector('#mail')
const opinion = document.querySelector('#opinion')
const enviar = document.querySelector('#enviar')
const errores = document.querySelector("#errores")

let mensajeError = []

const validar = event => {
    event.preventDefault()
    mensajeError = []

    nombre.value.trim().length === 0 && mensajeError.push('El campo Nombre no puede estar vacío')
    !/^[A-Z].{1}[a-zA-Z]*$/.test(nombre.value.trim()) && mensajeError.push('El nombre no tiene caracteres válidos')
    
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(mail.value.trim()) && mensajeError.push('Introduce una dirección de correo electrónico válida')
    
    opinion.value.trim().length < 10 && mensajeError.push('Mensaje demasiado corto')
 

    if (mensajeError.length === 0 && confirm('¿Esta seguro de enviar este formulario?')) {
        formulario.submit()
    } else if (mensajeError.length > 0) {
        errores.textContent = ""
        console.log(mensajeError)

        mensajeError.forEach(function (mensaje) {
            const miLi = document.createElement("li")
            miLi.textContent = mensaje
            errores.appendChild(miLi)
        })
    }

}

formulario.addEventListener("submit", validar);