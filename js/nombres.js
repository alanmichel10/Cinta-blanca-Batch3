function limpiaTodo(){
    document.getElementById('el_contenedor').innerHTML='';

}
function eventoEnter(eve){
    event.preventDefault();
    if(event.keyCode === 13){
        muestraNombre();
    }
}
function eliminaElemento(elId){
    let elemento=document.getElementById(elId);
    document.getElementById('el_contenedor').removeChild(elemento);
}
function muestraNombre(){
    //obtenemos el valor de nuestro input con el id 'el_nombre'
    let elNombre=document.getElementById('el_nombre').value;
    //Validamos que el texto no este vacio
    if(elNombre.length>0){
    //Creamos un elemento h2 donde vamos a mostrar el texto
    let encabezado=document.createElement('h2');
    //Le asignamos el valor de mi variable al contenido de texto en H2
    encabezado.textContent=elNombre;
    //Definimos el atributo ID del elemento usando gettime()
    let elId=new Date().getTime();
    encabezado.setAttribute('id',elId);
    //Asignamos el evento 'click' y creamos una funcion anonima que mande a llamar eliminaElemento()
    encabezado.onclick=function(){eliminaElemento(elId)}
    //Agrego el elemento H2 al div el id 'el_contenedor'
    document.getElementById('el_contenedor').appendChild(encabezado);
    // Vamo a limpiar el input
    document.getElementById('el_nombre').value='';
    }

}
