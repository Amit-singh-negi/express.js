const express =require('express')
// const express =require('express')()
const app =express();
app.get("/contact",(req,res)=>{
    res.send('<h1>basic node js exmple</h2>')
});
app.listen(1600)