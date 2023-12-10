import "dotenv/config";
import { LiveChatServer } from "./server";
import { utils } from "./modules";
import { Server } from "socket.io";
import http from "http";
import consola from "consola";

const port = utils.normalizePort(process.env.PORT);
export const liveChatServer = new LiveChatServer();
export const httpServer = http.createServer(liveChatServer.app);
export const io = new Server(httpServer);

httpServer.listen(port, () => {
  consola.ready({
    message: `Server listening on port ${port}`,
    badge: true,
  });
});
