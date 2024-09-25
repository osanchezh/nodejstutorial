const express = require('express');
const route = express.Router();

const movies= [{id:1,name:'a'},
    {id:2,name:'a'},
    {id:3,name:'b'},
    {id:4,name:'c'},
    {id:5,name:'d'},
    {id:6,name:'e'}
];

route.get('/',(req,res)=>{
    res.send('Hello from nodemon');
});

route.get('/api/movies',(req,res)=>{
    res.send(movies);
});

route.get('/api/movies/:id',(req,res)=>{
    let movie=movies.find(c=>parseInt(c.id)===parseInt(req.params.id));

    if(!movie){
        res.send(`no movie for id:${req.params.id}`);   
    }else{
        res.send(movie);
    }
   
});

route.post('/api/movies',(req,res)=>{
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

route.put('/api/movies/:id', (req,res)=>{
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

route.delete('/api/movies/:id',(req,res)=>{
    let movie=movies.find(c=>parseInt(c.id)===parseInt(req.params.id));
    if(!movie){
        res.send(`no movie for id:${req.params.id}`);   
    }
    const index=movies.indexOf(movie);
    movies.splice(index,1);
    res.send(movie);
});

module.exports = route;