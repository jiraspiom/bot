const google = require('./googleValorDolar')

google('dolar').then(res =>{
    console.log(res)
}).catch(erro=>{
    console.log(erro)
})
