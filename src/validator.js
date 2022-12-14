const validator = {
  // ...
  isValid(numerotarjeta) {
    let num = []; 
    num = Array.from(String(numerotarjeta), Number);  
    const meuArrayInvertido = num.reverse(); 
    for(let i=0;i < meuArrayInvertido.length;i++){ 
      if (i % 2 !== 0) { 
        meuArrayInvertido[i] = meuArrayInvertido[i] * 2; 
        if (meuArrayInvertido[i]>=10) { 
          const digitos = meuArrayInvertido[i].toString().split('') 
          const sumadedigitos = parseInt(digitos[0]) + parseInt(digitos[1])
          meuArrayInvertido[i] = sumadedigitos;
        }
      } 
    }
    
    let total = 0;
    for(let i = 0; i <meuArrayInvertido.length; i++){
      total = total + meuArrayInvertido[i]
    }

    if(total % 10 === 0) {
      return true
    } else{
      return false
    }
  },

  maskify(numerotarjeta) {
    const largodenumerodetarjeta = numerotarjeta.length // guardo el tamanho de mi numero de tarjeta       
    let gatitos = "" // creo variable tipo string vacia
    if (largodenumerodetarjeta > 4) { //si tengo mas de 4 digitos, entonces enmascaro
      for(let i=0; i < largodenumerodetarjeta - 4; i++) { // recorro mis numeros hasta el largo menos 4,
        gatitos = gatitos + "#" // guardo un gatito por cada repeticion del for
      }
      const ultimos4digitos = numerotarjeta.slice(-4) // guardo los ultimos 4 digitos
      const tarjetaenmascarada = gatitos + ultimos4digitos // concateno los dos string, los gatitos y los ultimos 4 digitos
      return tarjetaenmascarada // retorno mi numero enmascarado
    } else {
      return numerotarjeta // retorno mi mismo numero cuando tengo 4 o menos digitos
    }
    //criar uma variavel que mostre somente os últimos quatro caracteres . substring
    //criar outra variavel que mostre o resto dos números,substituindo pelo símbolo que quero mostrar
    //concatenar as variaveis
    //alert que mostre isso....primeira versão


  }
};

export default validator;


