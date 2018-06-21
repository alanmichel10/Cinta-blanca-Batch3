 alumnos={
    'Cinta_blanca':[
        {'Nombre':'Michell','Edad':25},
        {'Nombre':'Mauricio','Edad':34},
        {'Nombre':'Alan','Edad':19},
        {'Nombre':'Israel','Edad':26},

    ]
};
console.log(alumnos);
console.log(alumnos.Cinta_blanca[0].Nombre);
console.log(alumnos.Cinta_blanca[0].Edad);
/*
let header=document.createElement('h1');
header.textContent='Este es un encabezado';
document.getElementsByTagName('body')[0].appendChild(header);*/

for(let i=0;i<alumnos.Cinta_blanca.length;i++){
    let header=document.createElement('h1');
    let header2=document.createElement('h2');

    header.textContent=alumnos.Cinta_blanca[i].Nombre;
    header2.textContent=alumnos.Cinta_blanca[i].Edad;

    document.getElementsByTagName('body')[0].appendChild(header);
    document.getElementsByTagName('body')[0].appendChild(header2);
   

}



let productos={
    'Linea_blanca':[
        {'Nombre':'Refri','Precio':3000,'Cantidad':10},
        {'Nombre':'Lavadora','Precio':5000,'Cantidad':11}
    ],
    'Electronicos':[
        {'Nombre':'Computadora','Precio':40000,'Cantidad':2},
        {'Nombre':'Television','Precio':15000,'Cantidad':60}
    ]
}
productos.Electronicos.push({'Nombre':'DVD','Precio':100,'Cantidad':70});

function agregaLineaTabla(producto){
    let linea=document.createElement('tr');
    let Nombre=document.createElement('td');
    let Precio=document.createElement('td');
    let Cantidad=document.createElement('td');

    Nombre.textContent=producto.Nombre;
    Precio.textContent=producto.Precio;
    Cantidad.textContent=producto.Cantidad;
    
    linea.appendChild(Nombre);
    linea.appendChild(Precio);
    linea.appendChild(Cantidad);

    document.getElementsByTagName('tbody')[0].appendChild(linea);
}

let inventario=0;
for(let i=0;i<productos.Electronicos.length;i++){
    let producto=productos.Electronicos[i];
    inventario+=producto.Precio*producto.Cantidad;

  agregaLineaTabla(producto);  
}

for(let i=0;i<productos.Linea_blanca.length;i++){
    inventario+=productos.Linea_blanca[i].Precio*productos.Linea_blanca[i].Cantidad;

    let producto=productos.Linea_blanca[i];
    agregaLineaTabla(producto);
}


console.log(inventario);

function holaMUndo(mensaje){
    console.log(mensaje,mensaje.length);
}


holaMUndo('Alan');
holaMUndo('Gis');

