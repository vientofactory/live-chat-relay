import express, { json, urlencoded, static as static_, Request, Response, Application } from "express";
import { ILiveChatServerConfig } from "../types";
import asyncify from "express-asyncify";
import consola from "consola";

export class LiveChatServer {
  public readonly app: Application;
  constructor() {
    this.app = asyncify(express());
  }
  private init() {
    this.app.use(json());
    this.app.use(urlencoded());
    this.app.use(
      static_("static", {
        extensions: ["html"],
      })
    );
    this.app.disable("x-powered-by");
  }
  public start(param: ILiveChatServerConfig) {
    this.init();
    this.app.listen(param.port, () => {
      consola.ready({
        message: `Server listening on port ${param.port}`,
        badge: true,
      });
    });
  }
}
