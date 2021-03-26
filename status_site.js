const axios = require('axios')

async function validar_status_site(url){
    try {
        return await axios.get(url, { timeout: 30000 })
    } catch(error) {
        return error
    }
}

module.exports = validar_status_site