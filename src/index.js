import validator from './validator.js';

document.getElementById("botonvalidar").addEventListener("click", funcionValidar)
document.getElementById("botonvalidar").disabled = true
document.getElementById("creditCardNumber").addEventListener("keyup", funcionhabilitar)

function funcionhabilitar(){
  if(document.getElementById("creditCardNumber").value.length > 0 ) {
    document.getElementById("botonvalidar").disabled = false 
  } 
  if (document.getElementById("creditCardNumber").value.length === 0 ) {
    document.getElementById("botonvalidar").disabled = true
  }
}

function funcionValidar(){
  const numerotarjeta = document.getElementById("creditCardNumber").value
 
  const mask = validator.maskify(numerotarjeta) // llamo funcion maskify que está en el objeto validator y mascaro el valor del input
  document.getElementById("creditCardNumber").value = mask //Asigno al input el valor de mask 

  const tarjetavalida = validator.isValid(numerotarjeta)
  if (tarjetavalida === true) {
    // alert ("La tarjeta es válida")
    document.getElementById("mensajevalidacion").innerHTML ="La tarjeta es válida"
  } else {
    // alert ("La tarjeta es inválida")
    document.getElementById("mensajevalidacion").innerHTML ="La tarjeta no es válida"

  }
}

