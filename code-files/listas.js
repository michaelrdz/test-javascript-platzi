//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

let huesos = ["Húmero", "Costilla", "Cubito", "Radio", "Craneo","Peroné"];

function takeArray(miArray){
	console.log("First value: "+ miArray[0]);
	console.log("List of elements: ");
}

takeArray(huesos);

//Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function takeArray(miArray){
	console.log("List of elements: ");
	miArray.forEach(element => console.log(element));
}

takeArray(huesos);

// Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

let mariposas = {
	"Monarca" : "Danaus plexippus",
	"Cebra" : "Heliconius charithonia",
	"reina" : "Danaus gilippus",
	"alas de telaraña" : "Leptotes marina"
}

function takeObject(obj){
	console.log("List of elements: ");
	for (var i in obj) {
		console.log(mariposas[i]);
	}
}

takeObject(mariposas);