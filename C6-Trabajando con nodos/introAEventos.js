//Sintaxis de eventos
window.onload= function(){
    
}

window.addEventListener("load", function() {
    
})

//La dir¡ferencia entre onload y addEventListener es que en el primero 
//si ejecuto muchas veces el onload, la última pisa al anterior por lo que 
//los primeros eventos no se ejecutarán, mientras que en el segundo no importa 
//la cantidad de ecventos que ejecute, todos se ejecutaran en simultáneo sin pisarse.Es decir
//que permite tener muchas reacciones a un evento mientras que los on no lo permiten.

//Ejemplo PlayGround

window.addEventListener("click", function(){
    let homeButton = document.querySelector(".home-button");
    
    homeButton.addEventListener("click", function() {
        alert("Tocaste el boton!");
    })

    let aboutButton = document.querySelector(".about-button");

    aboutButton.addEventListener("click", function(e){
        e.preventDefault();

        console.log(this);
        alert("quisiste saber sobre el about?");
    })
})