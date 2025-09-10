const express=require('express')
const app=express();
const path=require('path');

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')))





app.get("/",function(req,res)
{
    res.render("index");
}) 

//Dynamic routes

app.get("/profile/:username",function(req,res)
{
    res.send(`Welcome babby, ${req.params.username}`);
})

app.get("/profile/:username/:age",function(req,res)
{
    res.send(`Yoo Babbyy of age ${req.params.age} and name ${req.params.username}`)
})


app.listen(3000,function(){
    console.log("It's running");
})