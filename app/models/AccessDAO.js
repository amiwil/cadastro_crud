function AccessDAO(connection) {
    this._connection = connection;
}

AccessDAO.prototype.getResult = function(nome, callback){ //Função responsável por retornar buscas específicas no BD
    this._connection.query(`SELECT * FROM usuario WHERE LOCATE('${nome}', usuario.nome);`, callback);
}

AccessDAO.prototype.addUser = function(user, callback){ //Função responsável por adicionar usuários no BD
    this._connection.query('INSERT INTO usuario SET ?', user, callback);
}

AccessDAO.prototype.auth = function(user, pass, callback) { //Função que busca por um usuario com credenciais específicas
    this._connection.query('SELECT * FROM usuario WHERE usuario.email = ? AND usuario.senha = ?', [user, pass],callback);
}

module.exports = function(){
    return AccessDAO;
}