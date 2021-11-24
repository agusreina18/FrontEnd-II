//plantillas de texto
const nombre = "Agus";
miTemplate = `Mi nombre es ${nombre}`;
console.log(miTemplate);

const myTemplate = `2*3 es ${2*3}`;
console.log(myTemplate);

//contenido dinámico

const template= `<h1> Hola Mundo! </h1>`;

const body = document.getElementById('body');
body.innerText = template;
body.innerHTML= template;
console.log(body);

//ejercicio de práctica de PG sobre contenido dinámico

function escribirHTML(titulo, texto) {
    const body = document.getElementById('body');
    const miPlantilla = `
    <h1>${titulo}</h1>
    <p>${texto}</p>
    `;
    
    body.innerHTML += miPlantilla;
}

escribirHTML(" Escribiendo HTML", "Este es un texto de prueba");

//Modificando Estilos usando style
let confirmacion = confirm("Querés cambiar el color del titulo?");

if(confirmacion = true){
    let titulo = document.querySelector('h1');
    
    titulo.innerHTML += "Soy algo nuevo";

    titulo.style.color = "crimson";
    titulo.style.fontFamily = "Verdana";
}

//Modificando clases

let titulo = document.querySelector('h1');
    
    titulo.innerHTML += "Soy algo nuevo";

    console.log(titulo.classList);
//classList.add
    titulo.classList.add('titulo-destacado');

//classList.remove
let confirmarEliminarClase = confirm('Quiere eliminar la clase del titulo?');

if(confirmarEliminarClase){
    titulo.classList.remove('titulo-destacado');
}

//classList.toggle
// let titulo = document.querySelector('h1');
    
//     titulo.innerHTML += "Soy algo nuevo";

//     console.log(titulo.classList);

//     titulo.classList.toggle('titulo-destacado');




