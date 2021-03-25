const axios = require('axios')

const status = async () => {
    try {
        return await axios.get('https://bot-jiraspiom.herokuapp.com/', { timeout: 30000 })
    } catch(error) {
        return error
    }
}

module.exports = status