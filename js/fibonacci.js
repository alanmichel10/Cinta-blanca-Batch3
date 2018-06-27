function creaParrafoHTML(numero){
    let parrafo=document.createElement('p');//<p></p>
    parrafo.textContent=numero+',';
    return parrafo
}

function fibonacci(numero){
let fibo=[0,1];
let contenedor=document.createElement('div');

if(numero>0){
    let parrafo=creaParrafoHTML(0);
    contenedor.appendChild(parrafo);
}
if(numero>1){
    let parrafo=creaParrafoHTML(1);
    contenedor.appendChild(parrafo);
}
for(let i=1;i<numero-1;i++){
    let numero=fibo[i]+fibo[i-1];
    fibo.push(numero);

    let parrafo=creaParrafoHTML(numero);
    contenedor.appendChild(parrafo);
    
}
console.log(fibo);

document.getElementsByTagName('body')[0].appendChild(contenedor);

return fibo;
}
function numerosPares(numeros){
    let contador=0
    for(i=0;i<=numeros.length;i++){
    if(numeros[i]%2==0){
        contador++;}
    }
 console.log(`tiene ${contador} numeros pares`)
     
}

function calculaFibo(){
     let cantidad=document.getElementById('cantidad').value;
     if(cantidad>0){
     fibonacci(cantidad);
     }
     else{
         alert('Puro numero positivo alv compa')
     }
}


