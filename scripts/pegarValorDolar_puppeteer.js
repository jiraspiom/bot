const puppeteer = require('puppeteer')

async function PegarValorDolar(){
	const browser = await puppeteer.launch({ headless: true });
	const page = await browser.newPage();
	// const moedaBase = readlineSync.question('Informe uma moeda base: ') || 'dolar';
	const moedaBase = 'dolar';
	// const moedaFinal = readlineSync.question('Informe uma moeda desejada:') || 'real';
	const moedaFinal = 'real';

	const qualquerUrl = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome.0.69i59j0l7.1726j0j4&sourceid=chrome&ie=UTF-8`;
	await page.goto(qualquerUrl);

	const resultado = await page.evaluate(() => {
		return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
	});

	let texto = `O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`

	await browser.close(texto);
	console.log('rodado - PegarValorDolar')
	return {resultado, texto}
}

module.exports = PegarValorDolar