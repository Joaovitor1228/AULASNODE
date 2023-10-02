const { urlencoded } = require('express')
const express = require('express')
const app = express()

const path = require('path')
const caminho = path.join(__dirname, 'templates')
app.use(express.urlencoded({
    extend:true
}))
app.use(express.json())

app.use(express.static('public'))

app.post('/users/save', (req, res) => {
    const nome  = req.body.nome
    const idade = req.body.idade
    console.log(`usuario:${nome} Idade:${idade}`)
    res.redirect('/') 
})

app.get('/users/cadastrar', (req, res) => {
    res.sendFile(`${caminho}/usuariosform.html`)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    console.log(`Estamos buscando pelo usuário: ${id}`)
    res.sendFile(`${caminho}/usuarios.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${caminho}/index.html`)
})

app.listen(5000)