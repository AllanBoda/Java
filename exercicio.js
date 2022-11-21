
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

// Exercício número 1;

let v1=3, v2=2;

val=v2;
vv2=v1;

console.log('o primeiro número é: '+val+' e o segundo é: '+vv2);

// Exercício número 2;

function meioE(maior1, maior2){
let maior;
    if (maior1 > maior2){
        maior = maior1;
    } else{
        maior = maior2;
    }

return maior;
}
maiorNumero = meioE(5,3);

console.log('O maior entre eles é: '+maiorNumero);

// Exercício número 3;

function larguraEaltura(largura, altura){

    if (largura>altura){
        return true;
    }else{
        return false;
    }
}
tamanho = larguraEaltura(3,2);

console.log('O resultado é: '+tamanho);

// Exercício número 4;

function Fizz_Buzz(num){
    let final;
    switch (num){
    case "":
    final = 'NaN - Não é um número! Informe um número';
    break;
    default:
    if(num%3==0 && num%5==0){
        final = 'FizzBuzz';
    }else if(num%3==0){
        final = 'Buzz';
    }else if(num%5==0){
        final = 'Fizz';
    }else{
        final = num;
    }
    }
    return final;
}
var FizzBuzzs = Fizz_Buzz(5);

console.log(FizzBuzzs);

// Exercício número 5: Escreva uma função que, dado um número limite, imprima, até esse limite "par" ou "ímpar"
// (verificando os números entre 0 e limite).
/*
function limitParImpar(limit, PoI){
    var ine=[];

    switch (PoI){
        case 'par':
        for(let nume of limit){
            i=0
            if (nume%2===0){
                ine[i] = nume;
                i++;
            }
        }
        break;

        case 'impar':
        for(let nume of limit){
            i=0
             if (nume%2!==0){
            ine[i] = nume;
             i++;
             }
         }  
        break;

        default:
        return 'Não é par nem impar';


    }
    return ine;
}

LIMIT = limitParImpar(4,'par');
console.log(LIMIT);
*/
// Exercício número 6

function Truthy(seraoVerdade){
let total;

for (let vdd of seraoVerdade){
    
    if(vdd!==false && vdd!==0 && vdd!==undefined && vdd!==null && vdd!=="" && vdd!==NaN){
        total ++;
    }
}

return total;
}

const seraoVerdade = [0, 2, 2];
console.log(Truthy(seraoVerdade));

// Exercício número 7

