const koa = require('koa');
const {koaBody} = require('koa-body');
const cors = require('@koa/cors');

const app = new koa();

app.use(koaBody());
app.use(cors());

let users = require('./users.js');

app.use(users.routes()).use(users.allowedMethods());
app.listen(3001, function() {
    console.log("Server at http://localhost:3001/users")
})

