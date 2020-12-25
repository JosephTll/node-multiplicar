const argv = require('yargs')
                    .command('listar', 'Lista en consola la tabla de multiplicar', {
                        base:{
                            demand: true,
                            alias: 'b'
                        },
                        limite:{
                            alias: 'l',
                            default: 10
                        }
                    })
                    .command('crear', 'Crea un archivo de la tabla de multiplicacion', {
                        base:{
                            demand: true,
                            alias: 'b'
                        },
                        limite:{
                            alias: 'l',
                            default: 10
                        }
                    })
                    .help()
                    .argv

module.exports = {
    argv
}