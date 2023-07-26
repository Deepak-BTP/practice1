const express= require('express');
const app=express();
const port=3011;
 app.get('/',(req,res)=>
 {
    res.send('done...!!!');
 });
 app.get('/:id',(req,res)=>{

 
    res.send('done with '+req.params.id);

 });
  app.listen(port,()=>
  {
    console.log(`the server ${port} is running successfully... :)`);
  });