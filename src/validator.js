const validator = {
  // ...
  isValid(numerotarjeta) {
    let num = []; 
    num = Array.from(String(numerotarjeta), Number);  
    let meuArrayInvertido = num.reverse(); 
    for(let i=0;i < meuArrayInvertido.length;i++){ 
      if (i % 2 !== 0) { 
         meuArrayInvertido[i] = meuArrayInvertido[i] * 2; 
         if (meuArrayInvertido[i]>=10) { 
          let digitos = meuArrayInvertido[i].toString().split('') 
          let sumadedigitos = parseInt(digitos[0]) + parseInt(digitos[1])
          meuArrayInvertido[i] = sumadedigitos;
         }
      } 
    }
    
    let total = 0;
    for(let i = 0; i <meuArrayInvertido.length; i++){
      total = total + meuArrayInvertido[i]
    }

    //alert(meuArrayInvertido)
   // alert(total)

    if(total % 10 == 0) {
      alert("La tarjeta es válida")
    } else{
      alert("la tarjeta es Inválida")
    }

  }
};

export default validator;


