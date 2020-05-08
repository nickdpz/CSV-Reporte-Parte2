
const axios = require('axios')
const fs = require('fs');
const csv = require('csv-parse');
const parseador = csv({
    delimiter: ',',//Delimitador, por defecto es la coma ,
    cast: true, // Intentar convertir las cadenas a tipos nativos
    comment: '#' // El carácter con el que comienzan las líneas de los comentarios, en caso de existir
});
const writeCSV=()=>{

}

axios.get(`${process.env.URL}`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            reject({error:err.message})
        })