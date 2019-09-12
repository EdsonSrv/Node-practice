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

let getEmpleado = (id, callback) => {
	let empleadoBD = empleados.find(empleado => empleado.id===id)
	if(!empleadoBD) callback(`No existe el empleado ${id}`);
	else callback(null, empleadoBD);
}

let getSalario = (empleado, callback) => {
	let salarioBD = salarios.find(salario => salario.id === empleado.id);
	if(!salarioBD) callback(`No se encontró un salario para el empleado ${empleado.nombre}`);
	else 
		callback(null, {
			nombre: empleado.nombre,
			salario: salarioBD.salario
		});
}

getEmpleado(3,(err, empleado)=>{
	if(err) return console.log(err);
	getSalario(empleado,(err,salario)=>{
		if(err) return  console.log(err);
		return console.log(`El salario de ${salario.nombre}, es de ${salario.salario}$`);
	});
});
