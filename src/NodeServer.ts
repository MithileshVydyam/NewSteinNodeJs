import * as express from "express";
import { ReqResLogger } from "./middleWare/ReqResLogger";

function loggerMW(req: express.Request, res: express.Response, next: any) {
  console.log("Start time " + Date.now());
  console.log(req.originalUrl);
  console.log(req.body);
  next();
  console.log(res.statusCode);
  console.log(res.getHeader);
  console.log("Response TIme " + Date.now());

}

function dosMW(req: express.Request, res: express.Response, next: any) {
  res.statusCode = 403;
  res.statusMessage = "Bad Request";
  return res.send();
}



class NodeServer {
  //properties
  private static PORT: number = 8000;
  public app: express.Application;

  //methods
  public constructor() {
    this.app = express();
    this.app.use(loggerMW);
    this.app.use(dosMW);
    this.app.use(ReqResLogger.mw);

    this.app.use('/', (req: express.Request, res: express.Response) => {
      res.send("Hello World!");
    });

    this.app.listen(NodeServer.PORT, () => {
      console.log("server is up & running");
    });
  }

}
let server = new NodeServer();
