import "dotenv/config";
import { LiveChatServer } from "./server";
import { utils } from "./modules";

const port = utils.normalizePort(process.env.PORT);

new LiveChatServer().start({
  port,
});
