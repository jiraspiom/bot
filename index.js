const rodar = require('./app')
const express = require('express')

const status = require('./status')


const path = require('path')
const PORT = process.env.PORT || 5000


//! Para rodar o boot
rodar()

const agendar = require('node-schedule')
let job;
job = agendar.scheduleJob('1 * * * * *', async () => {
  try {
    console.log("rodando ... ...");
    const response = await status()

    if (response.status == 200) {
      console.log("ok", Date())
    } else {
      console.log("nao ok")
    }
  } catch (error) {
    console.log(error)
  }

})

console.log("api ira acessar ela mesmo aqui.")

express()
  .get('/', (req, res) => res.send('<div id="nome">rodando o bot ...</div>'))
  .get('/api', (req, res) => res.json({ bot: "agora roda acessando a si mesmo" }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))

