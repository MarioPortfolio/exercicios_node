const http = require("http")

const server = http.createServer(function(req, resp){
    var resposta = 20

    let html
    if (req.url == "/") {
        html =
        `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Sejá bem-vindo!!!!</h1>
                <p> Insira " /cadastro" ao lado da porta 3001 para acessar o cadastro de cliente.</p>
                <p> Exemplo: http://localhost:3001/ ou <a href="http://localhost:3001/cadastro">Clique aqui</a></p>
                <p> </p>
            </body>
        </html>
        `
    }else if(req.url == "/cadastro"){
        html = 
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Cadastro Cliente </h1>

                    <form action="">
                        <div>
                            <label for="idNome">Nome</label> <br>
                            <input type="text" id="idNome" name="nmNome">
                        </div>
                        <div>
                            <label for="idSalario">Informe sua idade</label> <br>
                            <input type="number" id="idSalario" min="0" step="0.01">
                        </div>
                        <div>
                            <input type="button" value="Capturar" onclick="capturar()">
                            <p> Para voltar <a href="http://localhost:3001/">Clique aqui<a/>
                        </div>
                        <div>
                            <output id="idOut"></output>
                        </div>
                    </form>
                </body>
            </html>
        `
    
    }    
    resp.end(html)
})

server.listen(3001)