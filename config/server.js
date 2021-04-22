//Módulo responsável pela configuração do servidor

var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views'); //Especifica nossas views

app.use(express.static('./app/public')); //Reconhece o diretorio de arquivos externos, como scripts, imagens, etc
app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include('app/routes') //Reconhece todos os arquivos presentes na pasta routes
    .then('config/dbConnection.js') //Reconhece o arquivo específico para configuração de conexão com o banco de dados
    .then('app/models') //Reconhece todos os models sendo utilizados
    .then('app/controllers') //Reconhece todos os controllers sendo utilizados
    .into(app); 

module.exports = app;