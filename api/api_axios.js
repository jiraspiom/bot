const { default: axios } = require("axios");

// const url = 'https://www.google.com/search?q=dolar+para+real&oq=dolar+para+real&aqs=chrome.0.69i59j0l7.1726j0j4&sourceid=chrome&ie=UTF-8'
const url = 'https://www.google.com'

const api =  axios.create({
    url: url
})

//! url para ser utilizada depois
// const urlprincipal = 'https://www.bet365.com/'
// const diarioapi = 'inplaydiaryapi/schedule?timezone=16&lid=33&zid=0'
// const config = 'defaultapi/sports-configuration'

module.exports = {
    api
};
