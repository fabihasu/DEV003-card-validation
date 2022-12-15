import validator from './validator.js';

document.getElementById("botonvalidar").addEventListener("click", funcionValidar)
document.getElementById("botonvalidar").disabled = true
document.getElementById("creditCardNumber").addEventListener("keyup", funcionhabilitar)

function funcionhabilitar(){
  if(document.getElementById("creditCardNumber").value.length > 0){
    document.getElementById("botonvalidar").disabled =false
  }else {
    document.getElementById("botonvalidar").disabled = true
  }
}

function funcionValidar(){
  const numerotarjeta = document.getElementById("creditCardNumber").value
 
  const mask = validator.maskify(numerotarjeta) 
  document.getElementById("creditCardNumber").value = mask //Asigno al input el valor de mask 

  const tarjetavalida = validator.isValid(numerotarjeta)
  if (tarjetavalida === true) {
    document.getElementById("mensajevalidacion").innerText ="La tarjeta es válida"
  } else {
    document.getElementById("mensajevalidacion").innerText ="La tarjeta no es válida"

  }
}

