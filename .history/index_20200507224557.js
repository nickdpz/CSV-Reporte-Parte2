require('dotenv').config(); //configuracion de variables de entorno
const axios = require('axios')//
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'report.csv',
    header: [
        { id: 'date', title: 'Fecha' },
        { id: 'cash', title: 'Monto' },
    ]
});//Crea la cabecera del archivo

const dateStart = '2019-12-01'//fecha de inicio
const dateEnd = '2019-12-06'//fecha de fin

const writeCSV = (data) => {
    csvWriter.writeRecords(data)
            .then(() => console.log('El CSV ha sido escrito'));
}//funcion para escribir en consola

const main=()=>{
    axios.get(`${process.env.URL}${dateStart}`)//hace la peticion
    .then((res) => {
        let total=0;
        for (let value of res.data) {//revisa si fue una venta
            if(value.compro){
                total=total+value.monto // si fue una venta acumula con lo del dia
            }
        }
        writeCSV([{//Se tiene que enviar un arreglo
            date: dateStart,
            cash: total,
        }])
    })
    .catch((err) => {
        reject({ error: err.message })
    })
}

main()