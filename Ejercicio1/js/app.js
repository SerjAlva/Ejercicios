var opciones = ["piedra", "papel", "tijera"];
var ganador = "gana el ";
var usuario = prompt("¿piedra papel o tijera?", "todo en minusculas pls v:");
//document.getElementById("usuario").innerHTML+=usuario;
var ordenador = (Math.round(Math.random()*(2-0)+0));
//document.getElementById("ordenador").innerHTML+=opciones[ordenador];
switch (usuario) {
	case "piedra":
		switch (ordenador) {
			case 0:
				ganador = "Hay un empate!";
				break;
			case 1:
				ganador += "ordenador :v";
				break;
			case 2:
				ganador += "usuario :'v";
				break;
		}
		break;
	case "papel":
		switch (ordenador) {
			case 0:
				ganador += "usuario :'v";
				break;
			case 1:
				ganador = "Hay un empate!";
				break;
			case 2:
				ganador += "ordenador :v";
				break;
		}
		break;
	case "tijera":
		switch (ordenador) {
			case 0:
				ganador += "usuario :'v";
				break;
			case 1:
				ganador += "ordenador :v";			
				break;
			case 2:
				ganador = "Hay un empate!";
				break;
		}
		break;
	default:
		ganador = "Opción invalida";
		break;
}
alert(ganador);