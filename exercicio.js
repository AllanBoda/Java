// Exercício número 1;

let v1=3, v2=2;

val=v2;
vv2=v1;

console.log('o primeiro número é: '+val+' e o segundo é: '+vv2);

// Exercício número 2;

function meioE(maior1, maior2){
let maior;
    if (maior1 > maior2){
       return maior1;
    } 

return maior2;
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

 //Exercício número 4;

function Fizz_Buzz(num){
    let final;
    
    if(typeof num === 'number'){
        if(num%3===0 && num%5===0){
            final = FizzBuzz;
        }else if(num%3===0){
            final = Fizz;
        }else if(num%5===0){
            final = Buzz;
        } else{
            final = num;
        }
    }else{
        final = "NaN - Não é um número! Informe um número"
    }
   
    return final;
}
var FizzBuzzs = Fizz_Buzz("A");

console.log(FizzBuzzs);

// Exercício número 5
function limitParImpar(limit){
   
    let i, max=[limit];
    
    for(i=0;i<limit;i++){
        if (i%2==0){
            max[i]="Par";
        }else{
            max[i]="Impar";
        }
    }
return max;
}
limites = 5;
console.log(limitParImpar(limites));
// Exercício número 6

function Truthy(seraoVerdade){
    let total=0;

for (let vdd of seraoVerdade){
   
    if(vdd){
        total ++;
    }
}

return total;
}
const seraoVerdade = [0, 2, "oi", null];
console.log(Truthy(seraoVerdade));

// Exercício número 7

function str(obj){
    for (const property in obg){
        if (typeof obj[property] === 'string'){
            console.log(property+': '+obj[property])
        }
    }
}
