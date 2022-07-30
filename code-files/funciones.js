//Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

/*
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc"
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
*/

function salida(name, lastname, nickname){
    let completeName = name +" "+lastname;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}
salida("Juan David", "Castro Gallego", "juandc");
