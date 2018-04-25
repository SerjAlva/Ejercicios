function agregar(){
	var nuevo=document.getElementById("ingresar").value;
	var li=document.createElement("li");
	li.id="nuevoLi";
	li.innerHTML=nuevo;
	document.getElementById("lista").appendChild(li);
}
