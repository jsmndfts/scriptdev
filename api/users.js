const Router = require('koa-router');

const router = new Router({
    prefix: '/users'
});

let users = [
    {FirstName: "Baga", LastName: "Kimberly"}
]; 

router.get('/', (ctx, next) => {
    ctx.body = users;
    next();
});

module.exports = router;