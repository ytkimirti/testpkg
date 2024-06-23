console.log("STARTING WEB SERVER NEW");
// Print pwd
console.log("cwd", process.cwd());

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log("__dirname", __dirname);

// cd into the directory of the script
process.chdir(__dirname);
console.log("cwd", process.cwd());

// get file path from __filename

import next from "next";

const app = next({
  dev: false,
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  console.log("APP PREPARED");
  createServer((req, res) => {
    const parsedUrl = new URL(req.url, "http://w.w");
    const { pathname, query } = parsedUrl;

    if (pathname === "/a") {
      app.render(req, res, "/a", query);
    } else if (pathname === "/b") {
      app.render(req, res, "/b", query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
