const express= require('express');
const app= express();
const port=3001;
app.get('/',(req,res)=>{
    res.send("hlo world :)");

});
app.get('/abc',(req,res)=>{
    res.send("welcome to abc :)");
});

app.get('/xyz',(req,res)=>{
    res.send("enter your name :)");
});



app.listen(port,()=>{
    console.log("server is runnning on hhtp://localhsot:${port}");
    
});