const fs = require('fs');
const colors = require('colors')

const crearArchivo =  async (numero = 5, listar = false, multi = 10) => {
   try {
      
      let salida = ''
      let consola = ''

      for(let i = 1; i <= multi; i++) {
         salida += `${numero} x ${i} =  ${numero * i}\n`;
         consola += colors.yellow(`${colors.cyan(numero)} x ${colors.blue(i)} =  ${colors.bold.blue(numero * i)}\n`);
      }

      fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);

      if(listar) {
         console.log('==================='.magenta)
         console.log(`    Tabla del ${colors.cyan(numero)}    `)
         console.log('==================='.magenta)
         
         console.log(consola);
         
         
      }

      return `tabla-${numero}.txt creada`.green;

      
   } catch (error) {
      throw colors.red(error)
   }
}

module.exports = {
   crearArchivo
}