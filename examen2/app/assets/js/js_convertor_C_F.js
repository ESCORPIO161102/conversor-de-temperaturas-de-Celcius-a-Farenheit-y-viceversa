window.addEventListener("load", inicio);

function inicio (){
document.querySelector("#btn").addEventListener("click", mostrarEjercicio);
}

function algoritmo()
{
	let opcion;
	let resultado, temperatura;
	temperatura = parseFloat (document.formulario1.temperatura.value);
	opcion = parseInt (document.formulario1.opcion.value);
	if(opcion==1)
		resultado=(temperatura-32)/1.8;
	else
		resultado=1.8*temperatura+32;
	document.formulario1.resultado.value = resultado;
}