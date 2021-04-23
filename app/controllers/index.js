module.exports.index = function(app, req, res) {
    res.render('home/index');
}

module.exports.auth_user = function(app, req, res) {
    var user = req.body.email;
    var pass = req.body.senha;

    var connection = app.config.dbConnection();
    var dataModel = new app.app.models.AccessDAO(connection);

    dataModel.auth(user, pass, function(error, result) {
        
        if (result[0] != undefined) { //Caso a busca retorne um resultado que não seja indefinido
            req.session.auth_pass = true; //Cria uma sessao valida

            req.session.name = result[0].nome; //Variavel de sessao, responsavel por resgatar o nome do usuario
            req.session.email = result[0].email;
        }

        if (req.session.auth_pass) { //Caso a sessao seja valida, segue para a proxima pagina
            res.render('session/search')
        
        } else {
            res.render('home/index')
        
        }
    });
}