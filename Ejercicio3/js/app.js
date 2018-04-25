function preguntar(){
	var opciones = ["¡Cuenta con ello!", "No cuentes con ello...", "El universo es inpredecible"];
	var destino = Math.round(Math.random()*(2-0)+0);
	document.getElementById("respuesta").innerHTML = opciones[destino];
}