import * as express from 'express';

class ExpressApp {
  app: express.Application;
  constructor() {
    this.app = express();
    this.app.listen(3000, 'localhost', (req, res) => {
      console.log("server is started");
    });
  }
}

let myApp = new ExpressApp();

myApp.app.post('/api/post', (req, res) => {
  console.log("url in post is ", req.url);
  res.send("server is running and accepted api post");
})
myApp.app.get('/getAllTodo', (req, res) => {
  console.log("url in get is ", req.url);
  res.send("server is running and accepted get");
})

myApp.app.get('/getTodoById/:todoId/user/:userId', (req, res) => {
  console.log(req.params);
  //res.send("todoId is " + req.param('todoId') + " and userId is " + req.param('userId'));
  res.json({ todoId: req.param('todoId'), userId: req.param('userId') })
})

myApp.app.use('/', (req, res) => {
  console.log(req.method);
  console.log(req.params);
  console.log(req.query);
  console.log(req.body);
  res.end("passed")
})
