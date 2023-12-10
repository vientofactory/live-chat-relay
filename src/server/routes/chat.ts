import { Router, Request, Response } from "express";
import { io } from "../..";
import consola from "consola";

class ChatRouter {
  public readonly router: Router;
  constructor() {
    this.router = Router();
    this.router.post("/", this.MainController);
  }
  private async MainController(req: Request, res: Response) {
    try {
      const secret = req.headers["secret"];
      if (!secret || secret !== process.env.SECRET_KEY) {
        return res.sendStatus(403);
      }
      io.emit("message", req.body);
      res.json({
        result: "Message sent!",
      });
    } catch (err) {
      consola.error(err);
      res.status(500).json({
        result: "Internal server error",
      });
    }
  }
}

const router = new ChatRouter();
module.exports = router.router;
