import { Request, Response } from "express";
export class ReqResLogger {
  public static mw(req: Request, res: Response, next: any) {
    console.log("Start time " + Date.now());
    console.log(req.originalUrl);
    console.log(req.body);
    next();
    console.log(res.statusCode);
    console.log(res.statusMessage);
    console.log("Response TIme " + Date.now());
  }
}