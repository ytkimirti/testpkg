import httpServer from "http-server";
import opener from "opener";
import minimist from "minimist";

// CD into the directory of the script
process.chdir(import.meta.dirname);

const argv = minimist(process.argv.slice(2), {
  alias: {
    p: "port",
  },
});

const port = argv.port || 3000;

const server = httpServer.createServer({
  root: "dist",
});

server.listen(port, "localhost", function () {
  console.info("Hit CTRL-C to stop the server");
  const openUrl = `http://localhost:${port}`;
  console.info("Open: " + openUrl);
  opener(openUrl);
});
