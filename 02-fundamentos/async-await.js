//let getNombre = async() => {
//  throw new Error('No se encontró el nombre');
//  return 'Edson';
//}

let getNombre = () =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Edson');
    }, 3000);
  });
}

let saludo = async() => {
  let nombre = await getNombre();
  return `Hola ${nombre}`;
}

//console.log(getNombre());

//getNombre().then(nombre => {
//  console.log(nombre)
//}).catch(e => {
//  console.log('ASYNC', e);
//});

saludo().then(mensaje => {
  console.log(mensaje);
});
