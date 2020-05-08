const axios = require('axios')
axios.get(`${process.env._URL}`)
        .then((res) => {
        })
        .catch((err) => {
            reject({error:err.message})
        })