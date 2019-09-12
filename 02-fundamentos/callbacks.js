//setTimeout(()=>{
//	console.log('Hola Mundo!');
//}, 3000);

let getUserById = (id, callback) => {

	let user = {
		nombre: 'Edson',
		id
	}
	if(id === 20) callback(`El usuario ${id}, no existe`);
	else 
	callback(null,user);
}

getUserById(20, (err, user)=>{
	if(err)
	 return console.log(err);
	console.log('Usuario en base de datos',user);
});
