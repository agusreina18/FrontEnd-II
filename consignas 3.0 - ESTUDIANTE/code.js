/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
 datosPersona.nombre = prompt("Ingresa tu nombre:");
 datosPersona.edad = 2021- prompt("Ingresa tu año de nacimiento:");
 datosPersona.ciudad = prompt("Ingresa tu ciudad de origen:");
 datosPersona.interesPorJs = confirm("Te interesa el JS?");

 console.log(datosPersona);


}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let items = document.querySelectorAll('span');
  items[0].innerHTML += datosPersona.nombre;
  items[1].innerHTML += datosPersona.edad;
  items[2].innerHTML += datosPersona.ciudad;
  items[3].innerHTML += datosPersona.interesPorJs ? "Si":"No"; 


}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  var contenedor = document.querySelector('#fila');
  listado.forEach(tarjeta => {
   contenedor.innerHTML += `<div class="caja">
   <img src= ${tarjeta.imgUrl} alt="${tarjeta.lenguajes}>
   <p class= "lenguajes">${tarjeta.lenguajes}</p>
   <p class= "bimestre">${tarjeta.bimestre}</p>
 </div>`;
   
});
 materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas);


}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let modoOscuro = document.querySelector('#sitio');
  modoOscuro.classList.toggle('dark')
  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
let oculto = document.querySelector('.oculto');
document.addEventListener('keyup', function (event) {
    console.log('Presiono lo tecla: '+ event.key);
    if(event.key ==="f"){
        oculto.classList.remove('oculto')
    }
})
