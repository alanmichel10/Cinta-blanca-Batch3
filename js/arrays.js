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



