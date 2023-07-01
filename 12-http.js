const http = require('http');

const server = http.createServer((req,res) =>{
    // console.log(req);
    if (req.url == '/') {
        res.end('Welcome to our home page');
        
    }
    if (req.url == '/about') {
        res.end('Welcome to our about page');
        
    }
    res.end(`
    <h1> Opps!! There is a error. </h1>
    <p> We can't find the page. </p>
    <a href="/">Back Home<a>
    `)
} );

server.listen(8000);