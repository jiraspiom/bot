const cheerio = require('cheerio')
const { api } = require('../api/api_axios')


const url = 'https://www.google.com/search?q=dolar+para+real&oq=dolar+para+real&aqs=chrome.0.69i59j0l7.1726j0j4&sourceid=chrome&ie=UTF-8'
//'.a61j6.vk_gy.vk_sh.Hg3mWc'
function google() {

    api.get(url).then(response => {

        // var seletor = cheerio.load(`<html><body><p class="bless Me">HI</p> <div class="bless Me">Tudo bem </div></body></html>`)
        var seletor = cheerio.load(response.data)
        // var pr = seletor('.BNeawe.iBp4i.AP7Wnd').val();
        // var pp = seletor('.BNeawe.iBp4i.AP7Wnd').attr('name');
        // console.log(pr)
        // console.log(pp);

        const resultado = seletor("body").find('.BNeawe.iBp4i.AP7Wnd')
        console.log(resultado[1].childNodes[0].data)

        // console.log(resultado.length)

        // resultado.map(function(num){ 
        //     return num.json()
        // })

        // const deals = resultado
        // .map((idx, el) => {
        //   const elementSelector = selector(el);
        //   return extractDeal(elementSelector);
        // })
        // .get();

    }).catch(erro => {
        console.log("deu erro", erro)
    })

}

// const $ = cheerio.load('<h2 class="title" value="vaidade">Hello world</h2>')
// const $ = cheerio.load('<input class="a61j6 vk_gy vk_sh Hg3mWc" value="5.75" aria-label="Campo do montante da moeda" type="number" jsaction="input:trigger.Wtqxqe" data-ved="2ahUKEwi5yq-_2c7vAhX2ILkGHdJpCCUQwKsBegQIBRAF">')
// const titleText = $('h2.title').text();
// const $ = cheerio.load('<input class="title tes" value="vaidade">Hello world</input>')
// const titleText = $(".title.tes").text()
// console.log(titleText);


// const html = `<div class="RiP" style="text-align: left;"><div class="clr"></div><input name="extraMP" value="999" type="hidden"><div class="txta dropError">Slide to activate</div><div class="bgSlider"><div class="Slider ui-draggable"></div></div><div class="clr"></div><input class="a61j6 vk_gy vk_sh Hg3mWc" name="randomValue" value="randomValue2" type="hidden"></div>`

// const htmm = '<input class="a61j6 vk_gy vk_sh Hg3mWc" value="5.75" aria-label="Campo do montante da moeda" type="number" jsaction="input:trigger.Wtqxqe" data-ved="2ahUKEwi5yq-_2c7vAhX2ILkGHdJpCCUQwKsBegQIBRAF">'


// const $ = cheerio.load(htmm);

// var pr = $('.a61j6.vk_gy.vk_sh.Hg3mWc').val(); // randomValue2
// var pp = $('.a61j6.vk_gy.vk_sh.Hg3mWc').attr('name'); // randomValue
// console.log(pr);
// console.log(pp);


// async function fetchHTML(valor) {
//     const { data } = await api.get(valor)
//     return cheerio.load(data)
//   }

// const $ = fetchHTML(url)

// $.then(x => {
//     console.log(x);
//     console.log(x('.a61j6 vk_gy vk_sh.Hg3mWc').val())
//     console.log(x('.a61j6 vk_gy vk_sh.Hg3mWc').attr('name'))
//     console.log(x('.a61j6 vk_gy vk_sh.Hg3mWc').attr('value'))
//     const jogador = x(this).find('.a61j6').length
//     console.log(jogador);

// })

module.exports = google;
