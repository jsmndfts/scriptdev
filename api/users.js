const Router = require('koa-router');

const router = new Router({
    prefix: '/users'
});
let id = 1;

let users = [
    {id: id++, firstname: "Baga", lastname: "Kimberly", edit: false}
]; 

router.get('/', (ctx, next) => {
    ctx.body = users;
    next();
});
router.post('/create', (ctx, next) => {

    console.log(ctx.request.body);
    if(!ctx.request.body.firstname || !ctx.request.body.lastname)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Field";
        console.log("Missing Field");
    }
    else
    {
        users.push({id: id++, firstname: ctx.request.body.firstname, lastname: ctx.request.body.lastname, edit: false});
        ctx.response.status = 201;
        ctx.body = "Successfully Added User";
        console.log("Successfully Added User");
    }
    next();
});

router.post('/delete', (ctx, next) => {
    console.log(ctx.request.body);
    if(!ctx.request.body.id)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Fields";
        console.log("Missing Fields");
    }
    else
    {
        var index = users.findIndex(x => x.id == ctx.request.body.id);
        console.log(index)
        users.splice(index, 1);
        ctx.response.status = 201;
        ctx.body = "user Deleted";
        console.log("User Deleted");
    }
    next();
});

router.post('/update', (ctx, next) => {
    if(!ctx.request.body.firstname || !ctx.request.body.lastname || !ctx.request.body.id)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Fields";
        console.log("Missing Fields");
    }
    else
    {
        ctx.response.status = 201;
        ctx.body = "user Deleted";
        var index = users.findIndex(x => x.id == ctx.request.body.id);
        users[index].firstname = ctx.request.body.firstname;
        users[index].lastname =ctx.request.body.lastname;
        console.log("User Updated");
    }
    next();
});

module.exports = router;