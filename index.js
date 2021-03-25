const rodar = require('./app')
const express = require('express')



const path = require('path')
const PORT = process.env.PORT || 5000

// const agendar = require('node-schedule')
// let job;
// job = agendar.scheduleJob('* * * * * *', ()=>{
//   console.log("rodando ...");
// })

//! Para rodar o boot
rodar()

console.log("api ira acessar ela mesmo aqui.")

express()
  .get('/', (req, res) => res.send('<div id="nome">rodando o bot ...</div>'))
  .get('/api', (req, res)=> res.json({bot: "agora"}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

