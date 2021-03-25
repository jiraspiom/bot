const rodar = require('./app')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

rodar()

express()
  .get('/', (req, res) => res.send('rodando o bot ...'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

