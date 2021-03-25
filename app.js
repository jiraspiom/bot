require('dotenv/config');

const agendar = require('node-schedule')
const puppeteer = require('puppeteer')
const { Telegraf } = require('telegraf')

const status = require('./status')

//* document.querySelector('[class="ml1-SoccerClock_Clock "]').innerText

let job
let status_job = false

const rodar = () => {
    const bot = new Telegraf(process.env.BOT_TOKEN)
    bot.start((ctx) => ctx.reply('Welcome'))
    bot.help((ctx) => ctx.reply(`Digite "Ajuda" para visualizar os comandos`))

    bot.on('sticker', (ctx) => ctx.reply('👍'))

    bot.hears('Oi', (ctx) => ctx.reply('E ai?, carinha que mora logo ali!'))
    bot.hears(/sobre/i, (ctx) => ctx.reply('Este bot é apenas um teste'))

    bot.hears(/ping/i, ctx => {
        ctx.reply('Pong!')
    })

    bot.hears(/ajuda/i, ctx => {
        ctx.reply(`comandos:
    /ligar - ligar o bot
    /desligar - delisga o bot
    /status - status do ligado o desligado`)
    })

    bot.command('ligar', async (ctx) => {
        try {
            job = agendar.scheduleJob('* * * * * *', async () => {
                console.log("rodando ...");
                status_job = true
                funcaoPegar()
                await ctx.reply(`rastreador ligado...`)
            })
        } catch (error) {
            console.error(error)
        }
    })

    bot.command('desligar', async (ctx) => {
        try {
            if (job) {
                status_job = false
                await ctx.reply(`rastreador desligado...`)
                job.cancel()
                
            }
        } catch (error) {
            console.error(error)
        }
    })

    bot.command('status', async (ctx) => {
        if (status_job){
            await ctx.reply('rastreador esta ligado')
        }else{
            await ctx.reply('rastreador esta desligado')
        }
    })

    bot.launch()

    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'))
    process.once('SIGTERM', () => bot.stop('SIGTERM'))


    // bot.start((ctx) => ctx.reply("Hello world"))


    // bot.command('status', async (ctx) => {

    //     try {
    //         const response = await status()

    //         if (response.status == 200) {
    //             await ctx.reply(`Google service: ✅`)
    //         } else {
    //             await ctx.reply(`Google service: ❌`)
    //         }

    //     } catch(error) {
    //         console.error(error)
    //     }
    // })

    // const startBot = async () => {
    //     try {
    //         await bot.launch()
    //         console.log('Bot started successfully')
    //         process.once('SIGINT', () => bot.stop('SIGINT'))
    //         process.once('SIGTERM', () => bot.stop('SIGTERM'))
    //     } catch(error) {
    //         console.error(error)
    //     }
    // }

    // startBot()
}

const funcaoPegar = async () =>{
    const brower = await puppeteer.launch();
    const page = await brower.newPage();
    await page.goto('https://www.bet365.com/#/IP/EV15585979992C1');
  
    const pageContent = await page.evaluate(()=>{
        return {
            teste: document.querySelector('[class="ml1-SoccerClock_Clock "]').innerText
        }
    })
    console.log('pageCont:', pageContent)
}

module.exports = rodar