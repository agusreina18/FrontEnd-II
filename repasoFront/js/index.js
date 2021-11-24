/!------------NODOS------------------/;
let nombre = prompt('Ingrese su nombre');//Pedimos al usuario ingresar el nombre
let header = document.querySelector('header'); //Seleccionando el elemento donde voy a insertar el nodo
let elemento = document.createElement('h1')//Creo el nodo <h1></h1>
let textoElemento= document.createTextNode(nombre)//El texto que va a ir dentro del h1 <h1>${nombre que ingresen}</h1>
elemento.appendChild(textoElemento)// <h1>nombre</h1>
header.appendChild(elemento);

/!-----------------INNER HTML-----------------/;
 document.querySelector('h1').innerHTML += ' bienvenido!';

 /!-------------------STYLES----------------/;
//  let titulo = document.querySelector('h1');
//  titulo.style.color= "red";
//  titulo.style.fontSize = "102px";


/!----------MODO OSCURO ----------------/
function alternaTema() {
    let modoOscuro = document.querySelector('body');
    modoOscuro.classList.toggle('dark')// Funcion como un interruptor , crea y elimina la clase
}

/! --------------PLANTILLAS DE TEXTO Y RENDERIZAR------------/;
let contenedor = document.querySelector('.contenedor');
ciudades.forEach(ciudad =>{
 contenedor.innerHTML += `
 <div class="cards">
 <img src= ${ciudad.imagenes}>
 <h2>${ciudad.titulo}</h2>
 <p>${ciudad.descripcion}</p>
</div>
 `
});

/!---------------------EVENTOS DE MOUSE---------------/;
let btn = document.querySelector('button');
btn.addEventListener('click', function () {
    btn.style.backgroundColor = '#00669f';
    btn.style.color = 'white'
} );

/!---------------- EVENTOS DE TECLADO-------------/;
let input = document.querySelector('input');
input.addEventListener('keyup', function (e) {
    console.log('Presiono lo tecla: '+ e.key);
    if(e.key ==="e"){
        alert('No se permite la e ')
    }
})