const path = require("path");

const express = require("express");
const expressStaticGzip = require("express-static-gzip");
const next = require("next");

const isProduction = process.env.NODE_ENV === "production";

const app = next({ dev: !isProduction });
const handler = app.getRequestHandler();
const server = express();

const port = 3000;

if (isProduction) {
  server.use(
    "/_next/static",
    expressStaticGzip(path.join(__dirname, ".next", "static"), {
      enableBrotli: true,
      orderPreference: ["br"],
    })
  );
}

app.prepare().then(() => {
  server.use(handler);

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
