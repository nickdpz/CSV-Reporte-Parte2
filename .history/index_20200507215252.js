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

const data = [
    {
        name: 'John',
        surname: 'Snow',
        age: 26,
        gender: 'M'
    }
];


const writeCSV = (data) => {
    csvWriter
        .writeRecords(data)
        .then(() => console.log('El CSV ha sido escrito'));
}



const main=()=>{
    axios.get(`${process.env.URL}`)
    .then((res) => {
        let cash=0;
        for (let value of res.data) {
            if(value.compro){
                cash=cash+value.monto
            }
          }
        console.log(cash);
    })
    .catch((err) => {
        reject({ error: err.message })
    })
}

main()