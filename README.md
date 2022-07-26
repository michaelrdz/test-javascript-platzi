# test-javascript-platzi
<h1>Variables y operaciones</h1>
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

<h1>Funciones</h1>

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

