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
        .then(() => console.log('The CSV file was written successfully'));
}



const main=()=>{
    axios.get(`${process.env.URL}`)
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        reject({ error: err.message })
    })
}

main()