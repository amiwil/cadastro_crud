function AccessDAO(connection) {
    this._connection = connection;
}

AccessDAO.prototype.getResult = function(nome, callback){ //Função responsável por retornar buscas específicas no BD
    this._connection.query(`SELECT * FROM usuario WHERE LOCATE('${nome}', usuario.nome);`, callback);
}

AccessDAO.prototype.addUser = function(user, callback){ //Função responsável por adicionar usuários no BD
    this._connection.query('INSERT INTO usuario SET ?', user, callback);
}

module.exports = function(){
    return AccessDAO;
}