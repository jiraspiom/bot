const schedule = require('node-schedule');
const status_site = require('./status_site') //e onde ela acessa ela mesmo

const regra = require('./geradorRegra')

const sites = [
	{
		nome: 'bot-jiraspiom',
		url: 'https://bot-jiraspiom.herokuapp.com/'
	},
	{
		nome: 'pomodoro',
		url: 'https://anfinance.herokuapp.com/'
	}
]

function elaMesmoAleatoriamente() {
	schedule.scheduleJob(regra(), () => {
		try {
			// para usar o foreach foi comentado tudo abaixo
			// const response = status_site(site.url)
			// if (response.status == 200) {
			// 	console.log(`Ok o site ${site.nome}`, Date())
			// } else {
			// 	console.log(`eita preula, caiu o site! ${site.nome}`, Date())
			// }

			sites.forEach(site => {
				console.log(`Acessando os sites na heroku ... ${site.nome} ... :D`);
				status_site(site.url).then(x => {
					if (x.status == 200) {
						console.log(`Ok - ${site.nome}`, Date())
					} else {
						console.log(`eita preula, caiu o site! ${site.nome}`, Date())
					}
				})
			});

		} catch (error) {
			console.log(error)
		}
	})
}

module.exports = elaMesmoAleatoriamente