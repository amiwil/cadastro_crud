module.exports = function(app){
    app.get('/signup', function(req,res){
        res.render('admin/signup');
    });

    app.post('/signup/save', function(req,res){
        var user = req.body;

        var connection = app.config.dbConnection();
        var dataModel = new app.app.models.AccessDAO(connection);

        dataModel.addUser(user, function(error, result){
            res.redirect('/home');
        });
    });
}