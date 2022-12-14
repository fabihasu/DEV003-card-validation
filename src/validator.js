const validator = {
  
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
    const largodenumerodetarjeta = numerotarjeta.length 
    let gatitos = "" 
    if (largodenumerodetarjeta > 4) { 
      for(let i=0; i < largodenumerodetarjeta - 4; i++) { 
        gatitos = gatitos + "#" 
      }
      const ultimos4digitos = numerotarjeta.slice(-4) 
      const tarjetaenmascarada = gatitos + ultimos4digitos 
      return tarjetaenmascarada 
    } else {
      return numerotarjeta 
    }
  }
};

export default validator;


