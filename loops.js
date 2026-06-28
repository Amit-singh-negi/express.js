import express from"express";


const app= express();

app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs')
app.get('/addUser',(req,res)=>{
    res.render('addUser')

})
app.post('/submitUser',(req,res)=>{
    console.log(req.body);
    
  res.render('submitUser',{
     name: req.body.name,
        age: req.body.age,
        email: req.body.email
  })

})
 app.get('/users',(req,res)=>{
    const users=['amit','rahul','neeraj','rohit']
    res.render('users',{users:users,isLogin:true})
  })
app.listen(2800)