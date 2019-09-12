let empleados = [{
	id: 1,
	nombre: 'Edson'
},{
	id: 2,
	nombre: 'Dante'
},{
	id: 3,
	nombre: 'Magali'
}];

let salarios = [{
	id: 1,
	salario: 1000
},{
	id: 2,
	salario: 2000
}];

let getEmpleado = (id) => {

	return new Promise((resolve, reject)=>{
		let empleadoBD = empleados.find(empleado => empleado.id===id)
		if(!empleadoBD) reject(`No existe el empleado ${id}`);
		else resolve(empleadoBD);
	});

}

let getSalario = (empleado) => {

	return new Promise((resolve, reject) => {

		let salarioBD = salarios.find(salario => salario.id === empleado.id);
		if(!salarioBD) reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
		else 
			resolve({
				nombre: empleado.nombre,
				salario: salarioBD.salario
			});

	});

}


getEmpleado(3).then(empleado => {
	console.log('Empleado de BD',empleado);
	getSalario(empleado).then(salario => {
		console.log(`El salario de ${empleado.nombre} es de ${salario.salario}`);
	}, err => {console.log(err);});
}, err => {console.log(err);});
