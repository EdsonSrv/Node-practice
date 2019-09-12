let deadpool = {
	nombre: 'Wade',
	poder: 'Regeneración',
	descripcion: function(){
		return `${this.nombre} - Poder ${this.poder}`
	}
}

//let nombre = deadpool.nombre;
//let poder = deadpool.poder;

let {nombre: nombreReal, poder} = deadpool;
console.log(nombreReal, poder);
