# test-javascript-platzi
<h1>Variables y operaciones</h1>
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

    ¿Qué es una variable y para qué sirve?
        Es un espacio en memoria identificado por un nombre único con la capacidad de almacenar algún valor.
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

