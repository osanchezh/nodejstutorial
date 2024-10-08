const express=require('express');
const app=express();
const path= require('path');

const Joi= require('joi');
const movies = require('./movies');
app.use(express.json());//trabajar con post get

app.use('/abc',movies);

app.use('/api/movies',(req,res,next)=>{
    console.log(req.url, req.method);
    next();
});
/*
const movies= [{id:1,name:'a'},
    {id:2,name:'a'},
    {id:3,name:'b'},
    {id:4,name:'c'},
    {id:5,name:'d'},
    {id:6,name:'e'}
];

app.get('/',(req,res)=>{
    res.send('Hello from nodemon');
});

app.get('/api/movies',(req,res)=>{
    res.send(movies);
});

app.get('/api/movies/:id',(req,res)=>{
    let movie=movies.find(c=>parseInt(c.id)===parseInt(req.params.id));

    if(!movie){
        res.send(`no movie for id:${req.params.id}`);   
    }else{
        res.send(movie);
    }
   
});

app.post('/api/movies',(req,res)=>{
    const schema= Joi.object({
        name: Joi.string().min(3).required()
    });

    const result= schema.validate(req.body);
    console.log(result);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    if(!req.body.name || req.body.name.length<3){
        res.status(400).send('name movie es longer than 3 character');
        return;
    }
    let movie={
      id: movies.length+1,
      name: req.body.name
    };
    movies.push(movie);
    res.send(movie);
});

app.put('/api/movies/:id', (req,res)=>{
    let movie=movies.find(c=>parseInt(c.id)===parseInt(req.params.id));

    if(!movie){
        res.send(`no movie for id:${req.params.id}`);   
    }

    const schema= Joi.object({
        name: Joi.string().min(3).required()
    });

    const result= schema.validate(req.body);
    console.log(result);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    movie.name=req.body.name;
    res.send(movie);
});

app.delete('/api/movies/:id',(req,res)=>{
    let movie=movies.find(c=>parseInt(c.id)===parseInt(req.params.id));
    if(!movie){
        res.send(`no movie for id:${req.params.id}`);   
    }
    const index=movies.indexOf(movie);
    movies.splice(index,1);
    res.send(movie);
});
*/

app.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
    console.log(__dirname);
});

app.get('/person',(req,res)=>{
    res.send('Hello from nodemon from person');
});

app.get('/person/:name/:age',(req,res)=>{
    
    console.log(req.params);
    
    res.send(req.query);
    //res.send('Hello from nodemon from person');
});

const port =process.env.PORT || '5000';
app.listen(port,()=>console.log(`listen to port:${port}`));