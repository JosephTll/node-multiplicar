const {argv} = require('./config/yargs');
const colors = require('colors');
const {crearArchivo} = require('./multiplicar/crearMultiplicacion.js');
const {listar} = require('./multiplicar/listarMultiplicacion');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
                    .then(data => {
                        console.log(`========================`.red)
                        console.log(`Tabla de multiplicacion`.red)
                        console.log(`========================`.red)
                        console.log(data);
                    })
                    .catch(err=>{
                        console.log(err);
                    })
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
                    .then(archivo => {
                        console.log(`Archivo creado: ${archivo}`.green);
                    })
                    .catch(err=>{
                        console.log(err);
                    })
        break;

    default:
        console.log('El comando ingresado no ha sido reconocido');
}