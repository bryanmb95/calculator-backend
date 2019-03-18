var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const controleDeUsuarios = require("./calculator");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var array = []

app.get('/', function(req, res) {
    res.send('API bombando');
});


app.post("/somar-numeros", function(req, res) {
    const numeros = req.body.numeros

    const numerosDaSoma = controleDeUsuarios.calcularSoma(numeros)
    res.json(numerosDaSoma);


})

app.post("/subtrair-numeros", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    const subtracao = controleDeUsuarios.calcularSubtracao(num1, num2);

    res.json(subtracao);
})

app.post("/multiplicar-numeros", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    const multiplicar = controleDeUsuarios.calcularMultiplicacao(num1, num2);
    res.json(multiplicar);
})

app.post("/dividir-numeros", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    const dividir = controleDeUsuarios.calcularDivisao(num1, num2);
    res.json(dividir);


})


app.listen(3000);


console.log("Hello World");