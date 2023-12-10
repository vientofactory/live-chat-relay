import { Router, Request, Response } from "express";
import { Server } from "socket.io";
import { server } from "../..";

const io = new Server(server);

class ChatRouter {
  public readonly router: Router;
  constructor() {
    this.router = Router();
    this.router.post("/", this.MainController);
  }
  private async MainController(req: Request, res: Response) {
    io.emit("message", req.body);
    res.json({
      result: "Message sent!",
    });
  }
}

const router = new ChatRouter();
module.exports = router.router;
