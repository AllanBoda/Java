

function maioEmenor(numeros){
let maior=-99999, menor=99999;

    for (let numero of numeros){
    if(numero < menor){
        menor = numero;
    }
    if(numero > maior){
        maior = numero;
    }
}
return maior-menor;
}

const numeros = [43, 44, 31, 33, 32];

console.log('A diferença entre os números é: '+maioEmenor(numeros));
