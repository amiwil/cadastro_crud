module.exports = function(app){
    
    app.get('/', function(req,res){
        app.app.controllers.index.index(app, req, res);
    });

    app.post('/auth', function(req,res){
        app.app.controllers.index.auth_user(app, req, res);
    });
}