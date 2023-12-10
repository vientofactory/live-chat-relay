import "dotenv/config";
import { LiveChatServer } from "./server";
import { utils } from "./modules";
import http from "http";
import consola from "consola";

const port = utils.normalizePort(process.env.PORT);

const expressServer = new LiveChatServer();
export const server = http.createServer(expressServer.app);

server.listen(port, () => {
  consola.ready({
    message: `Server listening on port ${port}`,
    badge: true,
  });
});
