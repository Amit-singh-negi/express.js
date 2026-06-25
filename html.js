
import express from"express"

import path from "path";

const app=express();
 const absPath =path.resolve('html')
 const cssPath=path.resolve('cssFile')

 app.use(express.static(cssPath));
 console.log(cssPath);
 
app.get('/',(req,res)=>{
//  const absPath =path.resolve('html/home.html')
// res.sendFile(absPath)

// ----------  other method----------------

 res.sendFile(absPath+'/home.html')
})
 app.get('/login',(req,res)=>{
  res.sendFile(absPath+'/login.html')
 })
 app.get('/about',(req,res)=>{
     res.sendFile(absPath+'/about.html')
})
 
app.use((req,res)=>{
    res.status(404).sendFile(absPath+'/404.html')
})

 .listen(1900)