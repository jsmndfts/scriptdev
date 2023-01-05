const koa = require('koa');
const {koaBody} = require('koa-body');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');

const app = new koa();

app.use(koaBody());
app.use(cors());

let users = require('./users.js');

app.use(users.routes()).use(users.allowedMethods());
app.listen(3001, function() {
    console.log("Server at http://localhost:3001/users")
});

const mongo = new koa();

mongo.use(bodyParser());
mongo.use(cors());

const mongorouter = require('./MongoRouter');
mongo.use(mongorouter.routes()).use(mongorouter.allowedMethods);

mongo.listen(3002, function(){console.log("http://localhost:3002/users")});