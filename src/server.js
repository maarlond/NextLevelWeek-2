// Servidor
const express = require('express')
const server = express()
const { 
    pageLanding, 
    pageStudy, 
    pageGiveClasses, 
    saveClasses
 } = require('./pages')

// configurar nunjucks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure('src/views', {
    express: server,
    noCache: true, // cache -> guardar arquivos em memórias
})

// Inicio e configuração do servidor
server

// receber os dados do req.body
.use(express.urlencoded({ extended: true }))

// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public")) // static

// Rotas da minha aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

// start do servidor
.listen(5500) // Create a server that listens on port 8080 of your computer.
