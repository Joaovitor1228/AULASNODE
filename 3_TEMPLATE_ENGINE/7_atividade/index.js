const express = require('express')
const exphbs = require('express-handlebars')
const products = require('./products')
const app = express()
app.use(express.static('public'))


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    const itens = ['item 1', 'item 2', 'item 3']

    res.render('dashboard', { itens })
})
app.get('/product/:id', (req,res) =>{
    const product ={
        title: "aprender handlebars",
        category: "HTML",
        body:"Este produto vai te ajudar aprender handlebars",
        comments:8
    }
    res.render('product', {product})

})
app.get('/post', (req,res) => {
    const post = {
        title: "aprender Node.js",
        category: "JavaScript",
        body:"Este artigo vai te ajudar a aprender Node.js",
        comments:4
    }
    res.render('blogpost', { post })
}) 

app.get('/', (req, res) => {
    const user = {
        name: "Joao vitor",
        age: 20
    }

    const auth = true

    res.render('home', { user, auth })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})