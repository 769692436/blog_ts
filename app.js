"use strict";
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const app = new Koa();
app.use(bodyParser());
app.on('error', (err, ctx) => {
    console.log('server error', err, ctx);
});
module.exports = app;
