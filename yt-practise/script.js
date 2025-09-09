// // alert("Hii");


// var arr=[1,2,3,4,5]

// // arr.forEach(function(val)
// // {
// //     console.log("Fuck Hell you "+val)
// // })

// var newarray=arr.map(function(val)
// {
//     return val;
// })

// newarray.forEach(element => {
//     console.log(element);
// });
// console.log(newarray)

// arr.filter(function(val)
// {
//     if(val>3)
//         console.log (typeof(true));
// })

// console.log(arr.indexOf(3));



// var obj={
//     Name:"Kushagra"
// }

// console.log(typeof(obj))


// var api=await fetch("https://randomuser.me/api");
// var res=await api.json();
// const imge=document.getElementById("Random_User_Image");
// imge.src=res.results[0].picture.large;
// console.log(res.results[0].name.title);
// console.log(res.results[0].name.first);
// console.log(res.results[0].name.last);
// console.log(res.results[0].location.city);
// console.log(res.results[0].email);
//console.log(res.location);


// const { error } = require('console');
// const { error } = require('console');
// const fs=require('fs');

// fs.writeFile("File_Testing.txt","Pehli file test ho rhi hai",function(err) {
//     if(err)
//         console.error(err);
//     else
//         console.log("Done");
// });

// fs.appendFile("File_Testing.txt"," File bhi seekh gya",function(err){
//     if(err)console.error(err);
//     else console.log("Done");
// })


// fs.rename("File_Testing.txt","New_File.txt",function (err)
// {
//     if(err)
//         console.error(err)
//     else
//         console.log("Hogya")
// });

// fs.copyFile("New_File.txt","../CopyPasted2.txt",function (err)
// {
//     if(err) console.error(err);
//     else console.log("Krdiya");
// })


// const http=require('http');

// const server=http.createServer(function (req,res)
// {
//     res.end("Server Running");
// })

// server.listen(3000);


const { error } = require('console');
const express=require('express');
const app=express()


const users=[
    {
        id:1,
        name:"Kushagra"
    },
    {
        id:2,
        name:"Niyati"
    }
]

app.get('/user/:id',function(req,res,next)
{
    const id=parseInt(req.params.id);
    const user=users.find(u=>u.id===id)

    if(user)
    {
        res.send(`${user.name}`);
    }
    else
    {
        const err=new Error('User not found');
        err.status=404;
        next(err);
    }
})

app.use(function(err,req,res,next)
{
    console.error(err.stack);
    res.status(err.status||500).send(err.message);
});



// app.use(function(req,res,next)
// {
//     console.log("Middleware Check 1");
//     next();
// })
// app.get('/',function(req,res,next){
//     res.end('Chal rha hai')
//     return next(new Error("Console pr dikhega"));
// })

// app.use(function(err,req,res,next)
// {
//     console.log(err.stack)
//     res.status(500).send('Chud gya');
// })


app.listen(3000);