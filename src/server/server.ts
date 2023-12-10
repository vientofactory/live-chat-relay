import express, { json, urlencoded, static as static_, Application } from "express";
import { readdirSync } from "fs";
import { join } from "path";
import asyncify from "express-asyncify";
import consola from "consola";

export class LiveChatServer {
  public readonly app: Application;
  constructor() {
    this.app = asyncify(express());
    this.init();
    this.setRouters();
  }
  private init() {
    this.app.use(
      json({
        limit: "10mb",
      })
    );
    this.app.use(
      urlencoded({
        extended: false,
      })
    );
    this.app.use(
      static_(join(__dirname, "static"), {
        extensions: ["html"],
      })
    );
    this.app.disable("x-powered-by");
  }
  private setRouters() {
    readdirSync(join(__dirname, "routes")).forEach((file) => {
      if (file.endsWith(".js")) {
        try {
          const route = require(join(__dirname, "routes", file));
          this.app.use(`/${file.split(".")[0]}`, route);
          consola.info(`Loaded Router: ${file}`);
        } catch (err) {
          consola.error(err);
        }
      }
    });
  }
}
