import express from 'express'

const app=express();

app.use((req,res,next)=>{
    console.log("user is accessing " +req.url+" page");
    next();
    
})

app.get('/',(req,res)=>{
    res.send('home page')
})
app.get('/users',(req,res)=>{
    res.send("about page")
})
app.get('/products',(req,res)=>{
    res.send("products page")
})
 app.listen(2200)