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




    if(msgError.length === 0 && confirm("¿Estas seguro?"))
}