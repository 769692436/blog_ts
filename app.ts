"use strict";

import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';

const app = new Koa();
app.use(bodyParser());

app.on('error', (err, ctx) => {
    console.log('server error', err, ctx);
});

export = app;
