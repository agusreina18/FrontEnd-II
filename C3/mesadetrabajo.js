let array= [1, 2, 4, 8];

console.log(array);
let acumulador= array[0];
console.log(acumulador);

for (let i= 0; i < array.length ; i++) {
    acumulador += array[i+1];
    console.log(acumulador);
    
}

