require('dotenv/config');

const agendar = require('node-schedule')
const { Telegraf } = require('telegraf')

const google = require('./scripts/googleValorDolar')

let job
let status_job = false
let valor_atual 

const rodar = () => {
	const bot = new Telegraf(process.env.BOT_TOKEN)
	bot.start((ctx) => ctx.reply('Welcome ao bot de teste...'))
	bot.help((ctx) => ctx.reply(`Digite "Ajuda" para visualizar os comandos`))

	bot.on('sticker', (ctx) => ctx.reply('👍'))

	bot.hears('Oi', (ctx) => ctx.reply('E ai?, carinha que mora logo ali!'))
	bot.hears('Jiraspim', (ctx) => ctx.reply('Qualquer coisa?, Qualquer lugar!'))
	bot.hears(/sobre/i, (ctx) => ctx.reply('Este bot é apenas um teste'))

	bot.hears(/bolsonaro/i, (ctx) => ctx.reply('Presitente'))
	bot.hears(/lula/i, (ctx) => ctx.reply('ex-Presidente'))

	bot.hears(/42/i, (ctx) => ctx.reply('A resposta para a vida o universo e tudo mas.'))

	bot.hears(/ping/i, ctx => {
		ctx.reply('Pong!')
	})

	bot.hears(/ajuda/i, ctx => {
		ctx.reply(`--comandos-- \n /ligar - ligar o bot \n /desligar - delisga o bot \n /status - status do ligado o desligado`)
	})

	bot.command('ligar', async (ctx) => {
		try {
			job = agendar.scheduleJob('* * * * * *', async () => {
				console.log("rodando rastreio de dolar...", Date());
				status_job = true
				await google('bitcon').then(valor => {
					valor_atual = valor.resultado
					ctx.reply(`rastreado ligado - R$ \n ${valor.resultado}`)
				}).catch(erro => {
					console.log("erro ao ligar o rastreador");
					console.log(erro)
				})
			})
		} catch (error) {
			console.error(error)
		}
	})

	bot.command('desligar', async (ctx) => {
		try {
			if (job) {
				status_job = false
				await ctx.reply(`desligando rastreado ...`)
				job.cancel()
			} else {
				status_job = false
				await ctx.reply(`desligando rastreado ...`)
				job.cancel()
			}
		} catch (error) {
			console.error(error)
		}
	})

	bot.command('status', async (ctx) => {
		if (status_job) {
			await ctx.reply('rastreador está ligado')
		} else {
			await ctx.reply('rastreador está desligado')
		}
	})


	//* Moedas estão aqui abaixo
	bot.hears(/dolar/i, async ctx => {
		await google('dolar').then(valor => {
			ctx.reply(valor.texto)
		}).catch(erro => {
			console.log('erro ao buscar a funcao dolar', erro)
		})
	})

	bot.hears(/libra/i, async ctx=>{
		await google('libra').then(valor => {
			ctx.reply(valor.texto)
		}).catch(erro =>{
			console.log('erro ao buscar a funcao libra', erro)
		})
	})

	bot.hears(/euro/i, async ctx=>{
		await google('euro').then(valor => {
			ctx.reply(valor.texto)
		}).catch(erro =>{
			console.log('erro ao buscar a funcao euro', erro)
		})
	})

	bot.hears(/bitcoin/i, async ctx=>{
		await google('bitcon').then(valor => {
			ctx.reply(valor.texto)
		}).catch(erro =>{
			console.log('erro ao buscar a funcao bitcon', erro)
		})
	})

	bot.launch()

	// Enable graceful stop
	process.once('SIGINT', () => bot.stop('SIGINT'))
	process.once('SIGTERM', () => bot.stop('SIGTERM'))



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

module.exports = rodar