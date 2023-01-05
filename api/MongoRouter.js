const Router = require('koa-router');
const {GetUsers, insertAccount, updateAccount, deleteAccount} = require('./mongo/MongoData');

const router = new Router({
    prefix: "/users"
});

router.get('/', async (ctx, next) => {
    ctx.body = await GetUsers();
})
//Insert New Document
router.post('/insert', async (ctx, next) =>{
    if(!ctx.request.body.id || !ctx.request.body.firstname || !ctx.request.body.lastname)
    {
        ctx.response.status = 404;
        ctx.body = "Missing fields";
    }
    else
    {
        var res = await insertAccount(ctx.request.body.id, ctx.request.body.firstname, ctx.request.body.lastname);
        if(res)
        {
            console.log("Success Insert");
            ctx.body = "Successfully Added Account";
            ctx.response.status = 201;
        }
    }
    next();
});

//Update Document
router.post('/update', async (ctx, next) => {
    if(!ctx.request.body.id || !ctx.request.body.firstname || !ctx.request.lastname)
    {
        ctx.response.status = 404;
        ctx.body = "Missing fields";
    }
    else
    {
        var res = await updateAccount(ctx.request.body.id, ctx.request.body.firstname, ctx.request.lastname)
        if(res)
        {
            ctx.response.status = 201;
            ctx.body = "Successful Update";
            console.log("Success Update");

        }

    }
    next();
});

//Delete a Document
router.post('/delete', async (ctx, next) =>{
    if(!ctx.request.body.id)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Fields";
    }
    else
    {
        var res = await deleteAccount(ctx.request.body.id);
        if(res)
        {
            ctx.response.status = 201;
            ctx.body = "Account Deleted";
            console.log("Account Deleted");
        }
    }
    next();
})

module.exports = router;