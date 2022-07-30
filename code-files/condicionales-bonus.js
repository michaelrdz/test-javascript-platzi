/*💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar 
este comportamiento con arrays u objetos y un solo condicional. 😏 */

//Solución utilizando un objeto que guarde los mensajes posibles.

const tipoDeSuscripcion = "Basic";

let cuentas = {
    "Free" : "Solo puedes tomar los cursos gratis",
    "Basic" : "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Expert" : "Puedes tomar casi todos los cursos de Platzi durante un año",
}

if( cuentas[tipoDeSuscripcion] != undefined){
    console.log(cuentas[tipoDeSuscripcion]);
}
