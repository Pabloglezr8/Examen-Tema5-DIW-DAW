const formulario = document.getElementById('formulario')
const nombre = document.getElementById('nombre')
const mail = document.getElementById('mail')
const addInfo = document.getElementById('addInfo')
const reserva = document.getElementById('reserva')
const opinion = document.getElementById('opinion')
const enviar = document.getElementById('enviar')

const errores = document.getElementById('errores')

let msgError = [];

const validar = event =>{
    formulario.preventDefault()
    msgError = []

    nombre.ariaValueMax.trim() === 0 && msgError.push("El campo nombre no puede eestar vacío")
    !/^[a-zA-Z]/$.test(nombre.ariaValueMax.trim()) && msgError.push("Caracteres en el nombre incorrecto")


    if(msgError.length === 0 && confirm("¿Estas seguro?"))
    formulario.submit()

    nombre.ariaValueMax.trim() === 0 && msgError.push("El campo nombre no puede eestar vacío")
    !/^[a-zA-Z]/$.test(nombre.ariaValueMax.trim()) && msgError.push("Caracteres en el nombre incorrecto")


    if(msgError.length === 0 && confirm("¿Estas seguro?"))
    formulario.submit()
    nombre.value.trim().length === 0 && mensajeError.push('El campo Nombre no puede estar vacío')
    !/^[a-zA-Z0-9]*$/.test(nombre.value.trim()) && mensajesErrores.push('El nombre no tiene caracteres válidos')
    
    !/^(0[1-9]|[1-2][0-9]|3[01])/(0[1-9]|1[0-2])/(19|20)/$.test(mail.value.trim()) && msgError.push('Formato de fecha incorrecto. dd/mm/aaaa')  

    
    mensaje.value.trim().length < 10 && mensajesErrores.push('Mensaje demasiado corto')


}