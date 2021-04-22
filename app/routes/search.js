module.exports = function(app){
    app.get('/search', function(req,res){
        app.app.controllers.search.search_page(app, req, res);
    });

    app.post('/search/confirm', function(req,res){
        app.app.controllers.search.show_results(app, req, res);
    });
}