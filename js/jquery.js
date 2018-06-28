//creamos un elemento con js puro
let encabezado=document.createElement('h2');
//le ponemos un texto interno
encabezado.textContent='Este es un texto';
//lo agregamos al elemento deseado,en este caso body
document.getElementsByTagName('body')[0].appendChild(encabezado);

/************************************************ 
 *Exactamente lo mismo de arriba pero con jquery*
 ************************************************/

 
//Creamos un elemento y definimos el texto
let encabezado2=$('<h2></h2>').text('Este es otro texto');

//Lo agregamos al body
$('body').append(encabezado2);
