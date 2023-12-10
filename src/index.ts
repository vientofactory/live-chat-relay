import "dotenv/config";
import { LiveChatServer } from "./server";
import { utils } from "./module";

const port = utils.normalizePort(process.env.PORT);

new LiveChatServer().start({
  port,
});
