function cambiarAtributo(){
	var color=document.getElementById("cambia_estilo").value;
	var estilo=document.getElementsByTagName("style");
	estilo[0].style.background-color=color;
}