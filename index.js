const rodar = require('./app')
const express = require('express')
// const agendar = require('node-schedule')
const path = require('path')
const PORT = process.env.PORT || 5000

// let job;


// job = agendar.scheduleJob('* * * * * *', ()=>{
//   console.log("rodando ...");
// })


//! Para rodar o boot
rodar()

express()
  .get('/', (req, res) => res.send('rodando o bot ...'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

