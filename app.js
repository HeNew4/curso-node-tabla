const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yags');

console.clear();

crearArchivo(argv.b, argv.l, argv.m)
   .then( nombreArchivo => console.log(nombreArchivo))
   .catch(err => console.log(err));
