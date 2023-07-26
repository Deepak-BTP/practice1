const express = require('express');
const multer = require('multer');
const path = require('path');


const app=express();
const port=3007;

const storage=multer.diskStorage({
    destination: (req,file, cb)=>{
        cb(null,'up');
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
    },
});

const upload=multer({storage});


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
    
});

app.post('/upload',upload.single('file'),(req,res)=>
{
    if(!req.file){
        return res.status(400).send(`no file are uploaded `);
    }
    res.send('the file is successfully uploaded....:)');
});

app.listen(port,()=>{
   console.log(`server is running on http://localhost:${port}`);
});