
const axios = require('axios')
const fs = require('fs');
const csv = require('csv-parse');

const writeCSV=()=>{

}

axios.get(`${process.env.URL}`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            reject({error:err.message})
        })