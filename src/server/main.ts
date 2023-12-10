import { Router, Request, Response } from "express";

class MainRouter {
  public readonly router: Router;
  constructor() {
    this.router = Router();
    this.router.get("/", this.MainController);
  }
  private async MainController(req: Request, res: Response) {
    res.json({
      result: "hello, world!",
    });
  }
}

const router = new MainRouter();
module.exports = router.router;
