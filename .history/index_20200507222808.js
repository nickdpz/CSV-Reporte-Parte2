require('dotenv').config(); //configuracion de variables de entorno
const axios = require('axios')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'report.csv',
    header: [
        { id: 'date', title: 'Fecha' },
        { id: 'cash', title: 'Monto' },
    ]
});

const writeCSV = (data) => {
    csvWriter
        .writeRecords(data)
        .then(() => console.log('El CSV ha sido escrito'));
}

const main=()=>{
    axios.get(`${process.env.URL}`)
    .then((res) => {
        let total=0;

        for (let value of res.data) {//revisa si fue una venta
            if(value.compro){
                total=total+value.monto // si fue una venta acumula con lo del dia
            }
          }
        writeCSV({
            date: '',
            cash: total,
        })
    })
    .catch((err) => {
        reject({ error: err.message })
    })
}

main()