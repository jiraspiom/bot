const schedule = require('node-schedule');

function funcaoGerar() {
    const rule = new schedule.RecurrenceRule();

    var numero1 = Math.floor(Math.random() * 10) + 10
    var numero2 = Math.floor(Math.random() * 10) + 30
    var numero3 = Math.floor(Math.random() * 10) + 50

    rule.minute = [numero1, numero2, numero3]

    console.log(`gerado o tempo que sera usado para acessar o site... ${numero1} ${numero2} ${numero3}`)
    return rule
}

module.exports = funcaoGerar