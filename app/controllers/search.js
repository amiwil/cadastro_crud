module.exports.search_page = function(app, req, res) {

    if(req.session.auth_pass) { //Caso o usuario seja validado...
        res.render('session/search');
    
    } else {
        res.send('Credenciais inválidas! Faça login!')
    }
}

module.exports.show_results = function(app, req, res) {
    var nome = req.body.nome;

    var connection = app.config.dbConnection();
    var dataModel = new app.app.models.AccessDAO(connection);

    dataModel.getResult(nome, function(error, result){
        res.render('session/search', {usuarios : result})     
    });
}