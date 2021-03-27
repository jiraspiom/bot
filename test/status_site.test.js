
const status_site = require('../status_site'); //1
const acessarSiteHeroku = require('../acessaSiteHeroku'); //2
const google = require('../scripts/googleValorDolar'); //3

// 1
// let url = 'https://bot-jiraspiom.herokuapp.com/'
// let url2 = 'https://www.google.com/'
// status_site(url).then(x => console.log(x.status))

// 2
// acessarSiteHeroku()

// 3
// async function valor(){
//     await funcaoPegarValorDolar().then(x => {
//         console.log(x.resultado);
//     })
// }
// valor()

//4
// async function valor(moeda){
//     await funcaoPegarValorDolar(moeda).then(x => {
//         console.log(x.texto);
//     })
// }

// valor('euro')

describe("Testando moedas...", ()=> {
    test("deve retornar o valor do dolar", ()=>{
        return google('dolar').then((res)=> {
            expect(res.resultado).toEqual('5,76 Real brasileiro')
            expect(res.texto).toEqual('O valor de 1 dolar em real é 5,76 Real brasileiro')
        })
    })

    test("deve retornar o valor do libra", ()=>{
        return google('libra').then((res)=> {
            expect(res.resultado).toEqual('7,94 Real brasileiro')
            expect(res.texto).toEqual('O valor de 1 dolar em real é 7,94 Real brasileiro')
        })
    })

    test("deve retornar o valor do euro", ()=>{
        return google('euro').then((res)=> {
            expect(res.resultado).toEqual('6,81 Real brasileiro')
            expect(res.texto).toEqual('O valor de 1 euro em real é 6,81 Real brasileiro')
        })
    })

    test("deve retornar o valor do bitcoin", ()=>{
        return google('bitcoin').then((res)=> {
            expect(res.resultado).toEqual('315.107,63 Real brasileiro')
            expect(res.texto).toEqual('O valor de 1 bitcoin em real é 315.107,63 Real brasileiro')
        })
    })
})


