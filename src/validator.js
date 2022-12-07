const validator = {
  // ...
  validate(numerotarjeta) {
    let num = []; //Declaración de una variable = un arreglo vacío
    num = Array.from(String(numerotarjeta), Number);  // Variable = transformando el input de string para número em un arreglo
    let meuArrayInvertido = num.reverse(); // La variable meuArrayInvertido = recibe la función reversa en la variable num
    for(let i=0;i < meuArrayInvertido.length;i++){ // repetición (declaração de una let i, que comienza en el índice=0, y termina en el largo del arreglo  y hace un incremento de índice más uno)
      
      if (i % 2 === 0) { // si... la posição es par (se o índice dividido por 2  tiver o resto idêntico a 0)
         meuArrayInvertido[i] = meuArrayInvertido[i] * 2; // Meuarrayinvertido con los indices pares[i], con todas os ìndices pares, multiplicar * 2
        
         if (meuArrayInvertido[i]>=10) { //se em alguma posição os elementos do meu arreglo for maior ou igual a 10
          let digitos = meuArrayInvertido[i].toString().split('') //declaração de uma let digitos= vai transformar meu arreglo de números [i] só os que forem >=10 em string, e aplico a função de separador de caracteres[1,6]
          let sumadedigitos = parseInt(digitos[0]) + parseInt(digitos[1])//declaração de uma let = vai receber a função de  
          meuArrayInvertido[i] = sumadedigitos
         }

        
      } 
    }

    alert(meuArrayInvertido)
  }
};

export default validator;


