require('dotenv').config({});
const express = require('express');
const { parse } = require('url');
const nextjs = require('next');
const http = require('http');

const dev = process.env.NODE_ENV !== 'production';
const app = nextjs({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const httpsServer = http.createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    });
    httpsServer.listen(process.env.PORT, (err) => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      // console.log(`> Ready on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((ex) => {
    // eslint-disable-next-line no-console
    // console.error(ex.stack);
    process.exit(1);
  });
