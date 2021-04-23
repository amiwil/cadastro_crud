module.exports.index = function(app, req, res) {
    res.render('home/index');
}

module.exports.auth_user = function(app, req, res) {
    var user = req.body.email;
    var pass = req.body.senha;

    var connection = app.config.dbConnection();
    var dataModel = new app.app.models.AccessDAO(connection);

    dataModel.auth(user, pass, function(error, result) {
        
        if (result[0] != undefined) {
            req.session.auth_pass = true;
            
        }

        if (req.session.auth_pass) {
            res.render('session/search')
        
        } else {
            res.render('home/index')
        
        }
    });
}