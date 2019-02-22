
//tras cargar la pagina
window.onload = function() {
	pantalla = document.getElementById("pantalla"); // pantalla de salida de texto
}

//variables
x ="0"; //Guarda el numero en pantalla
mostrar = 1; //Iniciar numero en pantalla 1 es si y 0 es no
coma = 0; // tiene decimales cero es no y uno e si

numI = 0; //Numero en espera
operacion="no"; // operacion en curso

//Visualizar número 
function mostrarNumero(val) {
	if (x == "0" || mostrar == 1) {
		x = val;
		pantalla.innerHTML = x;
		if (val == ".") {
			pantalla.innerHTML = "0.";
			x = val;
			coma = 1;
		}
	}
	else {
		if (val == "." && coma == 0) {
			pantalla.innerHTML += val;
			x += val;
			coma = 1;
		}
		else if (val == "." && coma == 1) { }
		else {
		pantalla.innerHTML += val;
		x += val;
		}
	}
	
	mostrar = 0;
}

//Hacer operaciones
function calcular(s) {
	igualar(); //Esto hace que encadene operaciones
	numI = x;
	operacion = s;
	mostrar = 1;
}
//Boton igual
function igualar() {
	if (operacion == "no") {
		pantalla.innerHTML = x;
	}
	else {
		sl = numI + operacion + x;
		sol = eval(sl)
		pantalla.innerHTML = sol;
		x = sol;
		operacion = "no";
		mostrar = 1;
	}
}

//Raiz cuadrada
function raiz() {
	x = Math.sqrt(x);
	pantalla.innerHTML = x;
	operacion = "no";
	mostrar = 1;
}

//Porcentaje
function porcentaje(){
	x = x / 100;
	pantalla.innerHTML = x;
	igualar();
	mostrar = 1;
}

//retroceso
function retroceso() {
	cifras = x.length;
	ultimoC = x.substring(cifras-1 , cifras);
	x = x.substring(0,cifras-1);
	if (x == "") {x = "0"};
	if (ultimoC == ".") {coma = 0;}
	pantalla.innerHTML = x;
}

//Borrar todo
function borrarTodo() {
	pantalla.innerHTML = 0;
	x = "0";
	coma = 0;
	numI = 0;
	operacion = "no";
	
}

//Pasar de euros a otras monedas

euros = document.getElementById("euro").value;












