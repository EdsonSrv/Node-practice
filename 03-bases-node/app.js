//required types: {node owns, exapnds (install), owners}
const fs = require('fs')
// const fs = require('express') //install
// const fs = require('./fs') //owners

let base = 2
let data = ''
for (let i = 1; i <= 10; i++)
  data += `${base} * ${i} = ${base * i}\n`

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
  if (err) throw err;
  console.log(`El archivo tabla-${base}.txt ha sido creado`);
});