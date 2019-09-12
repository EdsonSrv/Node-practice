var nombre = 'Var Puede volver a inicializarse';

if(true){
	let nombre = 'Magneto';//Por el alcance
	console.log(nombre);
}

var nombre = 'Se volvió a inicializar';
let nombre2 = 'Let no puede volver a inicializarse';

console.log(nombre);
