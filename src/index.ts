import "dotenv/config";
import { expressServer } from "./server";
import { utils } from "./modules";
import http from "http";
import consola from "consola";

const port = utils.normalizePort(process.env.PORT);
export const httpServer = http.createServer(expressServer.app);

httpServer.listen(port, () => {
  consola.ready({
    message: `Server listening on port ${port}`,
    badge: true,
  });
});
