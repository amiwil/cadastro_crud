function AccessDAO(connection) {
    this._connection = connection;
}

AccessDAO.prototype.getResults = function(callback){ //Função responsável por retornar buscas no BD
    this._connection.query('SELECT * FROM usuarios', callback);
}

AccessDAO.prototype.addUser = function(user, callback){ //Função responsável por adicionar usuários no BD
    this._connection.query('INSERT INTO usuario SET ?', user, callback);
}

module.exports = function(){
    return AccessDAO;
}