//Módulo responsável único e exclusivamente para configuração da conexão com o banco de dados.

var mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexao estabelecida')
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'kalopss',
        password: 'StRKalopss98',
        database: 'web1'
    });
}

module.exports = function(){
    return connMySQL;
}