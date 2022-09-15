const express = require('express')

const app = express();

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    const items = [
        { 
            title: "D" ,
            message: "Desenvolver aplicações/serviços de forma fácil"
        
        },
        {
            title: "E",
            message: "EJS usa JavaScript para renderizar HTML"
        },
        {
            title: "M",
            message: "Letra M"
        },
        {
            title: "A",
            message: "Letra A"
        },
        {
            title: "I",
            message: "letra I"
        },
        {
            title: "S",
            message: "Lerta S"
        },
    ];
    res.render("pages/index", {
        qualities: items
    })
})

app.get('/sobre', (req, res) => {
    res.render("pages/about")
})


app.listen(8080)
console.log("On")