const axios = require('axios')

const writeCSV=()=>{

}

axios.get(`${process.env.URL}`)
        .then((res) => {
        })
        .catch((err) => {
            reject({error:err.message})
        })