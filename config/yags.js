const argv = require('yargs')
   .option('b', {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Es el numero que se va a multiplicar'
   })
   .option('l', {
      alias: 'listar',
      type: 'boolean',
      default: false,
      describe: 'Muestra la tabla de multiplicar'
   })
   .option('m', {
      alias: 'multi',
      type: 'number',
      describe: 'Este multiplicara la base'
   })
   .check((argv, options) => {
      if (isNaN(argv.b)) {
         throw 'La base es un string';
      } else {
         return true;
      }
   })
   .argv;

module.exports = argv;