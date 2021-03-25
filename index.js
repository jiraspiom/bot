const rodarBotTelegram = require('./app')
const elamesmo = require('./acessaSiteHeroku')
const express = require('express')

const path = require('path')
const PORT = process.env.PORT || 5000

//! Para rodar o boot @*******
rodarBotTelegram()

//acessando ela mesmo...
elamesmo()

console.log("api ira acessar ela mesmo aqui.")

express()
  .get('/', (req, res) => res.send('<div id="nome">rodando o bot ...</div>'))
  .get('/api', (req, res) => res.json({ bot: "agora roda acessando a si mesmo" }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))

