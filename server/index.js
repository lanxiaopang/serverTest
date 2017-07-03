var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials","true");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/', function(req, res){
    res.type('text/plain');
    res.send('Meadowlark Travel');
});
app.post('/wang', function (req, res) {
    setTimeout(function () {
        res.json({
            "name": "WANG",
            "id": "250"
        });
    }, 1400);
});
app.post('/sun', function (req, res) {
    setTimeout(function () {
        res.json({
            "name": "SUN",
            "id": "174"
        });
    }, 800);
});
// 定制 404 页面
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found1');
});
// 定制 500 页面
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});
app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
});