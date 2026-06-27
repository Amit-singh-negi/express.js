import express from "express"
const app = express();

function ageCheckRoutsMiddleware(req,res,next){
 if(! req.query.age || req.query.age<18){
    res.send(' you cannot access this page ')
 } else{
    next();
 }
}

function checkRoutsMiddlewareURL(req,res,next){
   console.log('this request url is ',req.url);
    next()
}



app.get('/',(req,res)=>{
    res.send('<h1>this is home page</h1>')
})
app.get('/login',(req,res)=>{
 res.send('<h1>this is login page </h1>')

})

app.get('/users',ageCheckRoutsMiddleware,checkRoutsMiddlewareURL,(req,res)=>{
    res.send('<h1>this is users page</h1>')
})
app.get('/products',ageCheckRoutsMiddleware,checkRoutsMiddlewareURL,(req,res)=>{
    res.send('<h1>this is products page</h1>')

})
app.listen(2400)