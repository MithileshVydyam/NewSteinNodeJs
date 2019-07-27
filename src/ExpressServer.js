"use strict";
exports.__esModule = true;
var express = require("express");
var ExpressApp = /** @class */ (function () {
    function ExpressApp() {
        this.app = express();
        this.app.listen(3000, 'localhost', function (req, res) {
            console.log("server is started");
        });
    }
    return ExpressApp;
}());
var myApp = new ExpressApp();
myApp.app.post('/api/post', function (req, res) {
    console.log("url in post is ", req.url);
    res.send("server is running and accepted api post");
});
myApp.app.get('/getAllTodo', function (req, res) {
    console.log("url in get is ", req.url);
    res.send("server is running and accepted get");
});
myApp.app.get('/getTodoById/:todoId/user/:userId', function (req, res) {
    console.log(req.params);
    //res.send("todoId is " + req.param('todoId') + " and userId is " + req.param('userId'));
    res.json({ todoId: req.param('todoId'), userId: req.param('userId') });
});
myApp.app.use('/', function (req, res) {
    console.log(req.method);
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    res.end("passed");
});
