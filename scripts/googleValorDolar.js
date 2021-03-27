const cheerio = require('cheerio')
const { api } = require('../api/api_axios')

// const url = 'https://www.google.com/search?q=dolar+para+real&oq=dolar+para+real&aqs=chrome.0.69i59j0l7.1726j0j4&sourceid=chrome&ie=UTF-8'

// var google = api.get(url).then(response => {

//   var seletor = cheerio.load(response.data)

//   const resultado = seletor("body").find('.BNeawe.iBp4i.AP7Wnd')

//   console.log('rodado - googleValorDolar')

//   return resultado[1].childNodes[0].data

// }).catch(erro => {
//   console.log("deu erro", erro)
// })


async function PegarValorDolar(moedaBase) {
  // const moedaBase = moedaBase;
  const moedaFinal = 'real';

  const url = retornaUrl(moedaBase)

  const registro = await api.get(url).then(response => {
    var seletor = cheerio.load(response.data)

    return seletor("body").find('.BNeawe.iBp4i.AP7Wnd')

  }).catch(erro => {
    console.log("deu erro", erro)
  })

  const resultado = registro[1].childNodes[0].data

  let texto = `O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`

  console.log('rodado - googleValorDolar')
  return { resultado, texto }
}

function retornaUrl(moedaBase) {
  return `https://www.google.com/search?q=${moedaBase}+para+real&oq=${moedaBase}+para+real&aqs=chrome.0.69i59j0l7.1726j0j4&sourceid=chrome&ie=UTF-8`
}

module.exports = PegarValorDolar;


