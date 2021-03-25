const schedule = require('node-schedule');
const status = require('./status') //e onde ela acessa ela mesmo

const regra = require('./geradorRegra')

function elaMesmoAleatoriamente() {
    let job;
    job = schedule.scheduleJob(regra(), async () => {
        try {
            console.log("Acessando o site na heroku ... ... :D");
            const response = await status()

            if (response.status == 200) {
                console.log("ok", Date())
            } else {
                console.log("ixi o site deve ter caido!")
            }
        } catch (error) {
            console.log(error)
        }
    })
}

module.exports = elaMesmoAleatoriamente