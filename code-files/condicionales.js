//Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if: const tipoDeSuscripcion = "Basic";

/*switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
}*/


const tipoDeSuscripcion = "Basic";

//Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if: const tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if(tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if(tipoDeSuscripcion === "Expert") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
else {
    console.log("Tipo de cuenta inválida");
}

//Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

let tipoExist = false;

if(tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
    tipoExist = true;
}
if(tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    tipoExist = true;
}
if(tipoDeSuscripcion === "Expert") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    tipoExist = true;
}
if(tipoExist === false) {
    console.log("Tipo de cuenta inválida");
    tipoExist = true;
}
