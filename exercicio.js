console.log('03 - Farenheint ara Celsius');

function farPracel(tempFar){
    //Recebe por parâmero uma temperatura em graus Far
    //Retorna Celcius

    let cel = 5*(tempFar-32)/9;
    
    return cel;
}

function celPrafar(tempCel){
    //Recebe por parâmero uma temperatura em graus Far
    //Retorna Celcius

    let far = ((tempCel*9)+160)/5;
    
    return far;
}

function AreaC(areaC){
    //Recebe por parâmero uma temperatura em graus Far
    //Retorna Celcius

    let total = 3.14*(areaC*areaC);
    
    return total;
}

let temp = farPracel(100);
let tempC= celPrafar(100);
let area = AreaC(100);

console.log('100 graus F são ' + temp + 
' graus Celsius');
console.log('100 graus C são ' + tempC + 
' graus Far');
console.log('Área do círculo é '+area);
