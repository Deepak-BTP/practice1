const express=require('express');
const app=express();
const port=3117;
app.use(express.urlencoded({ extended: true }));
let user=[];
app.get('/',(req,res)=>
{
    
   res.send(`<title>hii</title><h1>want to add user</h1>
   <h1>enter the name and click submit</h1>
   <h1>want to view the user</h1>
   <h1>click view</h1>
    <form action="/submit" method="POST">
      <label for="username">Enter your username:</label>
      <input type="text" id="username" name="username">
      <h1></h1><button type="submit">Submit</button>
      </form>
      <form action="/view" method="POST">
      <h1></h1><button type="submit">view</button>
    </form>
  `);
});
app.post('/add',(req,res)=>
{
    
   res.send(`<title>hii</title><h1>want to add user</h1>
   <h1>enter the name and click submit</h1>
   <h1>want to view the user</h1>
   <h1>click view</h1>
    <form action="/submit" method="POST">
      <label for="username">Enter your username:</label>
      <input type="text" id="username" name="username">
      <h1></h1><button type="submit">Submit</button>
      </form>
      <form action="/view" method="POST">
      <h1></h1><button type="submit">view</button>
    </form>
  `);
});
app.post('/view',(req,res)=>{
    const userJSON = JSON.stringify(user);
    res.send(userJSON+`<form action="/add" method="post">
    <h1></h1><button type="submit">add</button>
    </form>`);
});
app.post('/submit', (req, res)=>
{
const {username}=req.body.username;

if(!req.body.username){
return res.send(`name needed...
<form action="/add" method="post"
<h1></h1><button type="submit">add</button>
</form>`);
}
const newUser ={
    //id:user.length+1,
    username:req.body.username,
   
};
user.push(newUser);

res.send(`hiii sucessfully added ${req.body.username}
<form action="/next" method="POST">
      <label for="prof">Enter your profession:</label>
      <input type="text" id="prof" name="prof" username="username">
      <h1></h1><button type="submit">next</button>
    </form>
`);

});

app.post('/next',(req,res)=>{
    
    const {prof}=req.body.prof;
    
    
    if(!req.body.prof){
        return res.send(`profession needed..
        <form action="/submitprof" method="post">
        <h1></h1>
        <button type="submit">add</button>
        </form>`);
    }
    const profuser={
        prof:req.body.prof,
    };
    user.push(profuser);
    res.send(` he is a ${req.body.prof}
    <form action="/view" method="post">
    <h1></h1><button type="submit">view</button>
    </form>`);

});
app.post('/submitprof',(req,res)=>
{
    res.send(`
<form action="/next" method="POST">
      <label for="prof">Enter your profession:</label>
      <input type="text" id="prof" name="prof" username="username">
      <h1></h1><button type="submit">next</button>
    </form>
`);
});
app.listen(port,()=>
{
    console.log(`server is running successfully in http://localhost:${port}`);
});