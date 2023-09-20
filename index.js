const express = require("express")

const app = express()

app.get ('/', (req, res)=>{
    res.sendFile('./statics/index.html', {
        root: __dirname
    })
})

app.get ('/products', (req, res)=>{
    res.sendFile('./statics/products.html', {
        root: __dirname
    })
})

app.get ('/clients', (req, res)=>{
    res.sendFile('./statics/clients.html', {
        root: __dirname
    })
})

app.listen(9000)
console.log(`SERVIDOR EN EL PUERTO ${9000}`)