//TRAGA-MONEDAS
const premioTotal = 2500;
const casilla = 10;
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //posibles valores de los aciertos

function tirarPalanca() {
    return valores[Math.floor(Math.random() * 10)]; //Devuelve un elemento del array en una posicion random
}

function calcular(aciertos) {
    let acumulador = 0;
    for (let i = 0; i < aciertos; i++) { //Tiramos la palanca una cantidas = a los aciertos ingresados

        acumulador += tirarPalanca();

        console.log(acumulador);

    }
    return ((premioTotal / (100)) * acumulador) //Devuelve un valor proporcional del premio
}
console.log("TRAGA-MONEDAS");
console.log(calcular(4));
console.log("\n");
//LOTERIA
let suenioUsuario = prompt("Con que soñaste?😳");
alert("FELICIDADES SONÑASTE CON " + suenioUsuario);

function resultadoLoteria() {
    let premio = Math.round(Math.random() * (3 - 0) + 0);
    const premios = [1000, 10000, 10000, 100000]
    alert("FELICIDADES! GANASTE $" + premios[premio])
};

//RULETA
const tamanioRuleta = 25;
const ruleta = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numGanador = Math.floor(Math.random() * 10)
let cantVueltas = Math.floor(Math.random() * 3 + 1);
console.log(cantVueltas);
console.log(numGanador);

function tirarRuleta() {

    while (cantVueltas > 0) {
        for (let i = 0; i < ruleta.length; i++) {
            console.log(ruleta[i]);
        }
        cantVueltas--
    }

    for (let i = 0; i < numGanador; i++) {
        console.log(ruleta[i]);
    }
}
console.log("RULETA");
tirarRuleta();

// PARTE B
var numero = 20;
while (numero > 0) {
    resto = numero % 10;
    numero = parseInt(numero / 10);
    console.log(resto);
}
// A | Mientras el número sea menor a 20, parsea la división de ese número / 10 y
// muestra el resultado del cálculo por consola.
// B | Es un bucle infinito en el que se imprime el resto de 20 / 10 indefinidamente.
// C | Ejecuta una división en la que, mientras el número ingresado sea mayor a 0,
//     imprimirá por consola el valor del resto.***CORRECTA***

function aleatorio(minimo, maximo) {
    return Math.round(Math.random() * (maximo - minimo) + minimo);
}
aleatorio(4, 9);

// A | Redondea el resultado de una ecuación que toma un número aleatorio
// calculando como parámetros un mínimo 4 y máximo 9.***CORRECTO***
// B | Crea una función con 2 parámetros y retorna un número entero negativo.
// C | Los argumentos 4 y 9 se toman de referencia para elegir un número al azar
// decimal con el método math.random.