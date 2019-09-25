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

let getEmpleado = async (id) => {
	let empleadoBD = empleados.find(empleado => empleado.id===id)
	if(!empleadoBD) throw new Error(`No existe el empleado ${id}`);
	else return empleadoBD;
}

let getSalario = async (empleado) => {
	let salarioBD = salarios.find(salario => salario.id === empleado.id);
	if(!salarioBD) throw new Error(`No se encontró un salario para el empleado ${empleado.nombre}`);
	else
		return {
			nombre: empleado.nombre,
			salario: salarioBD.salario
		};
}

let getInformation = async (id) => {
	let empleado = await getEmpleado(id); 
	let salario = await getSalario(empleado);
	return `${salario.nombre} tiene un salario de $${salario.salario}}`;
}

getInformation(3).then(mensaje => console.log(mensaje)).catch(err=> console.log(err));
