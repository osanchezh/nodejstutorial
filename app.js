//execute with: node app.js
const logger=require('./logger');
logger.log('require log');
console.log('hello world 1.');
//window.console.log('12345');
//console.log(module);
const path = require('path');

//console.log(path.parse(__filename));
//console.log(path.parse(__dirname));
console.log(path.extname('app.js'));
const os = require('os');
//console.log(os.cpus());

//os
//console.log(os.arch());
//console.log(os.hostname());
//console.log(os.homedir());
//console.log(os.tmpdir());
//console.log(os.userInfo());
//console.log(os.platform());
//console.log(os.totalmem());
//console.log(os.freemem());

const EventEmitter = require('events');
const emitter =  new EventEmitter();
//event
//what will happen on that event
//trigger that event
emitter.on('log', (a,b)=>{
    console.log('Load event triggered');
    console.log(a,b);
});

emitter.emit('log',"a1","b1");

//emitter.emit('log');

//FILESYSTEM

const fs= require('fs');
/*
fs.writeFile('demo.txt','the content of file',(err)=>{
    if(err){
        console.log('Error occured');
    }else{
        console.log('File created successfully');
        fs.readFile('demo.txt', 'utf8',(err,file)=>{
            if(err){
                console.log('Error Ocured'+err);
            }else{
                console.log(file);
            }
        });
    }
});
*/
/*
fs.rename('demo.txt','demo2.txt',(err)=>{
    if(err){
        console.log('error ocurred'+err);
    }else{
        console.log('File Renamed successfully');
    }
});*/
/*
fs.appendFile('demo2.txt','new data', (err)=>{
    if(err){
        console.log('error ocurred');
    }else{
        console.log('data append');
    }
});
*/
/*
fs.unlink('demo2.txt',(err)=>{
    if(err){
        console.log('error ocurred');
    }else{
        console.log('file deleted');
    }

});
*/
/*
fs.mkdir('tutorial', (err)=>{
    if(err){
        console.log('Error Occured');
    }else {
        console.log('success');
    }
});


fs.rmdir('tutorial', (err)=>{
    if(err){
        console.log('Error Occured');
    }else {
        console.log('success');
    }
});
*/
/*
fs.mkdir('tutorial', (err)=>{
    if(err){
        console.log('Error Occured');
    }else {
        console.log('success');
        fs.writeFile('./tutorial/example.txt','any content',(err)=>{
            if(err){
                console.log('Error Occured');
            }else {
                console.log('success');
            }
        });
    }
});


fs.readdir('tutorial',(err,files)=>{
    if(err){
        console.log('Error Occured');
    }else{
        console.log(files)
        files.forEach((file)=>{
            fs.unlink('./tutorial/'+file,(err)=>{
                if(err){
                    console.log('Error Occured');
                }else {
                    console.log('success');
                }
            });
        })
    }
});
*/
/*
const readStream = fs.createReadStream('./tutorial/example.txt','utf8');
const writeStream = fs.createWriteStream('./tutorial/example2.txt');
readStream.on('data',(chunk)=>{
    //console.log(chunk);
    writeStream.write(chunk);
});

*/
/*
const readStream = fs.createReadStream('./tutorial/example.txt','utf8');
const writeStream = fs.createWriteStream('./tutorial/example2.txt');

readStream.pipe(writeStream);
*/

const http= require('http');
/*
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('welcome');
        res.end();
    }else if(req.url==='/about'){
        res.write('this is about');
        res.end();
    }else{
        res.write('other page');
        res.end();
    }
});

server.listen('3000');
*/

const server=http.createServer((req,res)=>{
   const readStream= fs.createReadStream('index.html');
   res.writeHead(200,{'Content-type':'text/html'});
   readStream.pipe(res);
}).listen('3000');