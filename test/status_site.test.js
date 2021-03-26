
const status_site = require('../status_site'); //1
const acessarSiteHeroku = require('../acessaSiteHeroku'); //2
const funcaoPegarValorDolar = require('../scripts/pegarValorDolar'); //3

// 1
// let url = 'https://bot-jiraspiom.herokuapp.com/'
// let url2 = 'https://www.google.com/'
// status_site(url).then(x => console.log(x.status))

// 2
// acessarSiteHeroku()

// 3

async function valor(){
    await funcaoPegarValorDolar().then(x => {
        console.log(x.resultado);
    })
}

valor()