let numeros=[1,4,7,43,2,35,87,65,23];
console.log(numeros);
console.log(numeros.sort());
console.log(numeros.reverse());


let nombres=['Israel','Michell','Mauricio','Alan','Jorge','Jose'];
console.log(nombres);
console.log(nombres.sort());

let palabra1='tRaMa';
let palabra2='MARTA';

if(palabra1.length==palabra2.length){
    palabra1=palabra1.toLowerCase().split("").sort().join("");
    palabra2=palabra2.toLowerCase().split("").sort().join("");
    
    if(palabra1===palabra2){
        console.log('Si es un Anagrama');
    }
    else{
        console.log('No es un anagrama vato');
    }
}

function numeroMayor(arreglo){
    arreglo=arreglo.sort(function(a,b){return a-b});
    let mayor=arreglo[arreglo.length-1];
    return mayor;

}

let numero=[
    [1,2,3,4,5,3,32,54,65,43,76,12,76,98,35,333,12],
    [1,2,3,4,5,3,32,54,65,43,76,12,76,98,35,333,12],
    [1,2,3,4,5,3,32,54,65,43,76,12,76,98,35,333,12],
]
for(let i=0;i<numero.length;i++){
    let mayor=numeroMayor(numero[i]);
    console.log(mayor)
}

let numeros1=[];
for(i=0;i<40;i++){
    numeros1.push( Math.round(Math.random()*1000))
}
//console.log(numeros1);
console.log(numeroMayor(numeros1));