const http=require('http');

const server = http.createServer((req, res)=>{
    res.end("Hello world");
});

// serach node js http module to know more
// ports 3088 ,we know some ports (server's object is boot up)
// It creates a server (http://localhost:3000/)
// Another method to go to local host is on terminal " curl localhost:3000"
server.listen(3000, ()=>{  // it expect a callback function
    console.log("server running at port 3000");
});    

