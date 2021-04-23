//Módulo responsável pela configuração do servidor

var express = require('express'); //Importa o módulo do express
var consign = require('consign'); //Importa o módulo do consign
var bodyParser = require('body-parser'); //Importa o módulo do body-parser
var expressSession = require('express-session'); //Importa o módulo do express-session

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views'); //Especifica nossas views

app.use(express.static('./app/public')); //Configura o middleware express.static (nativo do express). Reconhece o diretorio de arquivos externos, como scripts, imagens, etc

app.use(bodyParser.urlencoded({extended: true})); //Configura o middleware body-parser

app.use(expressSession({ //Configura o middleware express-session
    secret: 'web1edjkpsjdfcpwjfpwj', //Segredo do cookie de sessão
    resave: false, //Grava a sessão no servidor apenas uma vez
    saveUninitialized: false //Não cria uma sessão nova caso esta seja modificada
}));

consign() //Usando consign
    .include('app/routes') //Reconhece todos os arquivos presentes na pasta routes
    .then('config/dbConnection.js') //Reconhece o arquivo específico para configuração de conexão com o banco de dados
    .then('app/models') //Reconhece todos os models sendo utilizados
    .then('app/controllers') //Reconhece todos os controllers sendo utilizados
    .into(app); 

module.exports = app;