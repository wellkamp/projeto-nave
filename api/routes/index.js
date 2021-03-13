// Ponto de entrada das rotas
const express = require('express')
const navers = require('./naversRoute')
const projects = require('./projectsRoute')

module.exports = app => {
    app.use(
      express.json(),
      navers,
      projects,
      )
    }