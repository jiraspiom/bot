const puppeteer = require('puppeteer')

async function funcaoPegar() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const qualquerUrl = 'https://www.bet365.com/#/IP/EV15585979992C1'
    await page.goto(qualquerUrl);
  
    const resultado = await page.evaluate(()=>{
        return document.querySelector('[class="ml1-SoccerClock_Clock "]').innerText
    })
    console.log(`resultado: ${resultado}`)
    await browser.close();
}

module.exports = funcaoPegar
