module.exports.signup_page = function(app, req, res) {
    res.render('admin/signup');
}

module.exports.save_user = function(app, req, res) {
    var user = req.body;

    var connection = app.config.dbConnection();
    var dataModel = new app.app.models.AccessDAO(connection);
    
    dataModel.addUser(user, function(error, result){
        res.redirect('/home');
    });
}