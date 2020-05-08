const axios = require('axios')
const fs = require('fs');
const csv = require('csv-parse');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'report.csv',
  header: [
    {id: 'date', title: 'Fecha'},
    {id: 'cash', title: 'Monto'},
  ]
});

const data = [
  {
    name: 'John',
    surname: 'Snow',
    age: 26,
    gender: 'M'
  }, {
    name: 'Clair',
    surname: 'White',
    age: 33,
    gender: 'F',
  }, {
    name: 'Fancy',
    surname: 'Brown',
    age: 78,
    gender: 'F'
  }
];


const writeCSV=()=>{
    csvWriter
  .writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));
}

axios.get(`${process.env.URL}`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            reject({error:err.message})
        })