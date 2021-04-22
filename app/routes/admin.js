module.exports = function(app){
    app.get('/signup', function(req,res){
        app.app.controllers.admin.signup_page(app, req, res);
    });

    app.post('/signup/save', function(req,res){
        app.app.controllers.admin.save_user(app, req, res);
    });
}