//ALERT-CONFIRM-PROMPT

// alert("Hola! Mi nombre es Agustina, en qué puedo ayudarte?");

// let confirmacion = confirm("Desea continuar?");
// console.log(confirmacion);

// let peticion= prompt("Cómo puedo ayudarle?");
// console.log(peticion);

//FOR IN

let personaje= {
    nombre: "Luke",
    apellido: "Skywalker",
    edad: 25
}

for(let caracteristica in personaje){
    console.log(personaje[caracteristica])
}

//for of

let series = ["Dr House", "The Big Bang Theory", "Anne with E"];

for (let serie of series){
    console.log(serie);
}