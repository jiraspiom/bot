const fetch = require('node-fetch');
const cheerio = require('cheerio')

var url = 'https://www.google.com/search?q=dolar+para+real&oq=dolar+para+real&aqs=chrome.0.69i59j0l7.1726j0j4&sourceid=chrome&ie=UTF-8'

// var teste = fetch(url).then((all) =>{

//     let $ = cheerio.load(response.data)

//     console.log('oi tudo bem')
// }).catch(e => {
//     console.log('erro')
// })

fetch(url)
    .then(res => res.text())
    .then(text => {
        let $ = cheerio.load(text)
        var pr = $('.BNeawe iBp4i AP7Wnd').val(); // randomValue2
        var pp = $('.BNeawe iBp4i AP7Wnd').attr('name'); // randomValue
        console.log(text);
        console.log(pr)
        console.log(pp);
    })

    fetch()