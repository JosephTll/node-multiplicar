const fs = require('fs');

const crearArchivo = (base, limite)=>{
    return new Promise((resolve, reject)=>{

        if(!Number(base) && !Number(limite)){
            reject(`La base y el limite introducidos no son numeros`);
            return;
        }

        if(!Number(base)){
            reject(`La base introducida ${base} no es un numero`);
            return;
        }

        if(!Number(limite)){
            reject(`El limite introducido ${limite} no es un numero`);
            return;
        }

        let data = '';
        for(let i=1; i<=limite; i++){
            data += `${base} * ${i} = ${base*i} \n`;
        }
        fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err)=>{
            if(err) reject(err);
            else resolve(`tabla-${base}-al-${limite}.txt`);
        })
    })
}

module.exports = {
    crearArchivo
}