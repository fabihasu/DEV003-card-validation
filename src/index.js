import validator from './validator.js';

window.funcionValidar = function funcionValidar(){
    const numerotarjeta = document.getElementById("creditCardNumber").value
    validator.isValid(numerotarjeta)
}

