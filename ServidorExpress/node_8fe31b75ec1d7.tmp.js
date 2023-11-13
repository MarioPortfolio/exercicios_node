const express = require("express")

const app = express()

const porta = 3001
app.listen(porta, function() {
    console.log(`Servidor do Mario rodando na porta ${porta}`);

})


app.get("/", function (req, resp) {
    resp.send(
        `<html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Olá Pigmeu!!! </h1>
            </body>
        </html>
        ` 
    )
})
app.get("/livros", function(req, resp){
    resp.send(
        `<html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Listagem de Livros </h1>
            </body>
        </html>
        `   
    )
})

app.get("/livro", function(req, resp){

    const livro = {
        titulo : "Silencio dos inocentes", 
        autor : "Thomas Harris" 
    }

    resp.json(livro)

})