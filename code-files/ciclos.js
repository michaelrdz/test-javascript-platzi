
// Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

/*
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
} */

let i = 0;

while(i < 5) {
    console.log("El valor de i es: " + i);	
    i++;
}

let other_i = 10;

while(other_i >= 2) {
    console.log("El valor de i es: " + i);	
    other_i--;
}

//Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar. 💡 Pista: puedes usar la función prompt de JavaScript.

let number = 0;
let respuesta = false;

while(!respuesta) {
    var userResp = prompt("¿Cuanto es 2 + 2?");
    if(userResp == 4){
	    console.log("Correcto!! Felicidades!!! :D");
	    respuesta = true;
    }
}