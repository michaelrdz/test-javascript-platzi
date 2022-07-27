# test-javascript-platzi
## Variables y operaciones 🛸

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

    ¿Qué es una variable y para qué sirve?
        Espacio en memoria identificado por un nombre único con la capacidad de almacenar algún valor.
    ¿Cuál es la diferencia entre declarar e inicializar una variable?
        Se declara cuando la variable se nombra y se inicializa cuando se le asigna algún valor.
    ¿Cuál es la diferencia entre sumar números y concatenar strings?
        Usando el mismo signo de “más”, los valores numéricos se operan matemáticamente y las 
        cadenas de texto se van agregando haciendo esta más grande en longitud de caracteres.
    ¿Cuál operador me permite sumar o concatenar?
        El signo más, “+”.
    
2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

    Nombre - String
    Apellido - String
    Nombre de usuario en Platzi - String
    Edad - Number
    Correo electrónico - String
    Mayor de edad - Boolean
    Dinero ahorrado - Number
    Deudas - Number

3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

    var name = "Michael";
    var Lastname = "Rodríguez Medina";
    var user = "michaelrdz";
    var age = 29;
    var email = "michaelrdz.me@gmail.com";
    var mayor = true;
    var saving = 65000;
    var debt = 12000;

4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

    //Nombre completo (nombre y apellido):
        var name = "Michael";
        var lastName = "Rodríguez Medina";
        console.log("Nombre completo: "+name+" "+lastname);
    
    //Dinero real (dinero ahorrado menos deudas)
        var saving = 65000;
        var debt = 12000;
        let real = saving - debt; 
        console.log("Dinero real: "+real);

## Funciones 🛸

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

    ¿Qué es una función?
        Bloques de código que realizan una serie de operaciones y devuelven algún resultado.
    ¿Cuándo me sirve usar una función en mi código?
        Cuando el programa repite en varios lugares operaciones que podemos reutilizar.
    ¿Cuál es la diferencia entre parámetros y argumentos de una función?
        Los parámetros son aquellos declarados por su nombre en la función 
        y los argumentos son los valores que enviamos a esta.

2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

    const name = "Juan David";
    const lastname = "Castro Gallego";
    const completeName = name + lastname;
    const nickname = "juandc"
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

Respuesta:

    function salida(name, lastname, nickname){
        var completeName = name +" "+lastname;
        console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
    }
    salida("Juan David", "Castro Gallego", "juandc");

## Condicionales 🛸

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

    ¿Qué es un condicional?
        Una estructura de evaluación que genera dos posibles caminos dependiendo si el resultado obtenido es falso o verdadero.
    ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
        If/else, Switch y operador ternario
    ¿Puedo combinar funciones y condicionales?
        Sí, es posible

2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
    const tipoDeSuscripcion = "Basic";
    
    switch (tipoDeSuscripcion) {
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
    }

Resultado:

    const tipoDeSuscripcion = "Basic";
    
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

3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

    const tipoDeSuscripcion = "Basic";
    var tipoExist = false;

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

💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

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

## Ciclos 🛸

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

    ¿Qué es un ciclo?
        Una estructura iterativa que se repite una y otra vez hasta cumplir una condición dada.
    ¿Qué tipos de ciclos existen en JavaScript?     
        For, while, do while
    ¿Qué es un ciclo infinito y por qué es un problema?
        Sucede cuando no se controla mediante alguna condición valida el fin del ciclo, lo que puede provocar una saturación de memoria.
    ¿Puedo mezclar ciclos y condicionales?
        Sí, es posible.

2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

    for (let i = 0; i < 5; i++) {
        console.log("El valor de i es: " + i);
    }
    
    for (let i = 10; i >= 2; i--) {
        console.log("El valor de i es: " + i);
    }

Respuesta:

    let i = 0;
    
    while(i < 5) {
	    console.log("El valor de i es: " + i);	
	    i++;
    }
    
    let i = 10;
    
    while(i >= 2) {
	    console.log("El valor de i es: " + i);	
	    i--;
    }

3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar. 💡 Pista: puedes usar la función prompt de JavaScript.

    let number = 0;
    let respuesta = false;
    
    while(!respuesta) {
	    var userResp = prompt("¿Cuanto es 2 + 2?");
	    if(userResp == 4){
		    console.log("Correcto!! Felicidades!!! :D");
		    respuesta = true;
	    }
    }

## Listas 🛸

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

    ¿Qué es un array?
        Una colección de datos organizados en forma contigua.
    ¿Qué es un objeto?
        Una colección de datos y funciones que pertenecen de forma concreta al objeto.
    ¿Cuándo es mejor usar objetos o arrays?
        Cuando se tienen listas simples y no relacionadas podemos usar arreglos 
        y cuando la colección es de información concreta que forma parte del objeto 
        y este tiene métodos y funciones además de valores es cuando usamos objetos.
    ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
        Sí para cada caso se especifica como tipo de dato que almacenara en su sección o nivel dado.

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
