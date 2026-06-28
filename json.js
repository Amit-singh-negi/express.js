import express from"express"
import userData from './users.json' with{type:'json'}
const app=express()
 app.get('/',(req,res)=>{
console.log(userData);

res.send(userData)
 })
 app.get('/user/id/:id',(req,res)=>{
    const id =req.params.id
    console.log(id);
    let filterUser=userData.filter((user)=>user.id==id)
    res.send(filterUser)

 })
app.get('/username/:name',(req,res)=>{
    const name=req.params.name
    console.log(name);
    let filterName=userData.filter((user)=> user.name.toLowerCase()==name.toLowerCase())
    res.send(filterName)
    
})

 app.listen(3500)